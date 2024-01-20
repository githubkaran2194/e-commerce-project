import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Button,
  ButtonGroup,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { AccountCircle, Close, Logout, Menu, ShoppingCart } from '@mui/icons-material';

const Navbar = ({ cart, handleLogout, isLoggedIn, logoutAlert, setLogoutAlert, handleLogoutDialog }) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Container maxWidth='xs'>
        <AppBar
          elevation={0}
          className='navbar'
          sx={{
            backgroundColor: "#FBAB7E",
            backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2F2626', "&:hover": { color: '#FFD700' } }}>
                QuickShop
              </Typography>
            </Link>
            <ButtonGroup
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
              }}
            >
              <List
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  '& a': {
                    textDecoration: 'none',
                    color: '#2F2626',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: 'red',
                    },
                  },
                }}
              >
                <ListItem>
                  <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                  <Link to="/product">Products</Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact">Contact</Link>
                </ListItem>
              </List>
            </ButtonGroup>
            <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                <Badge badgeContent={cart.length} variant="standard" color='primary'>
                  <ShoppingCart sx={{ color: "white", "&:hover": { color: '#FFD700' } }} />
                </Badge>
              </Link>
              {isLoggedIn ? (
                <Tooltip title="Logout">
                  <IconButton
                    variant="text"
                    onClick={handleLogoutDialog}
                    sx={{ marginX: '10px', color: "white", "&:hover": { color: '#FFD700' } }}
                  >
                    <Logout />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Login">
                  <Link to='/login'>
                    <IconButton
                      color="#2F2626"
                      variant="text"
                      sx={{ marginX: '10px', color: 'white', "&:hover": { color: '#FFD700' } }}
                    >
                      <AccountCircle />
                    </IconButton>
                  </Link>
                </Tooltip>
              )}
              <IconButton
                onClick={() => setDrawer(true)}
                sx={{ display: { xs: 'block', md: 'none' }, marginX: '10px' }}
              >
                <Menu sx={{ color: '#2F2626' }} />
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
          '& .MuiDrawer-paper': { width: '100%', color: '#2F2626' },
        }}
      >
        <Close
          sx={{ color: 'white', position: 'absolute', top: '20px', left: '20px' }}
          onClick={() => setDrawer(false)}
        />
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', marginY: '30px', fontWeight: 'bold', color: '#FFD700' }}
        >
          QuickShop
        </Typography>
        <hr style={{ width: '100%', borderTop: '1px solid #707070' }} />
        <List
          sx={{
            marginX: 'auto',
            paddingX: '20px',
            gap: '1rem',
            '& a': {
              textDecoration: 'none',
              color: '#2F2626',
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
            <Link to="/product" onClick={() => setDrawer(false)}>
              Products
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/contact" onClick={() => setDrawer(false)}>
              Contact
            </Link>
          </ListItem>
        </List>
      </Drawer>

      <Dialog open={logoutAlert} onClose={() => setLogoutAlert(false)}>
        <DialogTitle>Are you sure ..?</DialogTitle>
        <DialogActions>
          <Button onClick={handleLogout}>Logout</Button>
          <Button onClick={() => setLogoutAlert(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
