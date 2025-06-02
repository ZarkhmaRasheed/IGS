
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  MenuItem,
  Menu,  
  Box, 
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Grid,
  Paper,
  InputBase
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [secondaryAnchorEl, setSecondaryAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [currentSecondaryMenu, setCurrentSecondaryMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, menu) => {
    // Close if clicking the same menu that's already open
    if (currentMenu === menu) {
      handleMenuClose();
      return;
    }
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const handleSecondaryMenuOpen = (event, menu) => {
    // Close if clicking the same menu that's already open
    if (currentSecondaryMenu === menu) {
      handleSecondaryMenuClose();
      return;
    }
    setSecondaryAnchorEl(event.currentTarget);
    setCurrentSecondaryMenu(menu);
  };

  const handleSecondaryMenuClose = () => {
    setSecondaryAnchorEl(null);
    setCurrentSecondaryMenu(null);
  };

  const handleSubMenuToggle = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Navigation structure
  const topNavItems = [
    { 
      name: 'Products', 
      subItems: [
        { 
          title: 'Featured', 
          items: [
            'AI & machine learning',
            'Analytics',
            'Business automation',
            'Databases',
            'IT automation',
            'Middleware'
          ]
        },
        { 
          title: 'Featured solutions', 
          items: [
            'Concert: Application management software',
            'Environmental Intelligence SaaS',
            'Envizi ESG data platform',
            'FlashSystem storage'
          ]
        }
      ]
    },
    { 
      name: 'Solutions', 
      subItems: [
        { 
          title: 'By industry', 
          items: [
            'Banking',
            'Healthcare',
            'Retail',
            'Telecommunications',
            'Government'
          ]
        },
        { 
          title: 'By need', 
          items: [
            'Digital transformation',
            'Sustainability',
            'Workforce transformation',
            'Security modernization'
          ]
        }
      ]
    },
    { 
      name: 'Services', 
      subItems: [
        { 
          title: 'Consulting', 
          items: [
            'Strategy consulting',
            'Technology consulting',
            'Experience consulting',
            'Operations consulting'
          ]
        },
        { 
          title: 'Managed services', 
          items: [
            'Cloud managed services',
            'Security services',
            'Network services',
            'Application services'
          ]
        }
      ]
    },
    { 
      name: 'Industries', 
      subItems: [
        { 
          title: 'Key industries', 
          items: [
            'Financial services',
            'Healthcare & life sciences',
            'Retail & consumer goods',
            'Energy & utilities'
          ]
        },
        { 
          title: 'All industries', 
          items: [
            'View all industries',
            'Industry insights',
            'Case studies'
          ]
        }
      ]
    },
    { 
      name: 'Resources', 
      subItems: [
        { 
          title: 'Learn', 
          items: [
            'Blogs & articles',
            'Webinars & events',
            'Training & certifications'
          ]
        },
        { 
          title: 'Connect', 
          items: [
            'Developer community',
            'Partner ecosystem',
            'IBM Research'
          ]
        }
      ]
    }
  ];

  const secondaryNavItems = [
    { 
      name: 'Consulting', 
      subItems: [
        'Strategy Consulting',
        'Digital Transformation',
        'Business Consulting',
        'IT Consulting'
      ]
    },
    { 
      name: 'Technology', 
      subItems: [
        'Cloud Services',
        'AI & Machine Learning',
        'Data Analytics',
        'Cybersecurity'
      ]
    },
    { 
      name: 'Design', 
      subItems: [
        'UX/UI Design',
        'Product Design',
        'Service Design',
        'Design Thinking'
      ]
    },
    { 
      name: 'Operations', 
      subItems: [
        'Business Process Optimization',
        'Supply Chain Management',
        'IT Operations',
        'Quality Assurance'
      ]
    },
    { 
      name: 'Support', 
      subItems: [
        'Technical Support',
        'Customer Success',
        'Managed Services',
        'Training'
      ]
    }
  ];

  const renderDropdownMenu = () => {
    const currentItem = topNavItems.find(item => item.name === currentMenu);
    if (!currentItem) return null;

    return (
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{ 
          onMouseLeave: handleMenuClose,
          sx: { 
            p: 0,
            width: '100vw',
            maxWidth: '100%',
            left: 0,
            right: 0,
            transform: 'none !important',
            top: '64px !important'
          }
        }}
        PaperProps={{
          sx: {
            width: '100vw',
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 64px)',
            borderRadius: 0,
            boxShadow: theme.shadows[8],
            p: 4,
            backgroundColor: '#f4f4f4'
          }
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {currentItem.subItems.map((section, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Typography variant="h6" sx={{ 
                  mb: 2,
                  color: theme.palette.primary.main,
                  fontWeight: 600
                }}>
                  {section.title}
                </Typography>
                <List dense disablePadding>
                  {section.items.map((item, i) => (
                    <ListItem 
                      key={i} 
                      disableGutters
                      sx={{
                        py: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.05)'
                        }
                      }}
                    >
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          sx: {
                            fontWeight: 400,
                            fontSize: '0.875rem'
                          }
                        }}
                      />
                      <ArrowForwardIcon fontSize="small" sx={{ ml: 1, opacity: 0.6 }} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark
                  }
                }}
              >
                Explore all {currentMenu}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Menu>
    );
  };

  const renderSecondaryDropdownMenu = () => {
    const currentItem = secondaryNavItems.find(item => item.name === currentSecondaryMenu);
    if (!currentItem) return null;

    return (
      <Menu
        anchorEl={secondaryAnchorEl}
        open={Boolean(secondaryAnchorEl)}
        onClose={handleSecondaryMenuClose}
        MenuListProps={{ 
          onMouseLeave: handleSecondaryMenuClose,
          sx: { 
            p: 1,
            minWidth: 200
          }
        }}
        PaperProps={{
          sx: {
            boxShadow: theme.shadows[4],
            mt: 1
          }
        }}
      >
        {currentItem.subItems.map((item, index) => (
          <MenuItem 
            key={index} 
            component={Link} 
            to={`/${currentSecondaryMenu.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={handleSecondaryMenuClose}
            sx={{
              py: 1,
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.05)'
              }
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    );
  };

  const drawer = (
    <Box sx={{ width: 320, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <List>
          {[...secondaryNavItems, ...topNavItems].map((item) => (
            <React.Fragment key={item.name}>
              <ListItem button onClick={() => handleSubMenuToggle(item.name)}>
                <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 'medium' }} />
                {openSubMenu === item.name ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openSubMenu === item.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                      {section.title && (
                        <ListItem sx={{ pl: 4, pt: 2, pb: 0 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {section.title}
                          </Typography>
                        </ListItem>
                      )}
                      {section.items ? (
                        section.items.map((subItem, i) => (
                          <ListItem button key={i} sx={{ pl: section.title ? 6 : 4, py: 1 }}>
                            <ListItemText primary={subItem} />
                          </ListItem>
                        ))
                      ) : (
                        <ListItem button sx={{ pl: 4, py: 1 }}>
                          <ListItemText primary={section} />
                        </ListItem>
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </Collapse>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" fullWidth sx={{ mb: 2 }}>
          Contact us
        </Button>
        <Button variant="outlined" fullWidth>
          Sign in
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top Bar (IBM-like) */}
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: '#000',
          color: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: '48px !important', justifyContent: 'space-between' }}>
            {!searchOpen ? (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant="h6"
                    noWrap
                    component={Link}
                    to="/"
                    sx={{
                      mr: 4,
                      display: 'flex',
                      fontWeight: 700,
                      color: 'inherit',
                      textDecoration: 'none',
                      fontSize: '1.25rem'
                    }}
                  >
                    IGS Consulting
                  </Typography>
                  
                  {!isMobile && (
                    <Box sx={{ display: 'flex' }}>
                      {secondaryNavItems.map((item) => (
                        <Button
                          key={item.name}
                          color="inherit"
                          onClick={(e) => handleSecondaryMenuOpen(e, item.name)}
                          sx={{ 
                            px: 2,
                            fontSize: '0.875rem',
                            textTransform: 'none',
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                          }}
                        >
                          {item.name}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>

                {!isMobile && (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton 
                      color="inherit" 
                      sx={{ mr: 1 }}
                      onClick={toggleSearch}
                    >
                      <SearchIcon />
                    </IconButton>
                    <Button 
                      color="inherit" 
                      sx={{ 
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                    >
                      Sign in
                    </Button>
                  </Box>
                )}

                {isMobile && (
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </>
            ) : (
              <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <Paper
                  component="form"
                  sx={{ 
                    p: '2px 4px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    width: '100%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    boxShadow: 'none'
                  }}
                >
                  <IconButton sx={{ p: '10px', color: '#fff' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1, color: '#fff' }}
                    placeholder="Search IGS Consulting"
                    inputProps={{ 'aria-label': 'search IGS consulting' }}
                  />
                  <IconButton 
                    sx={{ p: '10px', color: '#fff' }} 
                    onClick={toggleSearch}
                  >
                    <CloseIcon />
                  </IconButton>
                </Paper>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Navigation Bar */}
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: '64px !important' }}>
            {!isMobile && (
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                {topNavItems.map((item) => (
                  <Box key={item.name}>
                    <Button
                      color="inherit"
                      endIcon={<ExpandMore />}
                      onClick={(e) => handleMenuOpen(e, item.name)}
                      sx={{ 
                        mx: 1,
                        textTransform: 'none',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: '#000',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.05)'
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </Box>
                ))}
              </Box>
            )}
 
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ 
                ml: 2,
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: '#0f62fe',
                '&:hover': {
                  backgroundColor: '#0353e9'
                }
              }}
            >
              Contact us
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Dropdown Menus */}
      {renderDropdownMenu()}
      {renderSecondaryDropdownMenu()}

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: '#f4f4f4'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;