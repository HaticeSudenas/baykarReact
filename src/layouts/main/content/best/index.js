import SignUpButton from "../../../../components/buttons/signUpButton";
import BestCard from "../../../../components/cards/bestCard";

export default function Best() {
    return (
        <div className="px-20 bg-cover bg-center w-full h-[776px]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/Ekran1.png)` }}>
            <div className="text-white text-6xl font-extrabold flex justify-between items-center py-16">
                The best of the best
                <SignUpButton className="font-bold border-white text-white text-2xl px-3 py-1.5" title="Sign up now" />
            </div>


            <div className="grid grid-cols-3">
                <BestCard img="/img/foto/Picture.png" title="Title" subTitle="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." button="Buy Now"/>
                <BestCard img="/img/foto/Picture (1).png" title="Title" subTitle="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." button="Buy Now"/>
                <BestCard img="/img/foto/Picture (2).png" title="Title" subTitle="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." button="Buy Now"/>
            </div>
        </div>
    )
}
