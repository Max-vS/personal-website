import React from 'react';

export function SkillCloud({ skills = [] }) {
    return (
        <section className="flex flex-wrap items-start gap-3 mt-3">
            {skills.map((skill, index) => (
                <Skill skill={skill} key={index}/>
            ))}
        </section>
    );
}

export function Skill({ skill }) {
    return (
        <div className="h-6 p-4 flex bg-secondary-magnolia rounded-xl items-center">
            <p className="text-md text-gray-500">{skill}</p>
        </div>
    );
}