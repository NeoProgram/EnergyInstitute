import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

const AccordionRoot = styled("div")(({ theme }) => ({
  width: "100%",
  "& .heading": {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  return (
    <AccordionRoot>
      <Accordion>
        <AccordionSummary
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="heading">Case Studies</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </AccordionRoot>
  );
}
