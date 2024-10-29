"use client"
import ExperienceBlock from "./blocks/ExperienceBlock";
import { motion } from "framer-motion";
const MyExperience = () => {
    return (
        <motion.div
            // initial={{ x: 200 }}
            // whileInView={{ x: 0 }}
            >
            <div className="flex flex-col">
                <ExperienceBlock
                    duration="Nov 2023 - Present"
                    title="AI/ML Software Engineer ~ DevelopL"
                    desc="Developed and tested full-stack AI/ML software solutions and POCs for clients, conducted demos for clients and collaborated with a team of designers. Lead developer for the DevelopL Product."
                    stack={["NextJS", "AWS", "Python", "HTML/CSS", "Streamlit"]} />
                <ExperienceBlock
                    duration="Aug 2023 - Nov 2023"
                    title="Software Engineer Intern ~ DevelopL"
                    desc="Developed and tested full-stack AI/ML software solutions for clients, conducted demos for clients and collaborated with a team of designers."
                    stack={["Flutter", "NextJS", "HTML/CSS", "Google Cloud Platform"]} />
                <ExperienceBlock
                    duration="Sept 2022 - May 2023"
                    title="Teaching Assistant ~ Heriot Watt University Dubai"
                    desc="Assisted professors in aiding the students’ understanding in core AI/ML, programming and lambda calculus concepts."
                    stack={["Python", "Java"]} />
            </div>
        </motion.div>

    );
}

export default MyExperience;