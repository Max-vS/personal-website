import React from 'react';
import {SkillCloud} from "@components/SkillCloud";

export function Timeline(props) {
    return (
        <section {...props} className="flex flex-col container self-center m-auto lg:items-center relative z-0 space-y-12 sm:space-y-24 overflow-clip pb-12">
            <div className="hidden sm:block absolute w-[3px] h-full bg-gray-100 overflow-hidden z-0 ml-[39px] lg:ml-0">
                <div className="absolute top-0 left-0 right-0 bottom-auto h-[80px] bg-gradient-to-b from-secondary-powder to-transparent" />
                <div className="fixed w-[3px] top-0 h-1/2 bg-gradient-to-b from-pastel-700/40 to-pastel-600/40 z-[-1]" />
                <div className="absolute top-auto left-0 right-0 bottom-0 h-[80px] bg-gradient-to-t from-secondary-powder to-transparent" />
            </div>
            {props.children}
        </section>
    );
}

export function TimelineItem({ date, title, text, skills = [] }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-timeline lg:grid-rows-none sm:grid-cols-timeline-lg grid-rows-timeline p-5 text-gray-900 md:gap-y-16 lg:p-10">
            <div className="sticky top-1/2 hidden lg:block justify-self-end text-3xl uppercase self-start">{date}</div>
            <div className="sm:flex h-[36px] hidden sticky lg:justify-self-center justify-self-start top-1/2 transition-all duration-1000 ease-in-out z-1 bg-secondary-powder">
                <div className="w-2 h-2 m-4 bg-black rounded-full my-auto"/>
            </div>
            <div className="justify-self-start self-start sm:ml-12 lg:ml-0">
                <div className="lg:hidden lg:justify-self-end justify-self-start text-3xl uppercase self-start">{date}</div>
                <h2 className="text-3xl font-medium uppercase tracking-wide mb-2">{title}</h2>
                {text.split("\n").map((x, i) => (
                    <p key={i} className="text-lg text-gray-500 ml-0.5">
                        {x}
                        <br />
                    </p>
                ))}
                <SkillCloud skills={skills} />
            </div>
        </div>
    );
}