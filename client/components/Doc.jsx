"use client";
import { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  Collapse,
  Typography,
  Box,
} from "@mui/material";
import SupportIcon from "@mui/icons-material/Support";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FeaturesIcon from "@mui/icons-material/ExpandLess";
import BookIcon from "@mui/icons-material/Book";
const Doc = () => {
  const [supportOpen, setSupportOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const toggleSupport = () => {
    setSupportOpen(!supportOpen);
    setInfoOpen(false);
    setHelpOpen(false);
  };

  const toggleInfo = () => {
    setInfoOpen(!infoOpen);
    setSupportOpen(false);
    setHelpOpen(false);
  };

  const toggleHelp = () => {
    setHelpOpen(!helpOpen);
    setSupportOpen(false);
    setInfoOpen(false);
  };

  return (
    <div
      id="section4"
      className="min-h-screen  pt-20 md:pt-2 w-screen text-white flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      <p className="mb-8 text-center max-w-2xl">
        Explore our comprehensive documentation to get the most out of Build
        Your Notes.
      </p>
      <div className="md:flex grid gap-8">
        <div>
          <Box className="bg-[#272727fb] p-6 rounded-lg shadow-lg mb-6">
            <Box className="flex items-center justify-center mb-4">
              <Box className="bg-gray-600 p-4 rounded-full">
                <SupportIcon style={{ fontSize: 40, color: "white" }} />
              </Box>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              className="text-2xl font-bold mb-2"
            >
              Support
            </Typography>
            <Typography className="mb-4">
              Get help and support for using Build Your Notes.
            </Typography>
            <IconButton
              onClick={toggleSupport}
              className="text-blue-400 hover:text-blue-600"
            >
              {supportOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse
            className="bg-[#272727fb] rounded-md"
            in={supportOpen}
            timeout="auto"
            unmountOnExit
          >
            <List className="mt-4 list-disc list-inside">
              <ListItem>Step 1: Go to the help section</ListItem>
              <ListItem>Step 2: Browse the FAQs</ListItem>
              <ListItem>Step 3: Contact support</ListItem>
              <ListItem>Step 4: Submit a ticket</ListItem>
            </List>
          </Collapse>
        </div>
        <div>
          <Box className="bg-[#272727fb] p-6 rounded-lg shadow-lg mb-6">
            <Box className="flex items-center justify-center mb-4">
              <Box className="bg-gray-600 p-4 rounded-full">
                <FeaturesIcon style={{ fontSize: 40, color: "white" }} />
              </Box>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              className="text-2xl font-bold mb-2"
            >
              Features
            </Typography>
            <Typography className="mb-4">
              Important information about Build Your Notes.
            </Typography>
            <IconButton
              onClick={toggleInfo}
              className="text-blue-400 hover:text-blue-600"
            >
              {infoOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse
            className="bg-[#272727fb] rounded-md"
            in={infoOpen}
            timeout="auto"
            unmountOnExit
          >
            <List className="mt-4 list-disc list-inside">
              <ListItem>Info 1: Details about usage</ListItem>
              <ListItem>Info 2: Features overview</ListItem>
              <ListItem>Info 3: Updates</ListItem>
              <ListItem>Info 4: Tips and tricks</ListItem>
            </List>
          </Collapse>
        </div>
        <div>
          <Box className="bg-[#272727fb] p-6 rounded-lg shadow-lg mb-6">
            <Box className="flex items-center justify-center mb-4">
              <Box className="bg-gray-600 p-4 rounded-full">
                <BookIcon style={{ fontSize: 40, color: "white" }} />
              </Box>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              className="text-2xl font-bold mb-2"
            >
              Getting Started
            </Typography>
            <Typography className="mb-4">
              Find help and tutorials for using Build Your Notes.
            </Typography>
            <IconButton
              onClick={toggleHelp}
              className="text-blue-400 hover:text-blue-600"
            >
              {helpOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse
            className="bg-[#272727fb] rounded-md"
            in={helpOpen}
            timeout="auto"
            unmountOnExit
          >
            <List className="mt-4 list-disc list-inside">
              <ListItem>Help 1: Getting started</ListItem>
              <ListItem>Help 2: Advanced features</ListItem>
              <ListItem>Help 3: Troubleshooting</ListItem>
              <ListItem>Help 4: Support channels</ListItem>
            </List>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
export default Doc;
