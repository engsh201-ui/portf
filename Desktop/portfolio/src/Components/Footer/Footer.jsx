import { FaFacebookF, FaInstagram, FaGithub, FaTelegramPlane, } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="w-full dark:bg-bgdark py-6 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    © 2026 SHAHD ALI. All rights reserved.</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                Designed & Developed with by SHAHD</p>
                <div className="flex gap-4">
                {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaGithub, link: "https://github.com/engsh201-ui" },
                { icon: FaTelegramPlane, link: "#" },
                { icon: FaInstagram, link: "#" },
                ].map(({ icon: Icon, link }, index) => (
                <a key={index} href={link}
                    className=" w-8 h-8 flex items-center justify-center rounded-full bg-myprimary text-white hover:bg-hovercolor transition-all duration-300 hover:scale-110">
                <Icon className="text-lg" />
                </a>
            ))}
            </div>
        </div>
    </footer>
    )
}
export default Footer