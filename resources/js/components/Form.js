import { NavLink } from "react-router-dom";
import Input from "./form/Input";

export default function Form(props) {
    return (
        <form>
            {props.for == "login" && (
                <>
                    {" "}
                    <div className="mb-3">
                        <Input
                            label="fal fa-user"
                            name={"username"}
                            type="text"
                            required={true}
                            id={"dd"}
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="fal fa-lock"
                            name={"password"}
                            type="password"
                            id={"password"}
                            required={true}
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-gamer-3 w-100 mb-3 fw-bold"
                    >
                        Let me in <i class="fal fa-portal-enter"></i>
                    </button>
                </>
            )}
            {props.for == "signup" && (
                <>
                    {" "}
                    <div className="mb-3">
                        <Input
                            label="fal fa-user"
                            name={"username"}
                            type="text"
                            id={"usernameSign"}
                            placeholder="Username"
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="fal fa-at"
                            name={"email"}
                            type="email"
                            required={true}
                            id={"emailSign"}
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="fal fa-lock"
                            name={"password"}
                            type="password"
                            id={"password"}
                            placeholder="Password"
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="fal fa-lock"
                            name={"Confirmpassword"}
                            type="password"
                            id={"Confirmpassword"}
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-gamer-3 w-100 mb-3 fw-bold"
                    >
                        Let's Start <i class="fal fa-portal-enter"></i>
                    </button>
                </>
            )}
        </form>
    );
}
