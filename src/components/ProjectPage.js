import React from "react";
// Components
import Project from "./Project";
// Material UI
import { Box } from "@material-ui/core";
// Helpers
import { PROJECT_LIST } from "../utils/project_list";

function ProjectPage() {
  return (
    <Box style={{ display: "flex", flexWrap: "wrap" }}>
      {PROJECT_LIST.map((project) => (
        <Project project={project} />
      ))}
    </Box>
  );
}

export default ProjectPage;
