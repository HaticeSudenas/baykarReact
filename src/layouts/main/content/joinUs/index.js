import SignUpButton from "../../../../components/buttons/signUpButton";

export default function JoinUs() {
    return (
        <div className="px-20 bg-cover bg-center w-full h-[1110px]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/1.png)` }}>
            <div className="mx-28">
                <div className="flex justify-between items-center w-full transition-colors block group pt-44">
                    <div className="text-[#0F172A] text-6xl font-extrabold py-16">
                        Why join us   
                        <div className="flex justify-start items-center gap-3 mt-10">
                            <img src="/img/logo/Vectort.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-normal">Est et in pharetra magna adipiscing ornare aliquam.</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 my-3">
                            <img src="/img/logo/Vectort.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-normal">Est et in pharetra magna adipiscing ornare aliquam.</div>
                        </div>  
                        <div className="flex justify-start items-center gap-3 mb-10">
                            <img src="/img/logo/Vectort.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-normal">Est et in pharetra magna adipiscing ornare aliquam.</div>
                        </div>  
                        <SignUpButton className="w-[160px] px-3 py-1.5 text-xl mr-4" title="Sign up now" />                
                    </div>
                    <div className="w-[520px] h-[350px] pt-32">
                        <img src="/img/foto/Desktop.png" alt="Logo" />
                    </div>
                </div>
            </div>

        </div>
    )
}