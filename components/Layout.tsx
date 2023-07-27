import Footer from "./Footer";
import {Header} from "./Header";
import {inter} from "@styles/fonts";
import {Element} from 'react-scroll';

export default function Layout({ children }) {
    return (
        <div className={inter.className}>
            <Header />
            <main>{children}</main>
            <Element name="contact">
                <Footer />
            </Element>
        </div>
    );
}
