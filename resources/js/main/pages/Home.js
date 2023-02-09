import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import List from "../../components/List";
import Navbar from "../../components/Navbar";
import { APP_NAME } from "../../constants/vars";
import $ from "jquery";

export default function Home(props) {
    useEffect(() => {
        document.title = `${APP_NAME} - Home`;
    }, []);
    return (
        <>
            {" "}
            <div className="row">
                <div className="col-md-12">
                    {" "}
                    <Carousel />
                </div>
                <div className="col-md-3">
                    {" "}
                    <List />
                </div>
            </div>
        </>
    );
}
