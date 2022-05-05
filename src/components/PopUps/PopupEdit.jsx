import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import MyInput from "../AddSearchuttons";
import { Alert, Snackbar, Button, Typography } from "@mui/material";
import axios from "axios";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,

    bgcolor: "background.paper",
    background: "#2c3d4d",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    flexGrow: 1,
};

export default function EditPopup(props) {
    const initialInput = {
        sl_no : props.Slno ,
        invoice_currency: "",
        cust_payment_terms: "",
      };  
    const [openAddAlert, setOpenAddAlert] = useState(false);//For SnackBar
    const [inputField, setInputField] = useState(initialInput);

   
//-----------------------------------------------------------Update Input Fields---------------------------------------------------------------

    function handleChange(e) {
        const { name, value } = e.target;
    
        setInputField((prevValue) => {
          return { ...prevValue, [name]: value,sl_no :props.Slno };
        });
        console.log(inputField);
      }
//------------------------------------------------------------Send Post Req---------------------------------------------------
    function handleSubmit(e){
        e.preventDefault();
        

        const url = "http://localhost:8080/HRC_Project/EditData?";
        let str = `sl_no=${inputField.sl_no}&invoice_currency=${inputField.invoice_currency}&cust_payment_terms=${inputField.cust_payment_terms}`;

       axios
      .post(url+str)
      .then((res) => {
        if(res.status === 200){
          setOpenAddAlert(true);
          props.setTrigger(false);
        }


      })
      .catch((error) => console.log(error));
      setInputField(initialInput);

      console.log(props.refreshh);
      props.refreshh();
  }
    


//---------------------------------------------------------------Main------------------------------------------------------

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.trigger}
                onClose={() => props.setTrigger(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.trigger}>
                    <Box sx={style}>
                        <Typography
                            color={"white"}
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Edit
                        </Typography>
{/*-------------------------------------------------------Input Fields------------------------------------------------------------------  */  }

                        <form onSubmit={handleSubmit} >
                            <div style={{ marginTop: "30px" }} className="row grid">
                                <div className="col">
                                    <MyInput onChange={handleChange} name="invoice_currency" value={inputField.invoice_currency} label="Invoice Currency" />
                                </div>
                                <div className="col">
                                    <MyInput onChange={handleChange} name="cust_payment_terms" value={inputField.cust_payment_terms} label="Customer Payment Terms" />
                                </div>
                            </div>
{/*-------------------------------------------------------Edit Button------------------------------------------------------------------  */  }

                            <div style={{ margin: "5% 0 1%" }} className="row">
                                <div className="col">
                                    <Button
                                        type = "submit"
                                        style={{
                                            minWidth: "100%",
                                            minHeight: "50px",
                                            color: "white",
                                            borderColor: "white",
                                        }}
                                        variant="outlined"
                                    >
                                        Edit
                                    </Button>
                                </div>
{/*-------------------------------------------------------Cancel Button------------------------------------------------------------------  */  }

                                <div className="col">
                                    <Button
                                        onClick={() => props.setTrigger(false)}
                                        style={{
                                            minWidth: "100%",
                                            minHeight: "50px",
                                            color: "white",
                                            borderColor: "white",
                                        }}
                                        variant="outlined"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>
{/*-------------------------------------------------------SnackBar------------------------------------------------------------------  */  }

            <Snackbar
                open={openAddAlert}
                autoHideDuration={6000}
                onClose={() => setOpenAddAlert(false)}
            >
                <Alert
                    onClose={() => setOpenAddAlert(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Row Edited Successfully!
                </Alert>
            </Snackbar>
        </div>
    );
 }