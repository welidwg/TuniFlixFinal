import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

export default function Container(props) {
    return (
        <div className="container-fluid p-0 mainContainer ">
            <div className="row">
                <div className="col-md-1">
                    <SideBar />
                </div>
                <div className="col-md-11">
                    <Navbar />

                    {props.children}
                </div>
            </div>
        </div>
    );
}
