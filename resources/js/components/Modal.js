export default function Modal(props) {
    return (
        <div
            class="modal fade  w-100"
            id={`${props.id}`}
            tabindex="-1"
            aria-labelledby="exampleModalScrollableTitle"
            aria-modal="true"
            role="dialog"
            style={{
                width: "600px",
                margin: " 0 auto",
            }}
        >
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
                <div class="modal-content  movie-modal-about ">
                    <div
                        class="modal-header row m-0 p-0 border-0 "
                        style={{
                            height: "250px",
                            backgroundImage: `url("/assets/img/movies/bg/${props.item.background}")`,
                            backgroundAttachment: "scroll",
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="col-md-8 bg-transparent-black h-100 p-2 d-flex ">
                            {" "}
                            <h1
                                class="modal-title fs-1 my-auto mx-auto d-flex flex-column"
                                id="exampleModalScrollableTitle"
                            >
                                {props.title}
                                {"  "}
                                <div className="rating">
                                    <span class="fas fa-star checked"></span>
                                    <span class="fas fa-star checked"></span>
                                    <span class="fas fa-star checked"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                </div>
                                {/* <span
                                    className=""
                                    style={{
                                        fontSize: "14px",
                                    }}
                                >
                                    <i className="fas fa-star text-warning "></i>{" "}
                                    8.5
                                </span> */}
                            </h1>
                        </div>
                        <div className="col-md-4 text-center bg-transparent-black h-100 d-none d-md-flex p-2">
                            {" "}
                            <img
                                className=" img-fluid my-auto"
                                style={{ height: "200px" }}
                                src={`/assets/img/movies/poster/${props.item.poster}`}
                            />
                        </div>
                    </div>
                    <div class="modal-body shadow-lg  ">
                        {/* for mobile */}
                        <div class="embed-responsive embed-responsive-4by3 m-1 p-1 d-md-none">
                            <h5 className="fw-bold">Trailer </h5>

                            <iframe
                                class="d-flex embed-responsive-item p-2 w-100 mx-auto "
                                height={"300px"}
                                src={props.item.trailer}
                            ></iframe>
                        </div>
                        {/* end for mobile */}

                        <div className="d-flex ">
                            <div className="col-md-6">
                                <div className="m-1 p-1">
                                    <h5 className="fw-bold">Description </h5>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            letterSpacing: "1px",
                                        }}
                                    >
                                        This is some placeholder content to show
                                        the scrolling behavior for modals. We
                                        use repeated line breaks to demonstrate
                                        how content can exceed minimum inner
                                        height
                                    </p>
                                </div>
                                <div className="m-1 mt-2 p-1">
                                    {/* <h5 className="fw-bold">More informations </h5> */}
                                    <div className="d-flex flex-column justify-content-evenly ">
                                        <div className="col-md-4 ">
                                            <span className="fw-bold">
                                                Gender :
                                            </span>{" "}
                                            Horror
                                        </div>
                                        <div className="col-md-4">
                                            <span className="fw-bold">
                                                Time :
                                            </span>{" "}
                                            1h 66min
                                        </div>
                                        <div className="col-md-4">
                                            <span className="fw-bold">
                                                Year :
                                            </span>
                                            2016
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <div class="embed-responsive embed-responsive-4by3 m-1 p-1 ">
                                    <h5 className="fw-bold">Trailer </h5>

                                    <iframe
                                        class="d-flex embed-responsive-item p-2 w-100 mx-auto "
                                        height={"250px"}
                                        src={props.item.trailer}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-secondary mt-2 shadow-sm">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
