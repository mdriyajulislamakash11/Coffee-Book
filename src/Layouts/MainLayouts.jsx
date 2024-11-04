import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Daynamic section */}
            <div className="min-h-[clac(100vh-202px)] p-12 container mx-auto
             ">
                <Outlet />
            </div>

            {/* Foooter */}
            <Footer />
        </div>
    );
};

export default MainLayouts;