import React from "react";
// Components
import Skill from "./Skill";
import SectionHeader from "./SectionHeader";
// Material UI
import { Box } from "@material-ui/core";
// Helpers
import { SKILL_LIST } from "../utils/skill_list";

function SkillsPage() {
  return (
    <>
      <SectionHeader title="My Skills" />
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginBottom: "10rem"
        }}
      >
        {SKILL_LIST.map((skill) => (
          <Skill skill={skill} />
        ))}
      </Box>
    </>
  );
}

export default SkillsPage;
