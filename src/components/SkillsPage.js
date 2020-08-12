import React from "react";
// Components
import Skill from "./Skill";
// Material UI
import { Box } from "@material-ui/core";
// Helpers
import { SKILL_LIST } from "../utils/skill_list";

function SkillsPage() {
  return (
    <Box
      style={{
        padding: "2rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      {SKILL_LIST.map((skill) => (
        <Skill skill={skill} />
      ))}
    </Box>
  );
}

export default SkillsPage;
