import React from 'react';

export function Timeline(props) {
    return (
        <section {...props} className="flex flex-col container self-center m-auto items-center relative z-0 space-y-24 overflow-clip pb-12">
            <div className="absolute w-[3px] h-full bg-gray-100 overflow-hidden z-0">
                <div className="absolute top-0 left-0 right-0 bottom-auto h-[80px] bg-gradient-to-b from-secondary-powder to-transparent" />
                <div className="fixed w-[3px] top-0 h-1/2 bg-gradient-to-b from-pastel-600/70 to-pastel-900/70 z-[-1]" />
                <div className="absolute top-auto left-0 right-0 bottom-0 h-[80px] bg-gradient-to-t from-secondary-powder to-transparent" />
            </div>
            {props.children}
        </section>
    );
}

export function TimelineItem({ date, title, text }) {
    return (
        <div className="grid grid-cols-timeline p-5 text-gray-900 gap-y-16">
            <div className="sticky top-1/2 justify-self-end text-3xl uppercase self-start">{date}</div>
            <div className="flex h-[36px] sticky justify-self-center top-1/2 self-start transition-all duration-1000 ease-in-out z-1 bg-secondary-powder">
                <div className="w-2 h-2 m-4 bg-black rounded-full my-auto"/>
            </div>
            <div className="justify-self-start self-start">
                <h2 className="text-3xl font-medium uppercase tracking-wide mb-2">{title}</h2>
                {text.split("\n").map((x) => (
                    <p key={x} className="text-lg text-gray-500">
                        {x}
                        <br />
                    </p>
                ))}
            </div>
        </div>
    );
}