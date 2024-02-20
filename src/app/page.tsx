import SearchHome from "@/components/SearchHome/page";
import { Box, Container, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      minHeight={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Box width={"50%"} margin={"auto"}>
          <Typography variant="h3">Navegador de filmes</Typography>
          <SearchHome />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
