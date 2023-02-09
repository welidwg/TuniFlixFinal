export default function SideBar(props) {
    return (
        <div
            class="d-md-flex d-none flex-column  flex-shrink-0 bg-light fixed-nav align-items-center "
            style={{ width: "4.5rem" }}
        >
            <a
                href="/"
                class="d-block p-3 link-dark text-decoration-none"
                title=""
            >
                <img
                    src="/assets/img/logo/logo.png"
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                />
            </a>
            <ul class="nav  nav-flush flex-column  text-center mt-5">
                <li class="nav-item ">
                    <a
                        href="#"
                        class="nav-link active  py-3 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-html="true"
                        title="<div class=''>Home</div>"
                    >
                        <i className="fas fa-house"> </i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="nav-link  py-3 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-html="true"
                        title="<div class=''>Profil</div>"
                    >
                        <i className="fas fa-user"> </i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="nav-link  py-3 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-html="true"
                        title="<div class=''>Dashboard</div>"
                    >
                        <i class="fas fa-tachometer-fast"></i>{" "}
                    </a>
                </li>
            </ul>
            {/* <div class="dropdown border-top">
                <a
                    href="#"
                    class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt="mdo"
                        width="24"
                        height="24"
                        class="rounded-circle"
                    />
                </a>
                <ul
                    class="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser3"
                >
                    <li>
                        <a class="dropdown-item" href="#">
                            New project...
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Sign out
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
    );
}
