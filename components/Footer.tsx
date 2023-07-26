import Section from "./Section";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <Section background="isa">
                <h1 className="text-3xl text-center uppercase tracking-wider text-black">Footer</h1>
                <div className="flex flex-wrap items-center justify-center space-x-10">
                    <FontAwesomeIcon icon={ faLinkedin } size="2xl"/>
                </div>
            </Section>
        </footer>
    );
}
