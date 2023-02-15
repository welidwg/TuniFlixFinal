import { useEffect, useState } from "react";

export default function Input({
    label,
    type,
    id,
    name,
    placeholder,
    required,
}) {
    const [isShowen, setShowed] = useState(false);
    function togglePassword() {
        let passwordInput = document.getElementById(id);
        console.log("test");
        if (passwordInput.type == "password") {
            passwordInput.type = "text";
            setShowed(true);
        } else {
            passwordInput.type = "password";
            setShowed(false);
        }
    }
    useEffect(() => {});
    return (
        <div class="input-group mb-3 rounded-pill bg-light">
            <span
                class="input-group-text bg-transparent text-dark border-0"
                id="basic-addon1"
            >
                <i className={label}></i>
            </span>
            <input
                type={type}
                class="form-control color-1 rounded-pill shadow-none border-0"
                placeholder={placeholder}
                id={id}
                name={name}
                required={required}
            />
            {type == "password" && (
                <a
                    class="input-group-text bg-transparent text-dark border-0"
                    id="basic-addon1"
                    onClick={togglePassword}
                >
                    {isShowen ? (
                        <i className="fal fa-eye-slash"></i>
                    ) : (
                        <i className="fal fa-eye"></i>
                    )}
                </a>
            )}
        </div>
    );
}
