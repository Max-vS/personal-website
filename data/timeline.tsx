type TimelineEvent = {
    date: String,
    title: String,
    text: String,
}

export const timelineData: TimelineEvent[] = [
    {
        date: "2018",
        title: "Internship at DLR",
        text: "Internship at the German Aerospace Center (DLR) in the Department for propulsion."
    },
    {
        date: "2019 - 2021",
        title: "Business@School",
        text: "Comprehensive economic and conceptual evaluation of businesses across diverse industries and scales, " +
            "coupled with the simulation of our unique entrepreneurial venture: School winner and finalist in North Rhine-Westphalia"
    },
    {
        date: "2021",
        title: "Abitur",
        text: "Graduated from high school with advanced courses in Mathematics and Computer Science, achieving an average grade of 1.2"
    },
    {
        date: "2022",
        title: "Data Science Intern",
        text: "Application of Data Science and Predictive Modeling Tools on Big Data in Logistics. Fields covered by the " +
            "internship: data science, artificial intelligence, machine learning, statistics, optimization theory, and databases."
    },
]