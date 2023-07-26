import Section from "@components/Section";
import {Timeline, TimelineItem} from "@components/Timeline";
import {timelineData} from "../data/timeline";
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import {Element} from 'react-scroll';
import Typewriter from "typewriter-effect";

export default function Index() {
    return (
        <>
            <section className="h-screen -z-10 flex items-center justify-center bg-secondary-powder text-6xl font-medium text-gray-900 text-center">
                <Typewriter options={{
                    autoStart: true,
                    loop: true
                }} onInit={ (typewriter) => {
                    typewriter
                        .typeString("Hello.")
                        .pauseFor(1000)
                        .deleteAll(100)
                        .pauseFor(100)
                        .typeString("I am <span class='text-pastel-600'>Max.</span>")
                        .pauseFor(1000)
                        .deleteChars(4)
                        .pauseFor(500)
                        .typeString("a <span class='text-pastel-700'>Student.</span>")
                        .pauseFor(1000)
                        .deleteChars(8)
                        .pauseFor(500)
                        .typeString("<span class='text-pastel-800'>Developer.</span>")
                        .pauseFor(1000)
                        .deleteChars(10)
                        .pauseFor(400)
                        .typeString("<span class='text-pastel-900'>Founder.</span>")
                        .pauseFor(1000)
                        .deleteAll(100)
                        .pauseFor(3500)
                        .start();
                }}/>
                <button
                    className="absolute bottom-16 left-[50%] -translate-x-[50%]"
                    onClick={() => window.scrollBy({ top: 900, behavior: "smooth" })}
                >
                    <ChevronDownIcon className="animate-bounce h-12"/>
                </button>
            </section>
            <Element name="about">
                <Section>
                    <Timeline>
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} date={item.date} title={item.title} text={item.text}/>
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
