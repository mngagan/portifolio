import { Box, Stack } from "@mui/material";
import ContainerStyled from "./styled/containerStyled";
import Text from "./styled/text";
import { constants } from "../utils/constants";

const Footer = () => {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}>
      <ContainerStyled sx={{ paddingBlock: "20px" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          gap={2}
        >
          <Stack>
            <Text secondaryTextColor fontSize={20} bold>
              Yeah, I’m the one who developed this
            </Text>
          </Stack>
          <Stack gap={0.5}>
            <Text
              secondaryTextColor
              textAlign={{ xs: "start", md: "end" }}
              fs16
              semibold
              clickable
              onClick={() => {
                window.open(constants.githubUrl, "_blank");
              }}
            >
              Codebase
            </Text>
            <Text
              secondaryTextColor
              fs16
              semibold
              clickable
              textAlign={{ xs: "start", md: "end" }}
              onClick={() => {
                window.open(constants.figmaUrl, "_blank");
              }}
            >
              Figma design
            </Text>
            <Text
              secondaryTextColor
              fs16
              textAlign={{ xs: "start", md: "end" }}
              semibold
            >
              Made with React
            </Text>
          </Stack>
        </Stack>
      </ContainerStyled>
    </Box>
  );
};

export default Footer;
