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

export default function AnalyViewPopup(props) {
  const initialInput = {
    clear_date_from: new Date(),
    clear_date_to: new Date(),
    due_in_date_from: new Date(),
    due_in_date_to: new Date(),
    baseline_create_date_from: new Date(),
    baseline_create_date_to: new Date(),
    invoice_currency : "",
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
              Analytics View
            </Typography>
            <form onSubmit={handleSubmit}>
              {/* -----------------------------------------------------Clear Date---------------------------------------------------------- */}
              <div style={{ marginTop: "30px" }} className="row grid">
                <div style={{marginRight : '30px'}} className="col">
                  <div style={{marginBottom : '10px'}} className="row">
                    <label>Clear Date (from : to)</label>

                    <MyInput
                      onChange={handleChange}
                      
                      type="date"
                      req={true}
                      name="clear_date_from"
                      value={inputField.clear_date_from}
                    />
                  </div>
                  <div className="row">
                    <MyInput
                      onChange={handleChange}
                      type="date"
                      req={true}
                      name="clear_date_to"
                      value={inputField.clear_date_to}
                    />
                  </div>
                </div>
                {/* -----------------------------------------------------Due Date---------------------------------------------------------- */}
                <div className="col">
                  <div style={{marginBottom : '10px'}} className="row">
                    <label>Due Date (from : to)</label>

                    <MyInput
                      onChange={handleChange}
                      type="date"
                      req={true}
                      name="due_in_date_from"
                      value={inputField.due_in_date_from}
                    />
                  </div>
                  <div className="row">
                    <MyInput
                      onChange={handleChange}
                      type="date"
                      req={true}
                      name="due_in_date_to"
                      value={inputField.due_in_date_to}
                    />
                  </div>
                </div>
              </div>
 {/* -----------------------------------------------------BaseLine Create Date--------------------------------------------------------- */}
              <div style={{ marginTop: "30px" }} className="row grid">
                <div style={{marginRight : '30px'}} className="col">
                  <div style={{marginBottom : '10px'}} className="row">
                    <label>Baseline Create Date (from : to)</label>
                    <MyInput
                      onChange={handleChange}
                      type="date"
                      req={true}
                      name="baseline_create_date_from"
                      value={inputField.baseline_create_date_from}
                    />
                  </div>
                  <div className="row">
                    <MyInput
                      onChange={handleChange}
                      type="date"
                      req={true}
                      name="baseline_create_date_to"
                      value={inputField.baseline_create_date_to}
                    />
                  </div>
                </div>
 {/* -----------------------------------------------------Invoice Currency----------------------------------------------------------- */}
                <div className="col">
                  <div className="row">
                    <label>Invoice Currency</label>
                    <MyInput
                    onChange={handleChange}
                    label="Invoice Currency"
                    req={true}
                    name="invoice_currency"
                    value={inputField.invoice_currency}
                  />
                  </div>
                  <div className="row">
                    
                  </div>
                </div>
              </div>
 {/* ------------------------------------------------------SEARCH BUTTON------------------------------------------------------------ */}
              <div style={{ margin: "5% 0 1%" }} className="row">
                <div className="col">
                  <Button
                    type="submit"
                    //   onClick={() => props.setTrigger(false)}
                    style={{
                      minWidth: "100%",
                      minHeight: "50px",
                      color: "white",
                      borderColor: "white",
                    }}
                    variant="outlined"
                  >
                    Submit
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
