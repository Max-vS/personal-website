import {cx} from "class-variance-authority";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Bars3Icon, BeakerIcon, XMarkIcon} from "@heroicons/react/24/solid";
import {dm_sans} from "@styles/fonts";
import {NavLink} from "@components/NavLink";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) =>
        setScrolled(latest > 0)
    );

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsBurgerOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <motion.header
            className={cx(
                "fixed z-50 w-full px-8 duration-300 md:px-20 text-gray-900 py-8 2xl:py-12",
                scrolled && "bg-secondary-powder/70 backdrop-blur-xl shadow-xl shadow-secondary-powder",
            )}
        >
            <div className={cx("flex flex-col container relative mx-auto justify-center text-xl font-medium", dm_sans.className)}>
                <div className="flex flex-row items-center justify-between">
                    <Link href={"/"}>
                        <BeakerIcon className="h-10 w-10 md:h-12 md:w-12"/>
                    </Link>
                    <div className="md:flex hidden flex-row gap-12 uppercase tracking-wider">
                        <NavLink to="about">About me</NavLink>
                        <NavLink to="projects">Projects</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleBurgerMenu}>
                            {isBurgerOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
                {isBurgerOpen && (
                    <motion.div
                        initial={{ opacity: 0, y:-20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col justify-center items-center space-y-3 mt-10"
                    >
                        <NavLink to="about">About me</NavLink>
                        <NavLink to="projects">Projects</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
};