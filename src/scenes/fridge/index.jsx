import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import {Button} from "@mui/material";

const Fridge = () =>{
    const [fridgeContents, setFridgeContents] = useState([]);

    const getFridgeContents = () =>{
        axios.get("http://localhost:3001/get-all-feed")
        .then(function(res){
            console.log(res.data);
            const fridgedata = res.data;
            setFridgeContents(fridgedata);
        })
    }

    //This ensures that the data is loaded before the page is rendered, and the data is requested only once
    useEffect(()=>{
        getFridgeContents();
    }, [])

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { 
            field: "feedName",
            headerName: "Feed",
            flex: 1
        },
        {
            field: "size",
            headerName: "Size in grams",
            flex: 1,
        },
        {
            field: "quantity",
            headerName: "Portions left",
            flex: 1,
        }
    ]


    return (
    <Box m="20px">
        <Header title="FRIDGE" subtitle="Fridge Interactive Page."/>
        <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <DataGrid checkboxSelection rows={fridgeContents} columns={columns} />
        </Box>
        
    </Box>
    )

}
export default Fridge;