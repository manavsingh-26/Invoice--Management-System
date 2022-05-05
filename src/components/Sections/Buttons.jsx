import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import RefreshIcon from "@mui/icons-material/Refresh";
import TextField from "@mui/material/TextField";
import AddPopUp from "../PopUps/PopupAdd";
import DeletePopup from "../PopUps/PopupDelete";
import EditPopup from "../PopUps/PopupEdit";
import AdvSearchPopup from "../PopUps/PopupAdvSearch";
import AnalyViewPopup from "../PopUps/PopupAnalyView";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import InsightsIcon from "@mui/icons-material/Insights";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import axios from "axios";

function Buttons(props) {
  //-------------------------------------------------------------------------STATES----------------------------------------------------------------

  const [addButtonPopup, setAdd] = useState(false);
  const [delteButtonPopup, setDelete] = useState(false);
  const [editButtonPopup, setEdit] = useState(false);
  const [advSearchButtonPopup, setAdvSearch] = useState(false);
  const [analyView, setAnalyView] = useState(false);
  const [edit, setDisableEdit] = useState(true);
  const [disableDelete, setDisableDelete] = useState(true);
  const [search, setSearch] = useState("");

  function Predict() {}

  //Refresh
  function handleRefresh() {
    setSearch("");

    props.refresh();
  }

  function handleChange(e) { // search customer numbers
    const { value } = e.target;
    setSearch(value);
    props.search(search);
  }

  //Send advance search parameters to Grid
  function HandleAdvanceSearch(param) {
    props.advanceSearch(param);
  }

  //Disables Enables edit and delete button
  useEffect(() => {
    props.edit.length == 1 ? setDisableEdit(false) : setDisableEdit(true);
    props.edit.length == 1 ? setDisableDelete(false) : setDisableDelete(true);
    console.log(props.edit[0]);
  }, [props.edit]);

  const buttons1 = [
    //----------------------------------------------Predict------------------------------------------------------------------
    <Button
      sx={{ color: "white" }}
      key="one"
      variant="contained"
      color="primary"
      onClick={Predict}
    >
      Predict{" "}
      <OnlinePredictionIcon
        size="small"
        sx={{ marginLeft: 0.5, fontSize: 17 }}
      />
    </Button>,

    //----------------------------------------------Analytics View------------------------------------------------------------------
    <Button
      onClick={() => setAnalyView(true)}
      sx={{ color: "white" }}
      key="two"
    >
      Analytics View{" "}
      <InsightsIcon size="small" sx={{ marginLeft: 0.5, fontSize: 17 }} />
    </Button>,
    //-----------------------------------------------Advanced Search------------------------------------------------------------------
    <Button
      onClick={() => setAdvSearch(true)}
      sx={{ color: "white" }}
      key="three"
    >
      Advanced Search{"    "}
      <SavedSearchIcon size="small" sx={{ marginLeft: 0.5, fontSize: 17 }} />
    </Button>,
  ];

  const buttons2 = [
    //-------------------------------------------------------ADD BUTTON------------------------------------------------------------------
    <Button
      id="addbutton"
      onClick={() => setAdd(true)}
      sx={{ color: "white" }}
      key="one"
    >
      Add{" "}
      <AddCircleOutlineIcon
        size="small"
        sx={{ marginLeft: 0.5, fontSize: 17 }}
      />
    </Button>,
    //-------------------------------------------------------EDIT BUTTON------------------------------------------------------------------

    <Button
      onClick={() => setEdit(true)}
      sx={{ color: "white" }}
      key="two"
      disabled={edit}
    >
      Edit <EditIcon size="small" sx={{ marginLeft: 0.5, fontSize: 17 }} />
    </Button>,
    //-------------------------------------------------------DELETE BUTTON------------------------------------------------------------------

    <Button
      onClick={() => setDelete(true)}
      sx={{ color: "white" }}
      key="three"
      disabled={disableDelete}
    >
      Delete <DeleteIcon size="small" sx={{ marginLeft: 0.5, fontSize: 17 }} />
    </Button>,
  ];

  //-------------------------------------------------------LAYOUT------------------------------------------------------------------

  return (
    <div className="button-layout">
      {/*-------------------------------------------------------PopUps------------------------------------------------------------------  */}

      <AddPopUp trigger={addButtonPopup} setTrigger={setAdd} />
      <DeletePopup
        refreshh={handleRefresh}
        data={props.edit}
        trigger={delteButtonPopup}
        setTrigger={setDelete}
      />
      <EditPopup
        refreshh={() => props.refresh()}
        Slno={props.edit[0]}
        trigger={editButtonPopup}
        setTrigger={setEdit}
      />
      <AdvSearchPopup
        search={HandleAdvanceSearch}
        trigger={advSearchButtonPopup}
        setTrigger={setAdvSearch}
      />
      <AnalyViewPopup trigger = {analyView} setTrigger={setAnalyView}/>

      {/*-------------------------------------------------------Button Group-1------------------------------------------------------------------  */}
      <ButtonGroup
        sx={{ marginRight: "20px" }}
        size="medium"
        aria-label="large button group"
      >
        {buttons1}
      </ButtonGroup>

      {/*-------------------------------------------------------Refresh and Search------------------------------------------------------------------  */}

      <Button
        size="medium"
        onClick={handleRefresh}
        sx={{ marginRight: "20px" }}
        variant="outlined"
      >
        <RefreshIcon />
      </Button>

      <TextField
        style={{ width: "15%" }}
        onChange={handleChange}
        sx={{ backgroundColor: "white" }}
        className="inputRounded"
        size="small"
        id="filled-search"
        label="Enter Customer Number"
        type="number"
        variant="filled"
        value={search}
        name="cust_number"
        autoComplete="off"
      />
      {/*-------------------------------------------------------Button Group-2------------------------------------------------------------------  */}

      <ButtonGroup
        sx={{ marginLeft: "20px" }}
        size="medium"
        aria-label="large button group"
      >
        {buttons2}
      </ButtonGroup>
      
    </div>
  );
}

export default Buttons;
