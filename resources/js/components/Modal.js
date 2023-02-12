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
                        class="modal-header row m-0 p-0 border-0 shadow"
                        style={{
                            height: "250px",
                            backgroundImage: `url("/assets/img/movies/bg/${props.item.background}")`,
                            backgroundAttachment: "scroll",
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="col-md-5 bg-transparent-black h-100 p-2 d-flex ">
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
                        <div className="col-md-7 text-center bg-transparent-black h-100 d-none d-md-flex p-2">
                            {" "}
                            <div class="embed-responsive rounded embed-responsive-16by9 w-100 d-flex  m-1 p-1 ">
                                <iframe
                                    class="d-flex embed-responsive-item rounded p-2 w-75 mx-auto  "
                                    height={"100%"}
                                    width={"100%"}
                                    src="https://www.youtube.com/embed/zSWdZVtXT7E"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="embed-responsive embed-responsive-4by3 m-1 p-1 d-md-none">
                            <h5 className="fw-bold">Trailer </h5>

                            <iframe
                                class="d-flex embed-responsive-item p-2 w-100 mx-auto "
                                height={"300px"}
                                src="https://www.youtube.com/embed/zSWdZVtXT7E"
                            ></iframe>
                        </div>
                        <div className="m-1 p-1">
                            <h5 className="fw-bold">Description </h5>
                            <p
                                style={{
                                    fontSize: "14px",
                                    letterSpacing: "1px",
                                }}
                            >
                                This is some placeholder content to show the
                                scrolling behavior for modals. We use repeated
                                line breaks to demonstrate how content can
                                exceed minimum inner height, thereby showing
                                inner scrolling. When content becomes longer
                                than the predefined max-height of modal, content
                                will be cropped and scrollable within the modal.
                            </p>
                        </div>
                        <div className="m-1 p-1">
                            <h5 className="fw-bold">More informations </h5>
                            <p
                                style={{
                                    fontSize: "14px",
                                    letterSpacing: "1px",
                                }}
                            >
                                This is some placeholder content to show the
                                scrolling behavior for modals. We use repeated
                                line breaks to demonstrate how content can
                                exceed minimum inner height, thereby showing
                                inner scrolling. When content becomes longer
                                than the predefined max-height of modal, content
                                will be cropped and scrollable within the modal.
                            </p>
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
