import { APP_NAME } from "../constants/vars";
export default function Navbar(props) {
    return (
        <>
            {/* Mobile */}
            <nav class="navbar navbar-light navbar-expand-md d-md-none   py-3">
                <div class="container d-flex flex-row justify-content-between">
                    <a
                        class=" col-2  text-white rounded-pill p-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        style={{ padding: "5px" }}
                    >
                        <i class="fas fa-bars"></i>
                    </a>
                    <a
                        class="navbar-brand d-flex  align-items-center align-self-center mx-auto"
                        href="#"
                    >
                        <img
                            src="/assets/img/logo/logo.png"
                            className="img-fluid"
                            style={{ maxHeight: "35px" }}
                        />
                        <span
                            className="text-white mx-1 fw-bold"
                            style={{ fontSize: "17px" }}
                        >
                            {APP_NAME}
                        </span>
                    </a>
                    <div>
                        <a class="mx-2 " type="button">
                            <div
                                className=" bg-transparant text-center text-white"
                                style={{ padding: "4px" }}
                            >
                                <i class="fas fa-search"></i>
                            </div>
                        </a>
                        <a
                            class="fw-bold  text-center text-white"
                            type="button"
                            style={{ padding: "4px" }}
                        >
                            <i class="fas fa-sign-in-alt"></i>
                        </a>{" "}
                        {/* <a class=" mx-2 " type="button">
                            <div
                                className=" bg-transparant text-center text-white"
                                style={{ padding: "4px" }}
                            >
                                <i class="fas fa-bell"></i>
                            </div>
                        </a>
                        <a
                            class="fw-bold rounded-5 btn   text-center text-white"
                            type="button"
                            style={{ padding: "8px" }}
                        >
                            <img
                                src="/assets/img/avatar.jpg"
                                className="img-fluid rounded-pill"
                                style={{ maxHeight: "30px" }}
                            />
                        </a> */}
                    </div>
                </div>
            </nav>
            {/* Mobile Bottom */}
            {/* <div class="container-fluid bg-light d-block d-xl-none d-sm-block d-md-none text-dark bottom-nav">
                <div
                    class="row nav d-flex justify-content-between "
                    id="bottomnav"
                    // style="padding: 9px;"
                >
                    <div class="col col-sm-3 p-0 mx-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">
                                <i class="fas fa-home"></i>
                                <br />
                                <span>home</span>
                            </a>
                        </li>
                    </div>

                    <div class="col col-sm-3 p-0 text-dark">
                        <li class="nav-item">
                            <a class="nav-link">
                                <i class="fal fa-store"></i>
                                <br />
                                <span>shop</span>
                            </a>
                        </li>
                    </div>
                    <div class="col col-sm-3  p-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-comment-check"></i>
                                <br /> <span>contacts</span>
                            </a>
                        </li>
                    </div>

                    <div class="col col-sm-3  p-0">
                        <li class="nav-item dropdown">
                            <a
                                class=" nav-link "
                                aria-expanded="false"
                                data-bs-toggle="dropdown"
                                href="#"
                            >
                                <i class=" fal fa-user-circle"></i>
                                <br />
                                <span>me</span>
                            </a>
                            <div class="dropdown-menu">
                                <a
                                    class="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginModal"
                                >
                                    <i class="fal fa-sign-in-alt mr-2"></i>
                                    login
                                </a>
                                <a
                                    class="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#registerModal"
                                >
                                    <i class="fal fa-user-plus"></i>
                                    signup
                                </a>
                            </div>
                        </li>
                    </div>
                </div>
            </div> */}
            {/* Desktop */}

            <nav class="navbar navbar-light navbar-expand-md d-none d-md-block  py-3">
                <div class="container">
                    <div class="input-group mb-3 rounded-pill p-2 w-25  bg-color-1">
                        <input
                            type="text"
                            class="form-control text-white bg-transparent shadow-none border-0 rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                        />
                        <span
                            class="input-group-text text-white border-0 bg-transparent  rounded "
                            id="basic-addon1"
                        >
                            <i className="fal fa-search"></i>
                        </span>
                    </div>
                    <button
                        data-bs-toggle="collapse"
                        class="navbar-toggler bg-color-1 "
                        data-bs-target="#navcol-3"
                    >
                        <i class="fal fa-bars p-2"></i>{" "}
                    </button>
                    <div class="collapse navbar-collapse" id="navcol-3">
                        <ul class="navbar-nav mx-auto ">
                            <button
                                class="btn btn-gamer-3 fw-bold"
                                type="button"
                            >
                                Discover <i class="fas fa-radar"></i>
                            </button>
                        </ul>
                        <button class="btn btn-gamer-3 fw-bold" type="button">
                            <i class="fas fa-sign-in-alt"></i> Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
