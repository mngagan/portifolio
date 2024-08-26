import { alpha, Box, Stack, styled } from "@mui/material";
import ContainerStyled from "./styled/containerStyled";
import Text from "./styled/text";
const BoxStyledWrapper = styled(Box)(() => ({
  height: "100vh",
}));

const BoxStyledHero = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  ":after": {
    content: '""',
    backgroundImage: 'url("images/hero-bg.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    position: "absolute",
    top: "160px",
    left: 0,
    right: 0,
    bottom: "100px",
    zIndex: -1,
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const BoxStyledHeroContent = styled(Box)(({ theme }) => ({
  gap: "3rem",
  flexDirection: "column",
  display: "flex",
  paddingBlockStart: "10rem",
  [theme.breakpoints.down("md")]: {
    paddingBlockStart: "5rem",
  },
}));

const BoxStyledHeroTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BoxStyledHeroDescription = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BoxStyledMobileHero = styled(Box)(({ theme }) => ({
  display: "block",
  backgroundImage: 'url("images/hero-mobile-bg.png")',
  height: "400px",
  width: "100%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const Hero = () => {
  return (
    <BoxStyledWrapper>
      <ContainerStyled>
        <BoxStyledHero>
          <BoxStyledHeroContent>
            <BoxStyledMobileHero />
            <BoxStyledHeroTitle>
              <Stack direction="row" gap={2}>
                <Text variant="title">Hello I’m</Text>
                <Text bold variant="title">
                  Neel Gagan.
                </Text>
              </Stack>
              <Stack direction="row" gap={2}>
                <Text bold variant="title">
                  Frontend
                </Text>
                <Text bold outline variant="title">
                  Developer
                </Text>
              </Stack>
              <Stack direction="row" gap={2}>
                <Text variant="title">Based In</Text>
                <Text bold variant="title">
                  India.
                </Text>
              </Stack>
            </BoxStyledHeroTitle>
            <BoxStyledHeroDescription
              sx={{ maxWidth: { xs: "100%", md: "40%" } }}
            >
              <Text
                fs16
                color={(theme) => alpha(theme.palette.primary.main, 0.6)}
                lineHeight={"24px"}
              >
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </Text>
            </BoxStyledHeroDescription>
          </BoxStyledHeroContent>
        </BoxStyledHero>
      </ContainerStyled>
    </BoxStyledWrapper>
  );
};

export default Hero;
