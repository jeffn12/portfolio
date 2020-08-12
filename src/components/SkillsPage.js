import React from "react";
// Components
import Skill from "./Skill";
// Material UI
import { Box } from "@material-ui/core";
// Helpers
import { skill_list } from "./skill_list";

function SkillsPage() {
  return (
    <Box
      style={{
        padding: "5rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      {skill_list.map((skill) => (
        <Skill skill={skill} />
      ))}
    </Box>
  );
}

export default SkillsPage;
