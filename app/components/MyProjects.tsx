"use client"
import HoverBlock from "./blocks/HoverBlock";
import { motion } from "framer-motion";
const MyProjects = () => {
    return (

        <div className="flex-col flex">
            <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                }}>
                <HoverBlock
                    outlineColor={"orange"}
                    header={"Facial Emotion Recognition through Video"}
                    desc={"Classification of human emotions through video. This project won 2nd place in the FER-May Hackathon submitted by Team FAI.CE."}
                    hiddenLink={"https://github.com/AloraTab/fer-may-hackathon"}
                    stack={["Python", "Streamlit"]}
                />
            </motion.div>
            <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 },
                }}>
                <HoverBlock
                    outlineColor={"orange"}
                    header={"Keyword Recognition through Voice"}
                    desc={"Audio classification solution for the AAICO Hackathon - the model recognizes a given set of keywords in a spoken audio and identifies where they were spoken. Won 3rd place! Submitted by Team VSTREAM Analysts"}
                    hiddenLink={"https://github.com/AloraTab/fer-may-hackathon"}
                    stack={["Python", "Streamlit"]}
                />
            </motion.div>
            <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 },
                }}>
                <HoverBlock
                    outlineColor={"orange"}
                    header={"Multi-Person Activity Recognition using Wi-Fi"}
                    desc={"Classifies 13 activities performed by two people using the CSI signals recorded by a modded Wi-Fi router. Utilizes a CNN architecture based off of XCeption."}
                    hiddenLink={"https://github.com/AloraTab/fer-may-hackathon"}
                    stack={["Python", "Jupyter Notebook", "Keras", "Tensorflow"]}
                />
            </motion.div>

        </div >


    );
}

export default MyProjects;