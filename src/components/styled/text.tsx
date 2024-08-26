import { css, styled, Typography, TypographyProps } from "@mui/material";

interface TextStyledProps extends TypographyProps {
  bold?: boolean;
  medium?: boolean;
  semibold?: boolean;
  fs48?: boolean;
  fs16?: boolean;
  outline?: boolean;
  secondaryTextColor?: boolean;
  clickable?: boolean;
}

const TextStyled = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "bold" &&
    prop !== "medium" &&
    prop !== "semibold" &&
    prop !== "fs48" &&
    prop !== "outline" &&
    prop !== "fs16" &&
    prop !== "secondaryTextColor" &&
    prop !== "clickable" &&
    prop !== "color",
})<TextStyledProps>`
  font-weight: ${({ bold, medium, semibold }) => {
    if (bold) return 700;
    if (semibold) return 600;
    if (medium) return 500;
    return "inherit";
  }};
  ${({ fs48 }) =>
    fs48 &&
    css`
      font-size: 48px;
    `}
  ${({ fs16 }) =>
    fs16 &&
    css`
      font-size: 16px;
    `}
  
  ${({ outline, theme, secondaryTextColor }) => {
    if (outline) {
      return css`
        color: ${secondaryTextColor
          ? theme.palette.primary.main
          : theme.palette.secondary.main};
        text-shadow: 0px 0px 20px
          ${secondaryTextColor
            ? theme.palette.secondary.main
            : theme.palette.primary.main};
      `;
    } else if (secondaryTextColor) {
      return {
        color: secondaryTextColor
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      };
    } else {
      return {
        color: theme.palette.primary.main,
      };
    }
  }}
  
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}
`;

interface TextProps extends TextStyledProps {
  children: React.ReactNode;
  secondaryTextColor?: boolean;
}

const Text = ({ children, ...props }: TextProps) => {
  return <TextStyled {...props}>{children}</TextStyled>;
};

export default Text;
