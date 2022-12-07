import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import {Button} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


/* This is the fridge page. It should display the contents of the fridge, and allow the user to add new feeds to the fridge.
   Note: Still missing -> The ability to remove feed, and the ability to edit existing feeds.
*/
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
        { field: "id", headerName: "ID", width: 70, hide: true}, //This allows the us to save the ID of the feed, but not display it.
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
        <Button 
            onClick={()=>{
                console.log("This should open a modal for adding a new feed.");
            }}
            variant="contained"
            size="large"
            color="secondary"
            endIcon={<AddCircleOutlineIcon/>}
            

        >Add feed</Button>
        <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
      >
        <DataGrid checkboxSelection rows={fridgeContents} columns={columns} />
        </Box>
        
    </Box>
    )

}
export default Fridge;