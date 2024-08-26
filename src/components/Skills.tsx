import { alpha, Box, Grid, Stack, styled } from "@mui/material";
import ContainerStyled from "./styled/containerStyled";
import Text from "./styled/text";
import TypescriptSvg from "../icons/typescript";
import JavascriptSvg from "../icons/javascript";
import NextJsSvg from "../icons/nextjs";
import ScssSvg from "../icons/scss";
import ReactSvg from "../icons/react";
import NodeSvg from "../icons/node";

const Skill = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: "1rem",
  width: "146px",
  aspectRatio: "1/1",
  [theme.breakpoints.up("md")]: {
    width: "186px",
  },
  border: `2px solid ${theme.palette.primary.main}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  ".icon": {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ".label": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBlockEnd: "5px",
    color: theme.palette.primary.main,
  },
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
  },
}));

const skillset = [
  {
    icon: <JavascriptSvg />,
    label: "Javascript",
  },
  {
    icon: <TypescriptSvg />,
    label: "Typescript",
  },
  {
    icon: <NextJsSvg width="70%" height="100%" />,
    label: "Next Js",
  },
  {
    icon: <ReactSvg />,
    label: "React",
  },
  {
    icon: <NodeSvg />,
    label: "Node Js",
  },
  {
    icon: <ScssSvg />,
    label: "Scss",
  },
];

const Skills = () => {
  return (
    <ContainerStyled>
      <Stack gap="60px">
        <Stack direction="row" gap={1} justifyContent="center">
          <Text variant="title">My</Text>
          <Text variant="title" bold>
            Skills
          </Text>
        </Stack>
        <Grid container gap={1} justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={3}>
              {skillset.map((skill) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={3}
                  lg={3}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Skill>
                    <Box className="icon">{skill.icon}</Box>
                    <Box className="label">{skill.label}</Box>
                  </Skill>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </ContainerStyled>
  );
};

export default Skills;
