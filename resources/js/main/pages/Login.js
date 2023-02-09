import { useEffect } from "react";
import List from "../../components/List";
import { APP_NAME } from "../../constants/vars";

export default function Login(props) {
    useEffect(() => {
        document.title = `${APP_NAME} - Login`;
    }, []);
    return (
        <div className="d-flex justify-content-center ">
            <List />
        </div>
    );
}
