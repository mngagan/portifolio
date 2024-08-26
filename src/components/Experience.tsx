import { alpha, Box, Stack, styled, Typography } from "@mui/material";
import ContainerStyled from "./styled/containerStyled";
import Text from "./styled/text";

type Experience = {
  title: string;
  description: string;
  date: string;
};

const ExperienceStack = styled(Stack)(({ theme }) => ({
  borderRadius: "10px",
  paddingInline: "24px",
  paddingBlock: "30px",
  border: `1px solid ${theme.palette.secondary.main}`,
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
  },
}));

const ExperienceBlock = (experience: Experience) => {
  return (
    <ExperienceStack gap={"30px"}>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        gap={2}
        justifyContent="space-between"
      >
        <Text secondaryTextColor semibold fontSize={24}>
          {experience.title}
        </Text>
        <Text secondaryTextColor fs16 semibold>
          {experience.date}
        </Text>
      </Stack>
      {/* <Text
        fs16
        secondaryTextColor
        color={(theme) => alpha(theme.palette.secondary.main, 0.5)}
      >
        {experience.description}
      </Text> */}
      <Typography
        fontSize={16}
        sx={(theme) => ({
          color: alpha(theme.palette.secondary.main, 0.5),
        })}
      >
        {experience.description}
      </Typography>
    </ExperienceStack>
  );
};

const experienceSet: Experience[] = [
  {
    title: "Frontend Developer at CAW Studios",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jan 2023 - present",
  },
  {
    title: "Frontend Developer at Helical IT Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "June 2018- Jan 2023",
  },
];

const Experience = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
      })}
    >
      <ContainerStyled sx={{ paddingBlock: "60px" }}>
        <Stack gap={4}>
          <Stack direction="row" gap={1} justifyContent="center">
            <Text variant="title" secondaryTextColor>
              My
            </Text>
            <Text variant="title" bold secondaryTextColor>
              Experience
            </Text>
          </Stack>
          <Stack gap={2}>
            {experienceSet.map((experience) => (
              <ExperienceBlock key={experience.title} {...experience} />
            ))}
          </Stack>
        </Stack>
      </ContainerStyled>
    </Box>
  );
};

export default Experience;
