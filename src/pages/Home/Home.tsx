import { Box } from "@mui/material";

function Home() {
  return (
    <Box sx={{ my: 2 }}>
      {[...new Array(10000)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join("\n")}
    </Box>
  );
}

export default Home;
