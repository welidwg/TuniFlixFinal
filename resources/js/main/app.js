import { React } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Container from "../layouts/Container";
import Home from "./pages/Home";
// import ReactDOM from "react-dom";
const root = ReactDOM.createRoot(document.getElementById("body"));

root.render(
    <>
        <Container>
            {/* <Navbar /> */}
            {/* <SideBar /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </Container>
    </>
);
