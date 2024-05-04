export default function Collection() {
    return (
        <div className="px-20 bg-cover bg-center w-full h-[1750px]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/10.png)` }}>
            <div className="text-[#0F172A] text-6xl font-extrabold flex justify-between items-center py-16">
                Grow your collection
            </div>
            <div className="font-normal text-lg text-[#0F172A]">
                Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </div>

            <div className="flex justify-between items-center w-full transition-colors block group">
                    <div className="text-[#0F172A] text-6xl font-extrabold pt-32"> 
                        <div className="flex justify-start items-center gap-3 mb-10 ">
                            <img src="/img/logo/search.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-medium">Bibendum tellus</div>
                        </div>
                        <div className="flex justify-start items-center gap-3 mb-10">
                            <img src="/img/logo/Vector8.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-medium">Cras eget</div>
                        </div>  
                        <div className="flex justify-start items-center gap-3 mb-10">
                            <img src="/img/logo/Vector7.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-medium">Dolor pharetra</div>
                        </div>    
                        <div className="flex justify-start items-center gap-3 mb-10">
                            <img src="/img/logo/Vector6.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-medium">Amet, fringilla</div>
                        </div>   
                        <div className="flex justify-start items-center gap-3 mb-10">
                            <img src="/img/logo/Vector5.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-medium">Amet nibh</div>
                        </div>    
                        <div className="flex justify-start items-center gap-3 mb-10">
                            <img src="/img/logo/Vector4.png" alt="Logo" />
                            <div className="text-[#0F172A] block text-xl font-medium">Sed velit</div>
                        </div>             
                    </div>                   
                    <div className="w-[970px] h-[570px] pt-32">
                        <img src="/img/foto/Col1.png" alt="Logo" />
                    </div>
                </div>

                <div className="relative">
                    <img src="/img/foto/col (1).png" alt="Logo" className="w-[256px] h-[300px] absolute top-96 left-60"/>
                </div>

                <div className="relative">
                    <div className=" absolute top-[600px] left-[600px] text-center">
                        <div className="text-8xl font-extrabold text-[#FFFBEB] pb-8">11,658,467</div>
                        <div className="text-6xl font-extrabold text-[#FFFBEB]">Shoes Collected</div>
                    </div>
                </div>
        </div>
    )
}