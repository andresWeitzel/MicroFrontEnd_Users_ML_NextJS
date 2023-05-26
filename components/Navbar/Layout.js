import { Box } from "./Box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      width: "100%",
      bottom: "10px",
      
    }}
  >
    {children}
  </Box>
);