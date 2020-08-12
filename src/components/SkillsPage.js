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
        maxWidth: "45rem",
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {skill_list.map((skill) => (
        <Skill skill={skill.skill} icon={skill.icon} />
      ))}
    </Box>
  );
}

export default SkillsPage;
