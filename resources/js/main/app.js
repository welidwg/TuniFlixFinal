import { React } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

import Container from "../layouts/Container";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import ReactDOM from "react-dom";
const root = ReactDOM.createRoot(document.getElementById("body"));

root.render(
    <>
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>

                <Footer />
            </Container>
        </BrowserRouter>
    </>
);
