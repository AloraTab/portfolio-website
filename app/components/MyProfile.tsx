"use client"

import Image from "next/image";
import { motion } from "framer-motion";



const MyProfile = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}

        >
            <div
                id="about"
                className="flex flex-col lg:flex-row w-full lg:px-24 lg:my-20 items-center justify-center ">
                <div className="relative flex w-full lg:w-1/3 flex-col lg:flex-row items-center rounded-lg max-w-4xl">

                    {/* <div className="absolute -left-6 -top-6 w-[321px] h-[321px] bg-[#0E79B2] bg-opacity-20"></div> */}

                    <div className="relative w-[203px] h-[200px] lg:w-[406px] lg:h-[398px] mb-6 lg:mb-0 lg:mr-8 z-10">
                        <Image
                            src={'/img/profile.svg'}
                            alt="Profile Picture"
                            width={406}
                            height={398}
                        />
                    </div>
                </div>
                {/* <div className="relative flex w-1/3 flex-col  items-center p-6 lg:p-10 rounded-lg max-w-4xl">

                    <h1 className="text-4xl font-bold">Alora Tabuco</h1>
                    <p className="text-xl mb-8">AI/ML Software Engineer</p>
                </div> */}
                <div
                    className="w-full lg:w-2/3 flex flex-col">
                    <p className="text-6xl">Hello!</p>
                    <b className="text-xl">My name is Alora Tabuco.</b>
                    <p className="text-lg">
                        <br /><br />
                        I&apos;m an AI/ML software engineer with a passion for transforming complex AI concepts into practical solutions. Through hands-on experience and technical expertise, I&apos;ve developed AI applications that deliver real value for clients, stakeholders, and hackathon projects.
                        <br /> <br />
                        I graduated in 2023 with a BSc in Computer Science, specializing in Artificial Intelligence. After gaining valuable experience as an AI/ML Software Engineer, I&apos;m now seeking new opportunities to grow and contribute to innovative projects that push the boundaries of what&apos;s possible with AI.
                         <br /> <br />
                         My focus lies in building AI systems that are both powerful and practical. I believe in creating solutions that not only leverage cutting-edge technology but also address real-world challenges in accessible and meaningful ways.
                    </p>
                    <p className="underline font-bold mt-4">
                        Get my resume.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default MyProfile;