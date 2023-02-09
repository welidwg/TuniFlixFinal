export default function ListItem(props) {
    return (
        <a
            href="#"
            key={props.item.rank}
            class="list-group-item list-group-item-action px-3 border-0 rounded-3  mt-2 d-flex flex-row align-items-center justify-content-between bg-transparent "
        >
            <span className=" d-flex">
                <span className="l mx-2 text-light  p-2 fw-bold">
                    {props.item.rank}.
                </span>
                <img
                    src={`/assets/img/${props.item.logo}`}
                    className=" img-fluid rounded-5 shadow-lg mx-2"
                    style={{ height: "35px", width: "35px" }}
                />
                <div className="d-flex flex-column ">
                    <span
                        className="text-white"
                        style={{ textTransform: "capitalize" }}
                    >
                        {props.item.name}
                    </span>
                    <span
                        className="text-secondary my-1 fw-bold"
                        style={{
                            textTransform: "capitalize",
                            fontSize: "14px",
                        }}
                    >
                        {props.item.followers} Followers
                    </span>
                </div>
            </span>
            <span className="">
                <button
                    className="btn bg-white color-1 rounded-4"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-html="true"
                    tabIndex={2}
                    title="<div class=''>Follow</div>"
                >
                    <i class="fas fa-user-plus"></i>
                </button>
            </span>
        </a>
    );
}
