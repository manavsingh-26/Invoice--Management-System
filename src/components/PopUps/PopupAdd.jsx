import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import MyInput from "../AddSearchuttons";
import axios from "axios";
import { Alert, Snackbar, Button, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,

  bgcolor: "background.paper",
  background: "#2c3d4d",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  flexGrow: 1,
};

export default function AddPopUp(props) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  const initialInput = {
    business_code: "",
    cust_number: "",
    clear_date: today,
    buisness_year: "",
    doc_id: "",
    posting_date: today,
    document_create_date: today,
    due_in_date: today,
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: today,
    cust_payment_terms: "",
    invoice_id: "",
  };

  const [openAddAlert, setOpenAddAlert] = useState(false);

  const [inputField, setInputField] = useState(initialInput);
  

  function handleChange(e) {
    const { name, value } = e.target;

    setInputField((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();

    const url = "http://localhost:8080/HRC_Project/AddData?";
    let str = `business_code=${inputField.business_code}&customer_number=${inputField.cust_number}&clear_date=${inputField.clear_date}&buisness_year=${inputField.buisness_year}&doc_id=${inputField.doc_id}&posting_date=${inputField.posting_date}&document_create_date=${inputField.document_create_date}&due_in_date=${inputField.due_in_date}&invoice_currency=${inputField.invoice_currency}&document_type=${inputField.document_type}&posting_id=${inputField.posting_id}&total_open_amount=${inputField.total_open_amount}&baseline_create_date=${inputField.baseline_create_date}&cust_payment_terms=${inputField.cust_payment_terms}&invoice_id=${inputField.invoice_id}`;

    axios
      .post(url + str)
      .then((res) => {
        if(res.status === 200){
          setOpenAddAlert(true);
          props.setTrigger(false);
        }

      })
      .catch((error) => console.log(error));
  }

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
            <form onSubmit={HandleSubmit}>
              <Typography
                color={"white"}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Add
              </Typography>
{/* ---------------------------------------------------------------Input Fields--------------------------------------------------------------------- */}
              <div className="row grid">
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Buisness Code"
                    req={true}
                    name="business_code"
                    value={inputField.business_code}
                  />
                </div>
                <div className="col">
                  <MyInput
                    type="number"
                    onChange={handleChange}
                    label="Customer Number"
                    req={true}
                    name="cust_number"
                    value={inputField.cust_number}
                  />
                </div>
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Clear Date"
                    type="date"
                    req={true}
                    name="clear_date"
                    value={inputField.clear_date}
                  />
                </div>
                <div className="col">
                  <MyInput
                    type="number"
                    onChange={handleChange}
                    label="Business Year"
                    req={true}
                    name="buisness_year"
                    value={inputField.buisness_year}
                  />
                </div>
              </div>
              <div className="row grid">
                <div className="col">
                  <MyInput
                    type="number"
                    onChange={handleChange}
                    label="Document Id"
                    req={true}
                    name="doc_id"
                    value={inputField.doc_id}
                  />
                </div>
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Posting Date"
                    type="date"
                    req={true}
                    name="posting_date"
                    value={inputField.posting_date}
                  />
                </div>
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Document Create Date"
                    type="date"
                    req={true}
                    name="document_create_date"
                    value={inputField.document_create_date}
                  />
                </div>
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Due Date"
                    type="date"
                    req={true}
                    name="due_in_date"
                    value={inputField.due_in_date}
                  />
                </div>
              </div>
              <div className="row grid">
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Invoice Currency"
                    req={true}
                    name="invoice_currency"
                    value={inputField.invoice_currency}
                  />
                </div>
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Document Type"
                    req={true}
                    name="document_type"
                    value={inputField.document_type}
                  />
                </div>
                <div className="col">
                  <MyInput
                    type="number"
                    onChange={handleChange}
                    label="Posting Id"
                    req={true}
                    name="posting_id"
                    value={inputField.posting_id}
                  />
                </div>
                <div className="col">
                  <MyInput
                    type="number"
                    onChange={handleChange}
                    label="Total open amount"
                    req={true}
                    name="total_open_amount"
                    value={inputField.total_open_amount}
                  />
                </div>
              </div>
              <div className="row grid">
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Baseline Create Date"
                    type="date"
                    req={true}
                    name="baseline_create_date"
                    value={inputField.baseline_create_date}
                  />
                </div>
                <div className="col">
                  <MyInput
                    onChange={handleChange}
                    label="Customer Payment Terms"
                    name="cust_payment_terms"
                    value={inputField.cust_payment_terms}
                  />
                </div>
                <div className="col">
                  <MyInput
                    type="number"
                    onChange={handleChange}
                    label="Invoice Id"
                    req={true}
                    name="invoice_id"
                    value={inputField.invoice_id}
                  />
                </div>
                <div className="col "></div>
              </div>
{/*-------------------------------------------------------ADD Button ------------------------------------------------------------------  */  }

              <div  style={{ margin: "3% 2% 1%" }} className="row">
                <div className="col">
                  <Button
                    
                    type="submit"
                   
                    style={{
                      minWidth: "100%",
                      minHeight: "50px",
                      color: "white",
                      borderColor: "white",
                    }}
                    variant="outlined"
                  >
                    Add
                  </Button>
                </div>
{/*-------------------------------------------------------Cancel Button------------------------------------------------------------------  */  }

                <div className="col">
                  <Button
                    onClick={() => {
                      props.setTrigger(false);
                      setInputField(initialInput);
                    }}
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
          Row Added Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
