import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Buttons from "./Buttons";

const columns = [
  { field: "sl_no", headerName: "Sl_No", width: 60 },
  { field: "business_code", headerName: "Business Code", width: 120 },
  { field: "cust_number", headerName: "Customer Number", width: 132 },
  { field: "clear_date", headerName: "Clear Date", width: 120 },
  { field: "buisness_year", headerName: "Buisness Year", width: 110 },
  { field: "doc_id", headerName: "Doc Id", width: 120 },
  { field: "posting_date", headerName: "Posting Date", width: 120 },
  {
    field: "document_create_date",
    headerName: "Document Create Date",
    width: 140,
  },
  { field: "due_in_date", headerName: "Due in Date", width: 100 },
  { field: "invoice_currency", headerName: "Invoice Currency", width: 120 },
  { field: "document_type", headerName: "Document Type", width: 120 },
  { field: "posting_id", headerName: "Posting Id", width: 100 },
  { field: "total_open_amount", headerName: "Total Open Amount", width: 140 },
  {
    field: "baseline_create_date",
    headerName: "Baseline Create Date",
    width: 140,
  },
  {
    field: "cust_payment_terms",
    headerName: "Customer Payment Terms",
    width: 150,
  },
  { field: "invoice_id", headerName: "Invoice Id", width: 100 },
  
];

export default function Grid() {
  
  const url = "http://localhost:8080/HRC_Project/LoadData";
  const [dataTable, setDataTable] = useState([]);
  const [checkboxSelect, setCheckboxSelect] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => { //Load Data
    async function fetchData() {
      const request = await axios.get(url);
      setDataTable(request.data);
      console.log(request.data);
      return request;
    }

    fetchData();
  }, [url]);

//-------------------------------------------------------------------Refresh----------------------------------------------------------------------
  async function HandleRefresh() {

      console.log(1);
      const request = await axios.get(url);
      console.log(request.data);
      setDataTable(request.data);

    
  }

  
// -------------------------------------------------------------------Customer Number Search------------------------------------------------------
  async function  HandleSearch(param) {

    const url = "http://localhost:8080/HRC_Project/CustSearch?";
    let str = `cust_number=${param}`;

    
        const request = await axios.get(url+str);
        setDataTable(request.data);
        console.log(request.data);
    

  }

// -------------------------------------------------------------------Advance Search---------------------------------------------------------------


  async function HandleAdvanceSearch(param){

    console.log(param);

    const url = "http://localhost:8080/HRC_Project/AdvanceSearch?";
    let str = `customer_number=${param.cust_number}&buisness_year=${param.buisness_year}&doc_id=${param.doc_id}&invoice_id=${param.invoice_id}`;
    
    const request = await axios.get(url+str);
      setDataTable(request.data);
      console.log(request.data);

  }


  return (
    <div>
     <Buttons edit = {checkboxSelect} search ={HandleSearch} advanceSearch = {HandleAdvanceSearch} refresh = {HandleRefresh}/>
      <div
        className="grid"
        style={{ display: "flex", height: 540, width: "100%" }}
      >
        <div style={{ flexGrow: 1, margin: "0 1%" }}>
          <DataGrid
            sx={{ color: "white" }}
            getRowId={(row) => row.sl_no}
            headerHeight={70}
            rowHeight={40}
            disableColumnMenu
            rows={dataTable}
            columns={columns}
            checkboxSelection
            onSelectionModelChange={(e) => setCheckboxSelect(e)}
            selectionModel={checkboxSelect}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20,50,100,1000]}
          />
        </div>
      </div>
    </div>
  );
}
