import * as React from 'react';
import { Box, Button, Fab, Icon, IconButton, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import Typography from '@mui/material/Typography';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

import { Card, Grid, useTheme } from "@mui/material";




// STYLED COMPONENTS
const AppButtonRoot = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  },
  "& .button": { margin: theme.spacing(1) },
  "& .input": { display: "none" }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1)
}));

export default function AppButton() {
  return (
    <AppButtonRoot>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "The toolkit" }]}
        />
      </Box>

      <Typography variant="h3" align="center" gutterBottom>
       The toolkit
      </Typography>

      <p>The Hearts and Minds toolkit can help you implement proactive interventions to develop a strong safety culture.  Each tool generally focuses on a single issue (see the roadmap for more information).</p>
      <p>Click on each tool to find out more about how it is used.</p>

      <SimpleCard title="Understand your culture and prepare people for change">


      <Grid container justifyContent="space-between" alignItems="center" marginTop={2} spacing={2} >

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/learnmore.png"
           title="Learn more"
           style={{ width: '150px', height: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Understanding your HSE culture
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/toolkit.png"
           title="Hearts and Minds Toolkit"
           style={{ height: '150px', width: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Understanding Your Culture online
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/training.png"
           title="Training and Consultancy"
           style={{ height: '150px', width: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Understanding your energy culture
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/casestudies.png"
           title="Case studies and research"
           style={{ height: '150px', width: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Making Change Last
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>
      </Grid>
      </SimpleCard>

      <Typography gutterBottom variant="h5" component="div" align="center">
        ______________________________________________________________
      </Typography>


      <SimpleCard title="Learn from incidents">

      <Grid container justifyContent="space-between" alignItems="center" marginTop={2} spacing={2} >

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/learnmore.png"
           title="Learn more"
           style={{ width: '150px', height: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Learning Incidents
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/toolkit.png"
           title="Hearts and Minds Toolkit"
           style={{ height: '150px', width: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Measuring learning
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/training.png"
           title="Training and Consultancy"
           style={{ height: '150px', width: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Reflective learning
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

      </Grid>
      </SimpleCard>


      <Typography gutterBottom variant="h5" component="div" align="center">
        ______________________________________________________________
      </Typography>


      <SimpleCard title="Learn from incidents">

      <Grid container justifyContent="space-between" alignItems="center" marginTop={2} spacing={2} >

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/learnmore.png"
           title="Learn more"
           style={{ width: '150px', height: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Learning Incidents
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/toolkit.png"
           title="Hearts and Minds Toolkit"
           style={{ height: '150px', width: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Measuring learning
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/training.png"
           title="Training and Consultancy"
           style={{ height: '150px', width: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Reflective learning
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

        <Grid size={3}>
        <Card sx={{ maxWidth: 250 }} style={{ marginTop: '20px' }} >
        <CardActionArea>
         <CardMedia
           sx={{ height: 140 }}
           image="/assets/images/casestudies.png"
           title="Case studies and research"
           style={{ height: '150px', width: '150px', marginLeft: '50px' }}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Making Change
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         </CardActionArea>
       </Card>
        </Grid>

      </Grid>
      </SimpleCard>



    </AppButtonRoot>
  );
}
