import { useTheme } from "@mui/material";

const ThemeSvg = () => {
  const theme = useTheme();
  const strokeColor = theme.palette.primary.main;
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
                .c {
                  fill: none;
                  stroke: ${strokeColor};
                  stroke-linecap: round;
                  stroke-linejoin: round;
                }
              `}
        </style>
      </defs>
      <path
        className="c"
        d="m41.4002,26.829c1.0929-1.0929,1.3734-2.752.6987-4.1425-1.356-2.7944-3.5771-6.4401-6.936-9.8573-3.5628-3.6245-7.1565-5.7208-9.9318-7.004-1.3664-.6318-2.9803-.3211-4.0448.7434l-12.0146,12.0146c-1.4136,1.4136-1.4136,3.7055,0,5.1191l5.0474,5.0474-7.5446,7.5446c-1.3601,1.3601-1.5606,3.5977-.2733,5.027,1.3728,1.5242,3.7228,1.5701,5.1546.1383l7.6866-7.6866,5.0474,5.0474c1.4136,1.4136,3.7055,1.4136,5.1191,0l11.9914-11.9914Z"
      />
      <line className="c" x1="13.4895" y1="14.2652" x2="33.7268" y2="34.5025" />
    </svg>
  );
};

export default ThemeSvg;
