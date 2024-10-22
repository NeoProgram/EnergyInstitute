import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import FormDialog from "./FormDialog";
import AlertDialog from "./SimpleAlerts";
import SimpleDialogDemo from "./SimpleDialog";
import MaxWidthDialog from "./OptimalSizeDialog";
import FullScreenDialog from "./FullScreenDialog";
import AlertDialogSlide from "./DialogTransition";
import ResponsiveDialog from "./ResponsiveDialog";
import CustomizedDialogs from "./CustomizedDialog";
import ConfirmationDialog from "./ConfirmationDialog";
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';





const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppDialog() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Training and consultancy" }]} />
      </Box>

      <Stack spacing={3}>
      <SimpleCard>

      <Typography variant="h2" align="center" gutterBottom>
       Training and consultancy
      </Typography>

      <Typography variant="h4" gutterBottom>
       EI Hearts and Minds and culture change training
      </Typography>

      <p>This 3-day interactive training course and certificate will teach delegates the fundamentals of improving safety culture using the award-winning Hearts and Minds toolkit.  It will teach the fundamentals of safety culture change, focusing on the various stages of a culture change programme, from design to implementation and review.</p>

      <Typography variant="h6" gutterBottom>
       Facilitated by two of the original developers of the Hearts and Minds toolkit, the course will:
      </Typography>

       <p>

Teach the fundamentals of safety culture change, focusing on the various stages of a culture change programme, from design to implementation and review.
Provide an overview of the Hearts and Minds toolkit and enable delegates to understand how to make the best use of the tools available.
Enable delegates to learn from some of the leading experts on safety culture change.
Provide delegates with a Certificate in Delivering Safety Culture Change from the Energy Institute, following completion of an exam.
Illustrated with case studies and examples from the course facilitators’ own experiences, delegates will also have the opportunity to design a bespoke culture change plan, either hypothetical or for implementation in their own organisations.</p>


      <p>Illustrated with case studies and examples from the course facilitators’ own experiences, delegates will also have the opportunity to design a bespoke culture change plan, either hypothetical or for implementation in their own organisations.</p>

      <Typography variant="h6" gutterBottom>
       Upcoming courses
      </Typography>


      <p>23rd - 25th April 2024 - F2F - London</p>

       <p>8th - 10th October 2024 - F2F - London</p>

<p>To see our full portfolio of risk management training courses, <Link to="/" color="primary">click here.</Link></p>

      </SimpleCard>

      </Stack>
    </Container>
  );
}
