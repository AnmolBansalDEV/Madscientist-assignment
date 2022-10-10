import React from 'react'
import { IconButton } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'


export default function SideNav() {
    let [value, setValue] = React.useState(0)
    function handleClick(){
        
    }
    
  return (
   <BottomNavigation value={value} sx={{'& .Mui-selected': 
   {color: "#000",
   borderLeft: "0.2rem solid",
   borderLeftColor: "#03998c"}
}} onChange={(event, newValue) => {
    setValue(newValue);}} 
    style={{ width: "4.2rem",
    height: "20rem",
    backgroundColor: "#ffff",
       padding: "5px",
         borderRadius: "5px",
         margin:"5px",
         boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
         position: "fixed",
         zIndex: "3",
         left: "1rem",
         top: "5rem",
         display: "flex",
         flexDirection:"column"}}>
     <BottomNavigationAction selected style={{alignSelf: "center"}} onClick={handleClick} icon={<EmojiEventsOutlinedIcon />} />
     <BottomNavigationAction style={{alignSelf: "center"}} onClick={handleClick} icon={<CallEndOutlinedIcon />} />
     <BottomNavigationAction style={{alignSelf: "center"}} onClick={handleClick} icon={<ArticleOutlinedIcon />} />
     <BottomNavigationAction style={{alignSelf: "center"}} onClick={handleClick} icon={<NotificationsNoneOutlinedIcon />} />
   </BottomNavigation>
 
  )
  
}
