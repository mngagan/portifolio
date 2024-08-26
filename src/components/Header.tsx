import { Box, Button, Container, Stack, styled } from "@mui/material";
import DownloadSvg from "../icons/download";
import Text from "./styled/text";
import useCustomTheme from "../hooks/useTheme";
import ThemeSvg from "../icons/theme";

const BoxStyled = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  paddingBlock: "1.5rem",
  backdropFilter: "blur(30px)",
  backgroundColor: `${theme.palette.secondary.main}70`,
  zIndex: 1,
}));

const Header = () => {
  const { toggleTheme } = useCustomTheme();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Neel_Gagan_8499862254.pdf";
    link.download = "Neel_Gagan_8499862254.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChangeTheme = () => {
    // console.log("change theme");
    toggleTheme();
  };

  return (
    <BoxStyled>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text bold fontSize="20px">
            Neel Gagan
          </Text>
          <Stack
            gap={2}
            direction="row"
            // sx={{ display: { xs: "none", md: "flex" } }}
            display={{ xs: "none" }}
          >
            <Button>
              <Text fs16 semibold>
                About Me
              </Text>
            </Button>
            <Button>
              <Text fs16 semibold>
                {/* Skills */}
                Experience
              </Text>
            </Button>
            <Button>
              <Text fs16 semibold>
                Projects
              </Text>
            </Button>
            <Button>
              <Text fs16 semibold>
                Contact Me
              </Text>
            </Button>
          </Stack>
          <Stack direction="row" gap={2}>
            {/* <Button onClick={handleChangeTheme}>change theme</Button> */}
            <Button onClick={handleChangeTheme}>
              {/* <FormatPaintIcon /> */}
              <ThemeSvg />
            </Button>
            <Button
              endIcon={<DownloadSvg />}
              variant="contained"
              color="primary"
              onClick={handleDownload}
            >
              Resume
            </Button>
          </Stack>
        </Stack>
      </Container>
    </BoxStyled>
  );
};

export default Header;
