import * as React from "react";
import { styled, StyledEngineProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../components/SideBar/Sidebar";
import AppBarTop from "./AppBar/AppBarTop";
import BackToTop from "./Content/ScrollTop/ScrollTop";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarTop open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <StyledEngineProvider injectFirst>
          <BackToTop />
        </StyledEngineProvider>
      </Box>
    </Box>
  );
}
