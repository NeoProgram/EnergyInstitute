import * as React from 'react';
import { Fragment } from "react";
import useAuth from "app/hooks/useAuth";
import { Card, Grid, styled, useTheme } from "@mui/material";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import Campaigns from "./shared/Campaigns";
import StatCards2 from "./shared/StatCards2";
import DoughnutChart from "./shared/Doughnut";
import UpgradeCard from "./shared/UpgradeCard";
import TopSellingTable from "./shared/TopSellingTable";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';

import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Fade from '@mui/material/Fade';

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

export default function Analytics() {
  const { palette } = useTheme();
  const { isAuthenticated } = useAuth();

  const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };

// if(!isAuthenticated){
//   return <p> Please login to see the content </p>
// }
// else
  return (
    <Fragment>
      <ContentBox className="analytics">

      <Box textAlign="center" sx={{ width: '100%'}}>
        <Typography variant="h2" gutterBottom>
     Hearts and Minds safety culture toolkit
   </Typography>
   <Typography align="center" variant="p" gutterBottom>
     Designed to facilitate cultural change within organisations.  Leverage your workforce to improve safety and operational performance, and reach the top of the ‘culture ladder’.
   </Typography>
<div>
<img src="/assets/images/image-test.jpg" style={{maxWidth: "50%", marginTop:"30px"}} />
</div>

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
       Learn more
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
       Hearts and Minds
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
       Training
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
       Case studies
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


<Grid container justifyContent="center" alignItems="center" marginTop={2} spacing={2}>
<Grid size={6}>
<div style={{marginTop:"30px"}}>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        //slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                '& .MuiAccordion-region': {
                  height: 'auto',
                },
                '& .MuiAccordionDetails-root': {
                  display: 'block',
                },
              }
            : {
                '& .MuiAccordion-region': {
                  height: 0,
                },
                '& .MuiAccordionDetails-root': {
                  display: 'none',
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography>Hearts and Minds now available digitally</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header">

          <Typography>New Hearts and Minds videos available on our YouTube channel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header">

          <Typography>Making compliance easier (formerly Managing rule breaking) - New Hearts and Minds Tool now available for purchase!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header">

          <Typography>Understanding your HSE and energy culture</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header">

          <Typography>Measuring learning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header">

          <Typography>Reflective learning videos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
</Grid>
  </Grid>



      </Box>

      </ContentBox>
    </Fragment>
  );
}
