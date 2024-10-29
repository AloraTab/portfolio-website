"use client"
import HoverBlock from "./blocks/HoverBlock";
import { motion } from "framer-motion";

const MyBlog = () => {
    return (
        <div className="flex-col flex">
            <motion.div
                whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.5 },
                }}>
                <HoverBlock
                    outlineColor={"green"}
                    header={"Exploring the Fundamentals of LLMs and RAG"}
                    desc={"A look into the hype around RAG, a small demo of it - and where it could go next?"}
                />
            </motion.div>

            <motion.div
                whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.5 },
                }}>
                <HoverBlock
                    outlineColor={"green"}
                    header={"AI Art - Where Next?"}
                    desc={"How AI Art works, what this means for artists and an important discussion on ethics."}
                />
            </motion.div>

            <motion.div
                whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.5 },
                }}>
                <HoverBlock
                    outlineColor={"green"}
                    header={"More coming soon!"}
                    desc={""}
                />
            </motion.div>

        </div>
    );
}

export default MyBlog;