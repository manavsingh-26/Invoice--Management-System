import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function MyInput(props) {

    return (
        <TextField
            style={{minWidth : '100%'}}
            sx={{ backgroundColor: "white" }}
            size='small'
            name = {props.name}
            value = {props.value}
            onChange={(event) => props.onChange(event)}
            id={props.id}
            label={props.label}
            type={props.type}
            required = {props.req}
            variant="filled"
            autoComplete= "off"
        />


    );

};

