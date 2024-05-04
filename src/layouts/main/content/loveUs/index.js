import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
export default function LoveUs() {

    const cards = [
        {
            title: "Zoomerr",
            description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            author: 'Hellen Jummy',
            role: 'Team Lead',
            logoUrl: "/img/logo/Vector3.png",
            imageUrl: "/img/logo/User Thumb.png",
        },
        {
            title: 'SHELLS',
            description: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
            author: 'Hellena John',
            role: 'Co-founder',
            logoUrl: "/img/logo/Vector (1).png",
            imageUrl: "/img/logo/User Thumb (1).png",
        },
        {
            title: 'ArtVenue',
            description: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
            author: 'David Oshodi',
            role: 'Manager',
            logoUrl: "/img/logo/Vector (2).png",
            imageUrl: "/img/logo/User Thumb (2).png",
        },
        {
            title: 'SHELLS',
            description: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
            author: 'Hellena John',
            role: 'Co-founder',
            logoUrl: "/img/logo/Vector (1).png",
            imageUrl: "/img/logo/User Thumb (1).png",
        },
        {
            title: 'ArtVenue',
            description: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
            author: 'David Oshodi',
            role: 'Manager',
            logoUrl: "/img/logo/Vector (2).png",
            imageUrl: "/img/logo/User Thumb (2).png",
        },
    ];

    const [sliderRef, setSliderRef] = useState(null);
    const goToNext = () => {
        sliderRef.slickNext(); // Sonraki slayta git
    };

    const goToPrev = () => {
        sliderRef.slickPrev(); // Önceki slayta git
    };

    const settings = {
        dots: true,
        infinite: true,

        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="px-20 bg-cover bg-center w-full h-[732px]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/2.png)` }}>
            <div className="text-[#0F172A] text-6xl font-extrabold flex justify-between items-center py-16">
                Because they love us
                <div>
                    <button onClick={goToPrev} className="mr-3"><img src="/img/logo/Button.png" alt="Logo" /></button>
                    <button onClick={goToNext}><img src="/img/logo/Button (1).png" alt="Logo" /></button>
                </div>
            </div>

            <div className="relative ">
                <img src="/img/foto/3.png" className="shadow-md w-full h-[421px] absolute" />
                <Slider ref={(ref) => setSliderRef(ref)} {...settings}>
                    {cards.map((card, index) => (
                        <div className="text-center h-[430px] w-[1280px] relative top-4 left-32 block group text-left flex gap-3">
                            <div className="bg-white rounded-[20px] shadow-top md:shadow-md p-6 w-[384px] h-[430px] border border-[#E2E8F0]">
                                <div className="flex justify-start items-center gap-1">
                                    <img src={card.logoUrl} alt="Logo" className="w-8 h-8" />
                                    <div className="text-[#475569] block text-xl font-bold">{card.title}</div>
                                </div>
                                <div className="text-2xl font-normal w-[320px] text-start py-4">{card.description}</div>
                                <div className="flex text-left w-full  items-center block group">
                                    <img src={card.imageUrl} className="w-16 h-16 rounded-full" />
                                    <div className="mx-3 flex-1">
                                        <h6 className="font-normal text-lg">{card.author}</h6>
                                        <div className="font-normal text-lg text-[#475569] my-1">{card.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>

            </div>
        </div>
    )
}



