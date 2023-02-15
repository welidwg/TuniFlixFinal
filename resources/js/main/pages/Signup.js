import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Form from "../../components/Form";
import { APP_NAME } from "../../constants/vars";

export default function Signup(props) {
    useEffect(() => {
        document.title = `${APP_NAME} - Sign Up`;
    }, []);
    return (
        <div className="text-center">
            <div className=" d-flex flex-column align-items-center  mb-2">
                <img
                    src="/assets/img/logo/logo_without_text.png"
                    className="img-fluid "
                    style={{ width: "150px" }}
                />
                <h5 className="text-white fw-bold fs-3 ">Sign Up</h5>
            </div>
            <div className="d-flex justify-content-center ">
                <Form for="signup" />
            </div>

            <div className="mb-3  text-center d-flex  flex-column justify-content-center align-items-center">
                <hr className="w-25 " />

                <NavLink
                    className="text-white fw-bold"
                    for="exampleCheck1"
                    to="/login"
                >
                    Already have an account ? Login now !
                </NavLink>
            </div>
        </div>
    );
}
