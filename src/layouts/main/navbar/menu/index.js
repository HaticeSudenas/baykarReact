import SignUpButton from "../../../../components/buttons/signUpButton";
import { navBarMenu } from "../../../../utils/consts";

export default function Menu() {
    return (
        <>
            <div class="flex">
                <p className="font-roboto font-bold text-3xl leading-9 text-left w-[102px] h-[35px] h-9 text-[#78350F]" >
                    COLLERS
                </p>
            </div>
            <div className="flex">
                <div>
                    <ul class="gap-4 font-normal text-xl flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0">
                        {
                            navBarMenu.map((menu, index) => (
                                <div className="text-[#78350F] block text-base font-medium" >{menu.title}</div>
                            ))
                        }
                       <SignUpButton className="font-medium mt-[-7px] px-3 py-1.5" title="Sign up now"/>
                    </ul>
                </div>
            </div>
        </>
    )
}
