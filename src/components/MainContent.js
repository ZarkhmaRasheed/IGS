import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button  // Add this import
} from '@mui/material';
import { 
  Code as CodeIcon,
  Storage as StorageIcon,
  Analytics as AnalyticsIcon,
  Security as SecurityIcon
} from '@mui/icons-material';

const services = [
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: 'Custom Development',
    description: 'Tailored software solutions designed for your specific business needs.'
  },
  {
    icon: <StorageIcon fontSize="large" color="primary" />,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your business.'
  },
  {
    icon: <AnalyticsIcon fontSize="large" color="primary" />,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with our advanced analytics.'
  },
  {
    icon: <SecurityIcon fontSize="large" color="primary" />,
    title: 'Cyber Security',
    description: 'Protect your business with our comprehensive security solutions.'
  }
];

const MainContent = () => {
  // Removed unused isMobile variable
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
          Our Services
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            With years of experience and a team of dedicated professionals, we deliver exceptional results that drive business growth and innovation.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Contact Us Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MainContent;