import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import MyInput from "../AddSearchuttons";
import { Alert, Button, Typography } from "@mui/material";
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

export default function AdvSearchPopup(props) {
  const initialInput = {
    cust_number: "",
    buisness_year: "",
    doc_id: "",
    invoice_id: "",
  };

  const [inputField, setInputField] = useState(initialInput); //Input Field State

// ----------------------------------------------------------------Update InputField-----------------------------------------
  function handleChange(e) {
    const { name, value } = e.target;

    setInputField((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
// --------------------------------------------------------------Submit Handle-----------------------------------------------
  function handleSubmit(event) {
    event.preventDefault();

    // const url = "http://localhost:8080/HRC_Project/AdvanceSearch?";
    // let str = `cust_number=${inputField.cust_number}&buisness_year=${inputField.buisness_year}&doc_id=${inputField.doc_id}&invoice_id=${inputField.invoice_id}`;

    // axios
    //   .get(url + str)
    //   .then((res) => {
    //     if(res.status === 200){
          
    //     }

    //   })
    //   .catch((error) => console.log(error));

      props.search(inputField); //Send advance search input field to Buttons
  }

//---------------------------------------------------------------Layout-------------------------------------------------------

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
              Advance Search
            </Typography>
            <form onSubmit={handleSubmit}>
{/* -----------------------------------------------------DOC-ID---------------------------------------------------------- */}
            <div style={{ marginTop: "30px" }} className="row grid">
              <div className="col">
                <MyInput
                  req={true}
                  name="doc_id"
                  value={inputField.doc_id}
                  onChange={handleChange}
                  label="Document Id"
                />
              </div>
{/* -----------------------------------------------------Invoice-ID---------------------------------------------------------- */}
              <div className="col">
                <MyInput
                  req={true}
                  onChange={handleChange}
                  name="invoice_id"
                  value={inputField.invoice_id}
                  label="Invoice Id"
                />
              </div>
            </div>
{/* -----------------------------------------------------Customer Number--------------------------------------------------------- */}
            <div className="row grid">
              <div className="col">
                <MyInput
                  req={true}
                  onChange={handleChange}
                  name="cust_number"
                  value={inputField.cust_number}
                  label="Customer Number"
                />
              </div>
{/* -----------------------------------------------------------Business Year---------------------------------------------------------- */}
              <div className="col">
                <MyInput
                  req={true}
                  onChange={handleChange}
                  name="buisness_year"
                  value={inputField.buisness_year}
                  label="Business Year"
                />
              </div>
            </div>
{/* ------------------------------------------------------SEARCH BUTTON------------------------------------------------------------ */}
            <div style={{ margin: "5% 0 1%" }} className="row">
              <div className="col">
                <Button
                  type = "submit"
                //   onClick={() => props.setTrigger(false)}
                  style={{
                    minWidth: "100%",
                    minHeight: "50px",
                    color: "white",
                    borderColor: "white",
                  }}
                  variant="outlined"
                >
                  Search
                </Button>
              </div>
 {/* -------------------------------------------------------CANCEL BUTTON--------------------------------------------------------- */}
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
    </div>
  );
}
