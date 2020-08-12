import React from "react";
// Components
import Project from "./Project";
// Material UI
import { Box } from "@material-ui/core";
// Helpers
import { PROJECT_LIST } from "../utils/project_list";

function ProjectPage() {
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {PROJECT_LIST.map((project) => (
        <>
          <Box
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              position: "relative",
              top: 0,
              left: 0,
              width: "20rem",
              height: "15rem"
            }}
          >
            <img
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: `url(${project.icon})`,
                backgroundSize: "cover",
                opacity: 0.1,
                zIndex: -1,
                borderRadius: "10px"
              }}
            />
            <Project style={{ zIndex: 0 }} project={project} />
          </Box>
        </>
      ))}
    </Box>
  );
}

export default ProjectPage;
