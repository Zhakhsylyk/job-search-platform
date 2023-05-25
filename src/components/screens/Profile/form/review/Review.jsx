import * as React from 'react';
import Typography from '@mui/material/Typography';
import avatar from "../../../../../images/candidate.png";


export default function Review() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
                Review
            </Typography>
            <div style={{ marginTop: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30 }}>
                    <img src={avatar} alt="avatar" width={150} height={150} />
                    <div>
                        <p>Name:
                            <span>Alikhan Zhakhsylyk</span>
                        </p>
                        <p>
                            Email: <span>azhakhsylyk@gmail.com</span>{" "}
                        </p>
                        <p>
                            Contact Number: <span>87081478456</span>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}