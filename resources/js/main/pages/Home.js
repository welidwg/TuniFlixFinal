import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import List from "../../components/List";
import Navbar from "../../components/Navbar";

export default function Home(props) {
    useEffect(() => {
        document.title += " - Home";
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
            <Header />
        </>
    );
}
