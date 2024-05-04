import Content from "./content";
import Footer from "./footer";
import NavBar from "./navbar";

export default function MainLayout(){
    return(
        <div>
            <div className="h-[1044px] mx-auto">
                <NavBar />
            </div>
            <div className="h-[4325px] mx-auto">
                <Content/>
            </div>
            <div className="h-[490px] mx-auto">
                <Footer/>
            </div>
        </div>
    )
}