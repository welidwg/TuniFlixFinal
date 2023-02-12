import { NavLink } from "react-router-dom";
import Input from "./form/Input";

export default function Form(props) {
    return (
        <form>
            <div className="mb-3">
                <Input
                    label="fas fa-user"
                    name={"username"}
                    type="text"
                    id={"dd"}
                    placeholder="Username"
                />
            </div>
            <div className="mb-3">
                <Input
                    label="fas fa-lock"
                    name={"password"}
                    type="password"
                    id={"password"}
                    placeholder="Password"
                />
            </div>
            <button
                type="submit"
                className="btn btn-gamer-3 w-100 mb-3 fw-bold"
            >
                Let me in <i class="fal fa-portal-enter"></i>
            </button>
           
        </form>
    );
}
