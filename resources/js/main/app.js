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
const Movies = [
    {
        id: 1,
        title: " The Conjuring",
        background: "bg_conjuring.jpg",
        poster: "poster_conjuring.jpg",
    },
    {
        id: 2,
        title: "Interstellar",
        background: "bg_interstellar.jpg",
        poster: "poster_interstellar.jpg",
    },
    {
        id: 3,
        title: "Fight Club",
        background: "bg_fightclub.jpg",
        poster: "poster_fightclub.jpg",
    },
];
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
