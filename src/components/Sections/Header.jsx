import React from 'react'
import Logo from "../../static/logo.png";
import Highradius from "../../static/highradius.png";
import { AppBar, Typography } from '@mui/material';


function Header() {
    return (
        <header >
            <AppBar className="header">
                <div className='row'>
                    <div className='col-lg-4 col-md-3 col-sm-6'>
                       
                            <img src={Logo} width= "200rem" height = "50rem"/>
                       
                    </div>
                    <div style={{textAlign : 'center' }} className='col-lg-4 col-md-6 col-sm-12'>
                      
                            <img src={Highradius} width="60%" height="90%" />
                       
                    </div>

                </div>
                <div className='row'>

                    <div className='col-4'>
                        <Typography variant='h6'>
                            <p> Invoice List</p>
                        </Typography>
                    </div>

                </div>






            </AppBar>

        </header>
    );
}

export default Header