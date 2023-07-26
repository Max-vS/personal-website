import Footer from "./Footer";
import {Header} from "./Header";
import {inter} from "@styles/fonts";

export default function Layout({ children }) {
    return (
        <div className={inter.className}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
