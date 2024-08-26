import { Container, ContainerProps, styled } from "@mui/material";

interface ContainerStyledProps extends ContainerProps {
  //   backgroundColor?: string;
  //   bgPrimary?: boolean;
  //   bgPrimary?: boolean;
}

const ContainerStyled = styled(Container, {
  shouldForwardProp: (prop) => prop !== "bgSecondary",
})<ContainerStyledProps>(({ theme }) => ({
  paddingBlock: "60px",
  [theme.breakpoints.down("md")]: {
    // paddingBlock: 0,
  },
}));

export default ContainerStyled;
