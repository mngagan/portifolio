import { Stack } from "@mui/material";
import ContainerStyled from "./styled/containerStyled";
import Text from "./styled/text";
import { constants } from "../utils/constants";

const LetsTalk = () => {
  return (
    <ContainerStyled>
      <Stack spacing={4}>
        <Stack spacing={4}>
          <Stack>
            <Stack direction="row" spacing={1}>
              <Text variant="title" bold>
                Let's
              </Text>
              <Text variant="title" outline bold>
                Talk
              </Text>
              <Text variant="title" bold>
                for
              </Text>
            </Stack>
            <Text variant="title" bold>
              Something special
            </Text>
          </Stack>
          <Stack>
            <Text fs16 color={(theme) => theme.palette.text.secondary}>
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Text
            semibold
            fontSize={24}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href = "mailto:mngagan@gmail.com";
            }}
          >
            {constants.email}
          </Text>
          <Text
            semibold
            fontSize={24}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href = "tel:+918499862254";
            }}
          >
            {constants.phoneNo}
          </Text>
        </Stack>
      </Stack>
    </ContainerStyled>
  );
};

export default LetsTalk;
