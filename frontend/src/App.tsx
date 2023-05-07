import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import AppToolBar from "./containers/AppToolbar/AppToolbar";
import Posts from "./containers/Posts/Posts";

const App = () => (
  <>
    <CssBaseline />
    <header>
      <AppToolBar />
    </header>
    <main>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </Container>
    </main>
  </>
);

export default App;
