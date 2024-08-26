import { alpha, Box, Grid, Stack, styled } from "@mui/material";
import ContainerStyled from "./styled/containerStyled";
import Text from "./styled/text";

const BoxStyledImage = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    // height: "100%",
    objectFit: "cover",
    backgroundImage: `url('/images/about-me.png')`,
    backgroundSize: "contain",
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "center top",
      height: "400px",
    },
  };
});

const About = () => {
  return (
    <ContainerStyled>
      <Grid item xs={12}>
        <Grid container height={"100%"} spacing={2}>
          <Grid item xs={12} md={5} height={"100%"}>
            <BoxStyledImage />
          </Grid>
          <Grid item xs={12} md={7} spacing={3}>
            <Stack gap={2}>
              <Stack
                direction="row"
                gap={1}
                justifyContent="center"
                alignItems="center"
              >
                <Text variant="title">About</Text>
                <Text variant="title" bold>
                  Me
                </Text>
              </Stack>
              <Stack gap={"20px"}>
                <Text
                  fs16
                  color={(theme) => alpha(theme.palette.primary.main, 0.6)}
                  lineHeight={"24px"}
                >
                  I'm a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </Text>
                <Text
                  fs16
                  color={(theme) => alpha(theme.palette.primary.main, 0.6)}
                  lineHeight={"24px"}
                >
                  I began my journey as a web developer in 2015, and since then,
                  I've continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I'm building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </Text>
                <Text
                  fs16
                  color={(theme) => alpha(theme.palette.primary.main, 0.6)}
                  lineHeight={"24px"}
                >
                  When I'm not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </Text>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </ContainerStyled>
  );
};

export default About;
