import * as React from "react";
import Typography from "@mui/material/Typography";
import avatar from "../../../../../images/candidate.png";
import { Resume } from "../../../../layout/resume/Resume";

export default function Review(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
        Review
      </Typography>
      <Resume data={props}/>
    </React.Fragment>
  );
}


// <div style={{ marginTop: 20 }}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: 30,
//           }}
//         >
//           <img src={avatar} alt="avatar" width={150} height={150} />
//           <div>
//             <p>
//               Name:
//               <span>Alikhan Zhakhsylyk</span>
//             </p>
//             <p>
//               Email: <span>azhakhsylyk@gmail.com</span>{" "}
//             </p>
            
//           </div>
//         </div>
//       </div>