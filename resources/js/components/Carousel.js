import React, { useState, useRef } from "react";
import Modal from "./Modal";

export default function Carousel(props) {
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
    return (
        <>
            <div
                id="carouselExampleCaptions"
                className="carousel slide custom_carousel mx-4 "
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                <div class="carousel-indicators">
                    {/*  */}
                    {Movies.map((item, index) => {
                        return (
                            <>
                                <button
                                    key={item.id}
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to={index}
                                    class={`custom_indicator ${
                                        item.id == 1 && "active"
                                    }`}
                                    aria-label="Slide 1"
                                    style={{
                                        backgroundImage: `url("/assets/img/movies/poster/${item.poster}")`,
                                    }}
                                ></button>
                            </>
                        );
                    })}
                </div>
                <div class="carousel-inner">
                    <button
                        className="btn btn-gamer-3 w-auto  fw-bold "
                        style={{
                            position: "absolute",
                            top: "10px",
                            left: "20px",
                            zIndex: 20,
                            fontSize: "2vh",
                        }}
                    >
                        Hot &nbsp;
                        <i class="fas fa-fire"></i>
                    </button>
                    {Movies.map((item, index) => {
                        return (
                            <div
                                class={`carousel-item ${
                                    item.id == 1 && "active"
                                }`}
                                key={item.id}
                                style={{
                                    backgroundImage: `url("/assets/img/movies/bg/${item.background}")`,
                                    backgroundAttachment: "scroll",
                                    backgroundSize: "cover",
                                    backgroundPosition: "bottom",

                                    backgroundRepeat: "no-repeat",
                                    zIndex: 0,
                                }}
                            >
                                <div
                                    class="row carousel-content  d-flex justify-content-between h-100  "
                                    style={{}}
                                >
                                    <div className="col-md-5 d-none d-md-flex justify-content-center  h-100 ">
                                        {" "}
                                        <img
                                            class=" img-fluid rounded shadow-lg  center my-auto "
                                            style={{ height: "300px" }}
                                            src={`/assets/img/movies/poster/${item.poster}`}
                                        />
                                    </div>
                                    <div className="col-md-7   first-div">
                                        <div className="title-container d-flex flex-column align-self-center justify-content-evenly h-100">
                                            <div className="col-md-6  d-md-none text-center">
                                                {" "}
                                                <img
                                                    class=" img-fluid   center mx-auto poster-mobile"
                                                    src={`/assets/img/movies/poster/${item.poster}`}
                                                />
                                            </div>
                                            <div className="d-flex flex-column mx-4 ">
                                                <h5 className="  mb-2 mt-2 d-none d-md-block  text-white display-4 fw-bold text-white">
                                                    {item.title} <br />
                                                </h5>
                                                <h5 className="  mb-2 d-md-none  text-white display-5 fw-bold text-center">
                                                    {item.title} <br />
                                                </h5>

                                                <span className="text-white  mt-2   d-flex flex-row align-items-center justify-content-evenly  w-50 rounded-pill p-1 text-center">
                                                    <span className="">
                                                        <i class="fas fa-camera-movie"></i>{" "}
                                                        &nbsp;Horror
                                                    </span>
                                                    <i
                                                        class="fas fa-dot-circle"
                                                        style={{
                                                            fontSize: "5px",
                                                        }}
                                                    ></i>
                                                    <span className="">
                                                        <i class="fas fa-globe"></i>{" "}
                                                        &nbsp; English
                                                    </span>
                                                    <i
                                                        class="fas fa-dot-circle"
                                                        style={{
                                                            fontSize: "5px",
                                                        }}
                                                    ></i>
                                                    <span className="">
                                                        <i
                                                            class="fas fa-star"
                                                            style={{
                                                                color: "yellow",
                                                            }}
                                                        ></i>{" "}
                                                        &nbsp; 8.5
                                                    </span>
                                                </span>
                                                <div className="d-flex  align-self-end justify-content-evenly  w-25 ">
                                                    <button
                                                        className="btn btn-gamer-1 rounded   w-25"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        data-bs-html="true"
                                                        title="<div class=''>Watch now</div>"
                                                    >
                                                        {" "}
                                                        <i class="far fa-play"></i>
                                                    </button>

                                                    <button
                                                        className="btn btn-gamer-1 rounded w-25  "
                                                        data-bs-toggle="modal"
                                                        data-bs-target={`#About${item.id}`}
                                                    >
                                                        {" "}
                                                        <i class="far fa-question"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {Movies.map((item, index) => {
                return (
                    <Modal
                        id={`About${item.id}`}
                        title={item.title}
                        item={item}
                    />
                );
            })}
        </>
    );
}
