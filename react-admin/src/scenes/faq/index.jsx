import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaltExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is this app used for?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This app was made to help you administer your company. 
            With his charts, you can understand better your company's situation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I put my company information in the app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can do this by creating a login for your company on our website. 
            Where you can put all company's information.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I create my user?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In the profile form menu, you put your first and last name, your email, 
          your contact number, and your two address. 
          You cannot create a user without putting in all this information.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I put filters in my team members' research?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          At the top of the team members' list, you can find a button with three points. 
          When you click there you will find an option named "filter".
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add an event to the calendar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You just have to select the day or days of the event. 
            Then will open a box to you put the event day.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
