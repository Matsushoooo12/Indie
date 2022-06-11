import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";
import Page404 from "./components/pages/Page404";
import Top from "./components/pages/Top";
import { auth } from "./firebase/config";

const App: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner />
        </Center>
      </ChakraProvider>
    );
  }
  return (
    <HashRouter>
      <Routes>
        {user ? (
          <>
            <Route index element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </>
        ) : (
          <>
            <Route index element={<Top />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </>
        )}
      </Routes>
    </HashRouter>
  );
};

export default App;
