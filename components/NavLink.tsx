import {Link as ScrollLink} from "react-scroll";

export const NavLink = ({ to, children }) => (
    <ScrollLink to={to} smooth={true} duration={500} className="cursor-pointer hover:underline underline-offset-4">
        {children}
    </ScrollLink>
);