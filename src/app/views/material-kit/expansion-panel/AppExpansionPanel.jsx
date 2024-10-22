import { Box, Stack, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ControlledExpansionPanels from "./ControlledAccordion";
import CustomizedExpansionPanels from "./CustomizedExpansionPanel";
import DetailedExpansionPanel from "./DetailedExpansionPanel";
import SimpleExpansionPanel from "./SimpleExpansionPanel";
import Typography from '@mui/material/Typography';

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppExpansionPanel = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Case Studies and research"}]}
        />
      </Box>

      <Stack spacing={3}>

      <Typography variant="h3" align="center" gutterBottom>
       Case Studies
      </Typography>

        <SimpleCard>
        <p>Hearts and Minds has been used by hundreds of organisations in a large range of industries, including energy, chemical, aviation, rail, marine, pharmaceutical, health care, defence and security, and manufacturing.</p>
        <p>Click the links below for case studies on how Hearts and Minds has been used in a selection of organisations.</p>
          <SimpleExpansionPanel />
        </SimpleCard>

        <Typography variant="h3" align="center" gutterBottom>
         Research and development
        </Typography>

        <SimpleCard>
        <p>Hearts and Minds is based off of academic theory and research and the profits generated by the sale of the Hearts and Minds toolkit are used to update and extend it by funding research and development, aimed at helping companies improve their HSE performance.</p>
        <p>Bibliography: Click for a list of papers and doctoral theses. These document the theory behind Hearts and Minds, or have been produced as a result of Hearts and Minds funding.</p>
          <ControlledExpansionPanels />
        </SimpleCard>

        <SimpleCard title="Outputs">
          <CustomizedExpansionPanels />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppExpansionPanel;