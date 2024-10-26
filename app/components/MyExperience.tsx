import ExperienceBlock from "./blocks/ExperienceBlock";

const MyExperience = () => {
    return (
        <div className="flex flex-col">
            <ExperienceBlock
                duration="Nov 2023 - Present"
                title="AI/ML Software Engineer ~ DevelopL"
                desc="Developed and tested full-stack AI/ML software solutions and POCs for clients, conducted demos for clients and collaborated with a team of designers. Lead developer for the DevelopL Product."
                stack={["NextJS", "AWS", "Python", "HTML/CSS", "Streamlit"]} />
            <ExperienceBlock
                duration="Nov 2023 - Present"
                title="AI/ML Software Engineer ~ DevelopL"
                desc="Developed and tested full-stack AI/ML software solutions and POCs for clients, conducted demos for clients and collaborated with a team of designers. Lead developer for the DevelopL Product."
                stack={["NextJS", "AWS", "Python", "HTML/CSS", "Streamlit"]} />
            <ExperienceBlock
                duration="Nov 2023 - Present"
                title="AI/ML Software Engineer ~ DevelopL"
                desc="Developed and tested full-stack AI/ML software solutions and POCs for clients, conducted demos for clients and collaborated with a team of designers. Lead developer for the DevelopL Product."
                stack={["NextJS", "AWS", "Python", "HTML/CSS", "Streamlit"]} />
        </div>
    );
}

export default MyExperience;