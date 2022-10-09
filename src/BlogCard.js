import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import Img from './assets/profile.jpg'
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function BlogCard() {
  const [like, setLike] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleClose(e) {
    if(e.target.id === "save"){
      alert("post saved!")
    }
    else if(e.target.id === "follow"){
      alert("user followed!")
    }
    else if(e.target.id === "block"){
      alert("user blocked!")
    }
    else if(e.target.id === "report"){
      alert("user reported!")
    }
      setAnchorEl(null);    
  };

  return (
    <div>
        <Card sx={{maxWidth: 330, marginTop: "40px"}}>
            <CardHeader
            avatar={
                <Avatar style={{borderRadius: "5px"}} variant="square" alt='Profile Picture' src={Img} />
            }
            
            action={
              <div>
              <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <MoreHorizIcon  />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
           <MenuItem id='save' onClick={handleClose}><SystemUpdateAltIcon style={{marginRight: "10px"}} />Save</MenuItem>
         <MenuItem id='follow' onClick={handleClose}><SwapHorizIcon style={{marginRight: "10px"}} />Follow</MenuItem>
         <MenuItem id='block' onClick={handleClose}><CancelOutlinedIcon style={{marginRight: "10px", color:'red'}} />Block</MenuItem>
         <MenuItem id='report' onClick={handleClose}><PersonOffOutlinedIcon style={{marginRight: "10px", color:'red'}} />Report</MenuItem>
          </Menu>
            </div>
            }
            title=
            {<div style={{display: "flex"}}>
               <span style={{marginRight: "30px"}}>Emily Swift</span>  
                <VerifiedOutlinedIcon style={
                  {color: "#03998c",
                   width: "8%",
                   position: "relative",
                   bottom: "2.3px"}
                   } />
            </div> }
            subheader="Machine Learning Engineer"
            titleTypographyProps={{fontWeight: "550"}}
            />
            <CardContent>
            <Typography variant="body2" color="text" style={{backgroundColor: "#ececec",
             borderRadius: "2px",
             padding: " 4px",
             height: "4rem"}}>
          Why do energy levels converge to a continuum and what is a continuum?
        </Typography>
        <Typography variant="body2" color="text" style={{marginTop: "10px"}} >
          The continuum is simply a group of energy levels whose energy gaps are negligibly small, and
          it is reached when the kinetic energy of the electron(s) exceed the potential energy that would
          trap them.
        </Typography>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "space-between"}}>
              <ButtonGroup>

            <Button variant="outlined" startIcon={like && <FavoriteIcon />} size='small' onClick={()=> setLike(prev=> !prev)} style={{
              color: like ? "#fff" : "#000",
              borderColor:"black",
              backgroundColor: like ? "red" : "#fff",
              marginRight: "10px"
            }}><span style={{marginRight: "10px"}}>Like{like && "d!"}</span> {like ? 202 : 201}</Button>

            <Button variant="outlined" size='small' style={{
              color: "black",
              borderColor:"black"
            }}><span style={{marginRight: "10px"}}>Views</span> 12K</Button>
              </ButtonGroup>
            <IconButton >
              <SendToMobileIcon />
            </IconButton>
            </CardActions>
        </Card>
    </div>
  )
}
