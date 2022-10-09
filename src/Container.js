import React from "react";
import Card from "./BlogCard"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export default function Container(){
    let [components, setComponents] = React.useState([])
    function renderBlogs(){
        setComponents(prev => ([...prev, 1]))
    }
    return(
        <div className="container">
            <ButtonGroup >
            <Button variant="contained"
                style={{
                    fontSize: "10px",
                    padding: "8px 12px",
                    backgroundColor: '#03998c'
                }}>Write-ups</Button>
            <Button
            style={{
                fontSize: "10px",
                padding: "8px 12px",
                backgroundColor: "rgb(231, 228, 228)",
                color: "#000",
                fontWeight: "600",
                marginRight: "20px"
            }}
              variant="contained">Forums</Button>
              </ButtonGroup>
            <Button
            style={{
                fontSize: "10px",
                padding: "8px 12px",
                backgroundColor: "rgb(231, 228, 228)",
                color: "#000",
                fontWeight: "600"
            }}
            onClick={renderBlogs}
              variant="contained"
              endIcon={<PlaylistAddIcon />}>New</Button>
              <div className="cards-renders">
            <Card />
            {components.map(x => <Card />)}
              </div>
        </div>
    )
}