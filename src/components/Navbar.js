import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Badge,
  ButtonGroup,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Close, Logout, Menu, ShoppingCart } from '@mui/icons-material';

const Navbar = ({ cart, handleLogout }) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Container>
        <AppBar color="primary" elevation={0}>
          <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
           <Link to={'/'} style={{textDecoration:"none"}}> <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFD700', position:"relative", left:"10px" }}>
           SHOPPER
         </Typography></Link>
            <List
              sx={{
                display: 'flex',
                gap: '1rem',
                '& a': {
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  display: {
                    xs: 'none',
                    sm: 'block',
                    md: 'block',
                  },
                },
              }}
            >
              <ListItem>
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="/product">Products</Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">Contact</Link>
              </ListItem>
            </List>
            <ButtonGroup sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <IconButton
                color="inherit"
                variant="text"
                onClick={handleLogout}
                sx={{ m: '0 10px'}}
              >
                <Logout />
              </IconButton>
              <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
              <Badge badgeContent={cart.length} variant="standard" color="error">
                <ShoppingCart/>
              </Badge>
            </Link>
            <IconButton onClick={() => setDrawer(true)} sx={{ display: { sm: 'none' }, m:"0px 6px" }}>
            <Menu sx={{color:"white"}}/>
          </IconButton>
            </ButtonGroup>
           
          </Toolbar>
        </AppBar>
      </Container>

      <Drawer
      open={drawer}
      onClose={() => setDrawer(false)}
      anchor="right"
      sx={{
        '& .MuiDrawer-paper': { width: '100%', background: '#303030', color: 'white' },
      }}
    >
    <Close sx={{color:"white",position:"absolute",top:"20px",left:"20px", display: { sm: 'none' }}}  onClick={() => setDrawer(false)}/>
      <Typography variant="h4" sx={{ textAlign: 'center', marginY: '30px', fontWeight: 'bold', color: '#FFD700' }}>
        SHOPPER
      </Typography>
      <hr style={{ width: '100%', borderTop: '1px solid #707070' }} />
      <List
        sx={{
          marginX: 'auto',
          paddingX: '20px',
          gap: '1rem',
          '& a': {
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            display: 'block',
            paddingY: '10px', 
            transition: 'color 0.3s',
            '&:hover': {
              color: '#FFD700', 
            },
          },
        }}
      >
        <ListItem>
          <Link to="/" onClick={() => setDrawer(false)}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about" onClick={() => setDrawer(false)}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/product" onClick={() => setDrawer(false)}>
            Products
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact" onClick={() => setDrawer(false)}>
            Contact
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }} onClick={()=>setDrawer(false)}>
            <Badge badgeContent={cart.length} variant="standard" color="error">
            <ShoppingCart sx={{ '&.MuiSvgIcon-root': { fontSize: "60px" } }} />
            </Badge>
          </Link>
        </ListItem>
      </List>
    </Drawer>
    
    </>
  );
};

export default Navbar;
