import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleCheckbox from "./SimpleCheckbox";
import LabelledCheckbox from "./LabelledCheckbox";
import FormGroupCheckbox from "./FormGroupCheckbox";
import PlacingCheckboxLabel from "./PlacingCheckboxLabel";
import Typography from '@mui/material/Typography';

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppCheckbox() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Prices and company license"}]}
        />
      </Box>




      <Box py="12px" />

      <SimpleCard>

      <Typography variant="h2" align="center" gutterBottom>
       Prices and company license
      </Typography>

      <Typography variant="h4" gutterBottom>
       Digital versions
      </Typography>

      <p>The Hearts and Minds tools are now available for purchase as digital copies.  It is now easier, and more cost effective, than ever before for organisations to implement a culture change programme.

      Each tool is available for purchase using our online shop.

      The price per tool ranges from £50 - £200 - which grants a limited license to that tool, enabling a single copy to be used by a facilitator with multiple groups of people. (See the online shop page  for full terms and conditions).</p>


      <Typography variant="h4" gutterBottom>
       Hard copies
      </Typography>

       <p>Hard copies are temporarily unavailable for purchase.</p>

      <Typography variant="h4" gutterBottom>
       Company license
      </Typography>

      <p>EI Technical Partner Company members are already granted a company license and can freely use the Hearts and Minds materials.  Log in and visit our online shop to get free access.

      For non-EI Technical Partners, full company licenses are also available granting access to the entire toolkit, in all language versions, for the entire company.  Company licenses range from £5,000 - £15,000 per year.</p>

      </SimpleCard>

      <Box py="12px" />


    </Container>
  );
}
