import React from "react";
import { Typography } from '@mui/material';

let todayYear = new Date().getFullYear();

function Footer() {

    return (
        <footer>
            <Typography component={'span'}>
                 <p>Privacy Policy | © {todayYear} Highradius Corporation. All rights reserved.</p>
            </Typography>
            
        </footer>
    );

}

export default Footer;