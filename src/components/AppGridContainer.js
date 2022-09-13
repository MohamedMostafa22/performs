import { Grid, useMediaQuery } from "@mui/material";

export default function AppGridContainer({ children, ...others }) {
  const isMDDown = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Grid container spacing={isMDDown ? 5 : 8} {...others}>
      {children}
    </Grid>
  );
}
