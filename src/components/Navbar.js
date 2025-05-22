import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem, 
  Box, 
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setOpenSubMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenSubMenu(null);
  };

  const handleSubMenuToggle = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', subItems: ['Consulting', 'Technology', 'Experience'] },
    { name: 'Industries', subItems: ['Financial', 'Healthcare', 'Retail'] },
    { name: 'Cases', subItems: ['Case Studies', 'Success Stories'] },
    { name: 'Insights', subItems: ['Blog', 'Reports'] },
    { name: 'Abouts', subItems: ['Company', 'Team'] },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem button onClick={() => handleSubMenuToggle(item.name)}>
              <ListItemText primary={item.name} />
              {openSubMenu === item.name ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSubMenu === item.name} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItem button key={subItem} sx={{ pl: 4 }}>
                    <ListItemText primary={subItem} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
        transition: 'background-color 0.3s ease',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            IGS
          </Typography>

          {!isMobile ? (
            <Box sx={{ flexGrow: 1, display: 'flex', ml: 3 }}>
              {navItems.map((item) => (
                <Box key={item.name}>
                  <Button
                    color="inherit"
                    endIcon={<ExpandMore />}
                    onClick={(e) => handleMenuOpen(e, item.name)}
                    sx={{ mx: 1 }}
                  >
                    {item.name}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={openSubMenu === item.name}
                    onClose={handleMenuClose}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                    sx={{ mt: 1 }}
                  >
                    {item.subItems.map((subItem) => (
                      <MenuItem key={subItem} onClick={handleMenuClose}>
                        {subItem}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          <Box sx={{ display: 'flex', ml: 2 }}>
            <Button color="inherit" variant="outlined" sx={{ mr: 1 }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;