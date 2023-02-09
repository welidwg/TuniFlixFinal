import Navbar from "./Navbar";
import Back from "/assets/img/back.jpg";
export default function Header(props) {
    return (
        <>
            <div
                class="container-fluid pt-4 pt-xl-4"
                style={
                    {
                        // backgroundImage: `url("/assets/img/back.jpg")`,
                        // backgroundAttachment: "fixed",
                        // backgroundSize: "cover",
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "center",
                    }
                }
            >
                <div class="row gy-4 gy-md-0">
                    <div class="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                        <div className="text-white">
                            <h2 class="text-uppercase fw-bold">
                                <span className="mb-2"> Welcome to</span>
                                <br />
                                <span className="display-1 mt-1 pt-1">
                                    Gamer Space
                                </span>
                            </h2>
                            <p class="my-3 bold text-bold mx-auto text-center fs-5">
                                <strong>Where all Gamers meet</strong>
                            </p>
                            {/* <a
                                class="btn btn-primary btn-lg me-2"
                                role="button"
                                href="#"
                            >
                                Button
                            </a>
                            <a
                                class="btn btn-outline-primary btn-lg"
                                role="button"
                                href="#"
                            >
                                Button
                            </a> */}
                        </div>
                    </div>
                    <div class="col-md-6 mx-auto">
                        <div class="p-xl-0 m-xl-0">
                            <img
                                class="rounded img-fluid w-100 center mx-auto fit-cover"
                                style={{ maxWidth: "500px" }}
                                src="/assets/img/games.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
