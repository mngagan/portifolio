import { useTheme } from "@mui/material";

const HeroMobile = () => {
  const theme = useTheme();
  const COLORS = {
    white: theme.palette.secondary.main,
    black: theme.palette.primary.main,
    primaryBlack: theme.palette.primary.main,
    secondaryBlack: "#0E1729",
    strokeColor: "#027269",
    lineStrokeColor: "#241715",
  };
  return (
    <svg
      width="343"
      height="332"
      viewBox="0 0 343 332"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_374)">
        <path
          d="M70.7246 244.362C28.4096 268.19 52.2375 326.938 66.2055 329.403C76.9638 331.301 112.331 330.213 129.472 329.403L262.169 231.216L184.522 220.534C160.695 220.534 104.577 225.3 70.7246 244.362Z"
          fill={COLORS.white}
        />
        <path
          d="M129.472 329.403C128.86 329.433 130.136 329.371 129.472 329.403ZM129.472 329.403C112.331 330.213 76.9638 331.301 66.2055 329.403C52.2375 326.938 28.4096 268.19 70.7246 244.362C104.577 225.3 160.695 220.534 184.522 220.534L262.169 231.216L129.472 329.403Z"
          stroke={COLORS.black}
          strokeWidth="1.62158"
        />
        <path
          d="M82.2267 252.427C111.477 246.84 135.223 264.021 143.44 273.31C144.812 271.39 146.296 269.493 147.898 267.627C145.373 256.535 96.1947 244.621 82.2267 252.427Z"
          fill={COLORS.primaryBlack}
        />
        <path
          d="M126.507 330.619C127.545 330.573 128.536 330.528 129.472 330.484L237.855 250.288C233.08 248.673 220.774 243.705 209.747 236.75C134.939 245.615 123.083 303.023 126.507 330.619Z"
          fill={COLORS.secondaryBlack}
        />
        <path
          d="M250.254 330.483C304.071 313.229 262.168 235.172 262.168 232.296L242.037 229.527C139.495 235.857 124.267 299.469 129.471 330.483L146.776 473.039H191.37L195.203 330.483H250.254Z"
          fill={COLORS.white}
          stroke={COLORS.black}
          strokeWidth="1.62158"
        />
        <path
          d="M184.522 300.905C191.095 307.478 194.382 323.363 195.204 330.484H201.366C199.723 322.404 194.053 305.177 184.522 300.905Z"
          fill={COLORS.primaryBlack}
        />
        <rect y="330" width="351" height="2" fill={COLORS.black} />
        {/* Continue converting the remaining paths and elements */}
        {/* Include clip path definitions if any */}
        {/* Define all other paths similarly, converting `fill`, `stroke`, etc. */}
      </g>
      {/* Clip path definition */}
      <defs>
        <clipPath id="clip0_320_374">
          <rect width="343" height="332" fill={COLORS.white} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeroMobile;
