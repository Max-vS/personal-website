import {cx} from "class-variance-authority";
import {motion, useMotionValueEvent, useScroll,} from "framer-motion";
import Link from "next/link";
import {useState} from "react";
import {BeakerIcon} from '@heroicons/react/24/solid'
import {dm_sans} from "@styles/fonts";
import {NavLink} from "@components/NavLink";

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) =>
        setScrolled(latest > 0)
    );

    return (
        <motion.header
            className={cx(
                "fixed z-50 w-full px-8 duration-300 md:px-20 text-gray-900 py-8 2xl:py-12",
                scrolled && !navOpen && "bg-secondary-powder/70 backdrop-blur-xl shadow-xl shadow-secondary-powder",
                (!scrolled || navOpen)
            )}
        >
            <div className={cx("container relative mx-auto flex flex-row items-center justify-between text-xl font-medium", dm_sans.className)}>
                <Link href={"/"}>
                    <BeakerIcon className="h-12 w-12"/>
                </Link>
                <div className="flex flex-row gap-12 uppercase tracking-wider">
                    <NavLink to="about">About me</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
            </div>
        </motion.header>
    );
};
