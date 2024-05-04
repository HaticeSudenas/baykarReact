import SignUpButton from "../../../components/buttons/signUpButton";
import NaviCard from "../../../components/cards/naviCard";
import Menu from "./menu";

export default function NavBar() {
    return (
        <nav className="px-20 bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/navbar.png)` }}>
            <div className="pt-2 flex items-center justify-between">
                <Menu />
            </div>
            <div className="pr-4 text-[20px] font-bold my-4 flex justify-between items-center w-full transition-colors block group">
                <div className="w-[714px] h-[257px] gap-12">
                    <h6 className="font-roboto font-extrabold text-7xl h-[79px] w-[714px] text-[#0F172A] mb-12">Collectible Sneakers</h6>
                    <div className="font-normal text-lg text-[#0F172A] w-[714px] h-[58px] mb-12">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</div>
                    <div className="w-[347px] flex justify-start items-center">
                        <SignUpButton className="px-3 py-1.5 text-xl mr-4" title="Sign up now" />
                        <div className="flex justify-start items-center gap-1">
                            <img src="/img/logo/play-circle.png" alt="Logo" />
                            <div className="text-[#78350F] block text-base font-medium">Watch Demo</div>
                        </div>
                    </div>
                </div>
                <div className="w-[486px] h-[423px]">
                    <img src="/img/foto/col.png" alt="Logo" />
                </div>
            </div>

            <div className="flex justify-between items-center mt-[100px]">
                <NaviCard imgr="/img/logo/Rectangle 25.png" imgi="/img/logo/trophy.png" head="Nibh viverra" text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "/>
                <NaviCard imgr="/img/logo/Rectangle 26.png" imgi="/img/logo/Icon.png" head="Cursus amet" text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "/>
                <NaviCard imgr="/img/logo/Rectangle 27.png" imgi="/img/logo/tv.png" head="Ipsum fermentum" text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "/>
            </div>
        </nav>
    )
}

