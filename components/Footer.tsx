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
                <div className="flex flex-wrap items-center justify-center space-x-10 mt-20">
                    <h3 className="text-gray-900 text-md">Copyright © 2023 Max von Storch. All rights reserved.</h3>
                    <Link href="https://www.linkedin.com/in/maxvonstorch/">
                        <FontAwesomeIcon icon={ faLinkedin } size="2xl" className="text-gray-900 hover:scale-105 transition-transform duration-200"/>
                    </Link>
                    <Link href="https://github.com/Max-vS">
                        <FontAwesomeIcon icon={ faGithub } size="2xl" className="text-gray-900 hover:scale-105 transition-transform duration-200"/>
                    </Link>
                </div>
            </Section>
        </footer>
    );
}
