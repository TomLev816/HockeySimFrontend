import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { useNavigate } from "react-router-dom";
import {logout} from "../auth"

export default function Navigation(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate()
  
  function handleMenuClick(path) {
    setAnchorEl(null);
    navigate(path)
  }

  console.log(props)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hockey League Simulator
          </Typography>
          {!props.logged && (
              <Button color="inherit" onClick={() => handleMenuClick('/login')}>Login</Button>
          )}
          {props.logged && (
              <Button color="inherit" onClick={() => logout()}>Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}