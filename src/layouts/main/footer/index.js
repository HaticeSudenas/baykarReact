export default function Footer() {
    return (
        <div className="px-20 bg-cover bg-center w-full h-[464px] mt-10" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/5.png)` }}>
            <div className="grid grid-cols-4 gap-10 text-white pt-16">
                <div className="text-base font-normal">
                    <p className="font-medium pb-4">Product</p>
                    <p className="pb-4">Pricing</p>
                    <p className="pb-4">Overview</p>
                    <p className="pb-4">Browse</p>
                    <p className="pb-4">Accessibility</p>
                    <p className="pb-4">Five</p>
                </div>
                <div className="text-base font-normal">
                    <p className="font-medium pb-4">Solutions</p>
                    <p className="pb-4">Brainstorming</p>
                    <p className="pb-4">Ideation</p>
                    <p className="pb-4">Wireframing</p>
                    <p className="pb-4">Research</p>
                    <p className="pb-4">Design</p>
                </div>
                <div className="text-base font-normal">
                    <p className="font-medium pb-4">Support</p>
                    <p className="pb-4">Contact Us</p>
                    <p className="pb-4">Developers</p>
                    <p className="pb-4">Documentation</p>
                    <p className="pb-4">Integrations</p>
                    <p className="pb-4">Reports</p>
                </div>
                <div className="text-base font-normal">
                    <p className="font-medium pb-4">Get the App</p>
                    <img src="/img/logo/AppStore.png" className="w-[119px] pb-4" />
                    <img src="/img/logo/GooglePlay.png" className="w-[119px] pb-12" />
                    <p className="pb-4 font-medium">Follow Us</p>
                    <div className="grid grid-cols-5">
                        <img src="/img/logo/youtube.png" />
                        <img src="/img/logo/Vector9.png" />
                        <img src="/img/logo/Vector10.png" />
                        <img src="/img/logo/instagram.png" />
                        <img src="/img/logo/linkedin.png" />
                    </div>
                </div>
            </div>
            <div className="h-px bg-[#334155] w-[100%]" />
            <div className="text-[#E2E8F0] text-base font-normal flex justify-between items-center">
                Collers @ 2023. All rights reserved.
                <div>
                    <div className="grid grid-cols-4 gap-10 text-[#E2E8F0] pt-4">
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Contact</p>
                        <p className="pb-4 flex gap-2"><img src="/img/logo/world.png" />EN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}