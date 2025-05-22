// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Button, 
//   IconButton, 
//   Menu, 
//   MenuItem, 
//   Box, 
//   Container,
//   useMediaQuery,
//   useTheme,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Collapse
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// const Navbar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openSubMenu, setOpenSubMenu] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleMenuOpen = (event, menu) => {
//     setAnchorEl(event.currentTarget);
//     setOpenSubMenu(menu);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setOpenSubMenu(null);
//   };

//   const handleSubMenuToggle = (menu) => {
//     setOpenSubMenu(openSubMenu === menu ? null : menu);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Services', subItems: ['Consulting', 'Technology', 'Experience'] },
//     { name: 'Industries', subItems: ['Financial', 'Healthcare', 'Retail'] },
//     { name: 'Cases', subItems: ['Case Studies', 'Success Stories'] },
//     { name: 'Insights', subItems: ['Blog', 'Reports'] },
//     { name: 'Abouts', subItems: ['Company', 'Team'] },
//   ];

//   const drawer = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <List>
//         {navItems.map((item) => (
//           <React.Fragment key={item.name}>
//             <ListItem button onClick={() => handleSubMenuToggle(item.name)}>
//               <ListItemText primary={item.name} />
//               {openSubMenu === item.name ? <ExpandLess /> : <ExpandMore />}
//             </ListItem>
//             <Collapse in={openSubMenu === item.name} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {item.subItems.map((subItem) => (
//                   <ListItem button key={subItem} sx={{ pl: 4 }}>
//                     <ListItemText primary={subItem} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Collapse>
//             <Divider />
//           </React.Fragment>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar 
//       position="fixed" 
//       sx={{ 
//         backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
//         transition: 'background-color 0.3s ease',
//         boxShadow: 'none',
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component={Link}
//             to="/"
//             sx={{
//               mr: 2,
//               display: 'flex',
//               fontWeight: 700,
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             IGS
//           </Typography>

//           {!isMobile ? (
//             <Box sx={{ flexGrow: 1, display: 'flex', ml: 3 }}>
//               {navItems.map((item) => (
//                 <Box key={item.name}>
//                   <Button
//                     color="inherit"
//                     endIcon={<ExpandMore />}
//                     onClick={(e) => handleMenuOpen(e, item.name)}
//                     sx={{ mx: 1 }}
//                   >
//                     {item.name}
//                   </Button>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={openSubMenu === item.name}
//                     onClose={handleMenuClose}
//                     MenuListProps={{ onMouseLeave: handleMenuClose }}
//                     sx={{ mt: 1 }}
//                   >
//                     {item.subItems.map((subItem) => (
//                       <MenuItem key={subItem} onClick={handleMenuClose}>
//                         {subItem}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Box>
//               ))}
//             </Box>
//           ) : (
//             <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 edge="start"
//                 onClick={handleDrawerToggle}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Box>
//           )}

//           <Box sx={{ display: 'flex', ml: 2 }}>
//             <Button color="inherit" variant="outlined" sx={{ mr: 1 }}>
//               Contact
//             </Button>
//           </Box>
//         </Toolbar>
//       </Container>

//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//       >
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Navbar;














import React, { useState } from 'react';
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
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const handleSubMenuToggle = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Navigation structure matching IBM's layout
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
    'Consulting',
    'Technology',
    'Design',
    'Operations',
    'Support'
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
          {topNavItems.map((item) => (
            <React.Fragment key={item.name}>
              <ListItem button onClick={() => handleSubMenuToggle(item.name)}>
                <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 'medium' }} />
                {openSubMenu === item.name ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openSubMenu === item.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                      <ListItem sx={{ pl: 4, pt: 2, pb: 0 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {section.title}
                        </Typography>
                      </ListItem>
                      {section.items.map((subItem, i) => (
                        <ListItem button key={i} sx={{ pl: 6, py: 1 }}>
                          <ListItemText primary={subItem} />
                        </ListItem>
                      ))}
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
                          key={item}
                          color="inherit"
                          component={Link}
                          to={`/${item.toLowerCase()}`}
                          sx={{ 
                            px: 2,
                            fontSize: '0.875rem',
                            textTransform: 'none',
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                          }}
                        >
                          {item}
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
                    placeholder="Search IDM Consulting"
                    inputProps={{ 'aria-label': 'search IDM consulting' }}
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
                      onMouseEnter={(e) => handleMenuOpen(e, item.name)}
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

      {/* Dropdown Menu */}
      {renderDropdownMenu()}

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