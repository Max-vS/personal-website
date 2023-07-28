import Section from "@components/Section";
import {Timeline, TimelineItem} from "@components/Timeline";
import {timelineData} from "../data/timeline";
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import {Element, Link as ScrollLink} from 'react-scroll';
import Typewriter from "typewriter-effect";

export default function Index() {
    return (
        <>
            <section
                className="h-screen -z-10 flex items-center justify-center bg-secondary-powder text-3xl sm:text-5xl 2xl:text-6xl font-medium text-gray-900 text-center">
                <div className="inline-block text-center">
                    <Typewriter options={{
                        autoStart: true,
                        loop: true
                    }} onInit={(typewriter) => {
                        typewriter
                            .typeString("Hello.")
                            .pauseFor(1000)
                            .deleteAll(80)
                            .pauseFor(500)
                            .typeString("I am Max.")
                            .pauseFor(1000)
                            .deleteChars(4)
                            .pauseFor(500)
                            .typeString("a <span class='text-pastel-600'>Student.</span>")
                            .pauseFor(1000)
                            .deleteChars(8)
                            .pauseFor(500)
                            .typeString("<span class='text-pastel-700'>Developer.</span>")
                            .pauseFor(1000)
                            .deleteChars(10)
                            .pauseFor(400)
                            .typeString("<span class='text-pastel-500'>Founder.</span>")
                            .pauseFor(1000)
                            .deleteAll()
                            .pauseFor(3500)
                            .start();
                    }}/>
                    <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer absolute bottom-16 left-[50%] -translate-x-[50%]">
                        <ChevronDownIcon className="animate-bounce h-10 md:h-12"/>
                    </ScrollLink>
                </div>
            </section>
            <Element name="about">
                <Section>
                    <Timeline>
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} date={item.date} title={item.title} text={item.text} skills={item.skills}/>
                        ))}
                    </Timeline>
                </Section>
            </Element>
            <Element name="projects">
                <Section>
                    <div className="h-96"/>
                </Section>
            </Element>
        </>
    )
}
