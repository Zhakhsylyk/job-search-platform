import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Review from "./review";
import logo from "../../../../images/jalda-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import Personal from "./personal";
import Experience from "./experience";
import { hasEmptyFields } from "../../../../helpers";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Loader from "../../../loader/Loader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AuthService, handleError } from "../../../../services";
import { useDispatch } from "react-redux";
import { getCities } from "../../../../store/actions/dictionary";
import CancelIcon from "@mui/icons-material/Cancel";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Jalda.kz
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Personal", "Experience & Skills", "Review"];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Form() {
  const [personalData, setPersonalData] = useState({
    name: "",
    mobile: "",
    city: "",
    country: "",
    region: "",
  });

  const [experienceData, setExperienceData] = useState({
    title: "",
    org: "",
    levels: "",
    skills: "",
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const [success, setSuccess] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    dispatch(getCities());
  }, []);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Personal data={personalData} setData={setPersonalData} />;
      case 1:
        return <Experience data={experienceData} setData={setExperienceData} />;
      case 2:
        return (
          <Review personalData={personalData} experienceData={experienceData} />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSave = async () => {
    try {
      const body = {
        category: {
          id: 3,
        },
        cityDTO: {
          id: 2,
        },
        description: "asdflkdsjflk lkdsjflkslfad djlasflad",
        jobExperienceLevel: {
          id: 2,
        },
        salaryExpected: 3000,
        tags: [
          {
            id: 1,
          },
          {
            id: 3,
          },
        ],
        types: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      };
      const res = await AuthService.post("/resumes/upload", body);
      setSuccess(true);
    } catch (err) {
      handleError(err);
      setSuccess(false);
    }
    setActiveStep(activeStep + 1);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Toolbar>
        <img src={logo} witdh={36} height={36} />
      </Toolbar>
      {!loading ? (
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Build Resume
            </Typography>
            {activeStep === steps.length ? (
              success ? (
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <CheckCircleIcon color="success" sx={{ fontSize: 64 }} />
                  <Typography variant="h5" gutterBottom>
                    Resume successfully created!
                  </Typography>
                  <RouterLink to="/jobs">
                    <Button
                      variant="contained"
                      sx={{ marginTop: 3 }}
                      endIcon={<SearchIcon sx={{ color: "#fff" }} />}
                    >
                      Start Search
                    </Button>
                  </RouterLink>
                </div>
              ) : (
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <CancelIcon color="error" sx={{ fontSize: 64 }} />
                  <Typography variant="h5" gutterBottom>
                    Resume creation failed!
                  </Typography>
                  <RouterLink to="/me">
                    <Button variant="contained" sx={{ marginTop: 3 }}>
                      Try Again
                    </Button>
                  </RouterLink>
                </div>
              )
            ) : (
              <React.Fragment>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={
                      activeStep === steps.length - 1 ? handleSave : handleNext
                    }
                    sx={{ mt: 3, ml: 1 }}
                    startIcon={
                      activeStep === steps.length - 1 ? (
                        <SaveIcon sx={{ color: "#fff" }} />
                      ) : null
                    }
                    disabled={
                      (activeStep === 0 && hasEmptyFields(personalData)) ||
                      (activeStep === 1 && hasEmptyFields(experienceData))
                        ? true
                        : false
                    }
                  >
                    {activeStep === steps.length - 1 ? "Save" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
          <Copyright />
        </Container>
      ) : (
        <Loader>Saving Resume</Loader>
      )}
    </ThemeProvider>
  );
}
