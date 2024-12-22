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
                className="flex flex-row w-full px-24 my-20 items-center justify-center ">
                <div className="relative flex w-1/3 flex-col md:flex-row items-center rounded-lg max-w-4xl">

                    {/* <div className="absolute -left-6 -top-6 w-[321px] h-[321px] bg-[#0E79B2] bg-opacity-20"></div> */}

                    <div className="relative w-[406px] h-[398px] mb-6 md:mb-0 md:mr-8 z-10">
                        <Image
                            src={'/img/profile.svg'}
                            alt="Profile Picture"
                            width={406}
                            height={398}
                        />
                    </div>
                </div>
                {/* <div className="relative flex w-1/3 flex-col  items-center p-6 md:p-10 rounded-lg max-w-4xl">

                    <h1 className="text-4xl font-bold">Alora Tabuco</h1>
                    <p className="text-xl mb-8">AI/ML Software Engineer</p>
                </div> */}
                <div
                    className="w-2/3 flex flex-col">
                    <p className="text-6xl">Hello!</p>
                    <b className="text-xl">My name is Alora Tabuco.</b>
                    <p className="text-xl">
                        <br /><br />
                        I’m an AI/ML Software Engineer focused on something something.
                        <br /> <br />
                        I graduated in 2023 with a BSc. Computer Science (Hons. Artificial Intelligence) degree and have been working on AI/ML software since.
                        <br /> <br />
                        When I’m not working, I’ll be crocheting or playing cozy games on Steam!
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