import Section from "./Section";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import ContactForm from "@components/ContactForm";

export default function Footer() {
    return (
        <footer>
            <Section>
                <ContactForm/>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
                    <div className="text-gray-900 transition-transform duration-200 flex gap-6">
                        <Link href="https://www.linkedin.com/in/maxvonstorch/">
                            <FontAwesomeIcon icon={ faLinkedin } size="2xl" className="hover:scale-105"/>
                        </Link>
                        <Link href="https://github.com/Max-vS">
                            <FontAwesomeIcon icon={ faGithub } size="2xl" className="hover:scale-105"/>
                        </Link>
                    </div>
                    <h3 className="text-gray-900 text-md text-center">Copyright © 2023 Max von Storch. All rights reserved.</h3>
                </div>
            </Section>
        </footer>
    );
}
