import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Form from "../../components/Form";
import List from "../../components/List";
import { APP_NAME } from "../../constants/vars";

export default function Login(props) {
    useEffect(() => {
        document.title = `${APP_NAME} - Login`;
    }, []);
    return (
        <div className="text-center">
            <div className=" d-flex flex-column align-items-center  mb-2">
                <img
                    src="/assets/img/logo/logo_without_text.png"
                    className="img-fluid "
                    style={{ width: "150px" }}
                />
                <h5 className="text-white fw-bold fs-3 ">Login</h5>
            </div>
            <div className="d-flex justify-content-center ">
                <Form />
            </div>
            <div className="mb-3 text-center d-flex flex-column justify-content-center align-items-center">
                <a className=" fw-bold color-3" for="exampleCheck1">
                    Forgot your password ?
                </a>
                <hr className="w-25 " />
            </div>
            <div className="mb-3  text-center">
                <NavLink
                    className="text-white fw-bold"
                    for="exampleCheck1"
                    to="/signup"
                >
                    No account yet ? Let's create one for you !
                </NavLink>
            </div>
        </div>
    );
}
