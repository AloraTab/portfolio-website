"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const MyProfile = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: {duration: 1} }}
            
            >
            <div
                id="about"
                className="flex flex-row w-full my-20 items-center justify-center ">
                <div className="relative flex w-1/3 flex-col md:flex-row items-center p-6 md:p-10 rounded-lg max-w-4xl">

                    <div className="absolute -left-2 -top-2 w-[321px] h-[321px] bg-[#0E79B2] bg-opacity-50"></div>

                    {/* <Image src={'/img/professional-shot.png'} width={321} height={321} alt={""} className="relative left-[40px]"
                        style={{ zIndex: '99' }} /> */}
                    <div className="relative w-[321px] h-[321px] mb-6 md:mb-0 md:mr-8 z-10">
                        <Image
                            src={'/img/professional-shot.svg'} 
                            alt="Profile Picture"
                            width={321}
                            height={321}
                        />
                    </div>
                    {/* <div className="bg-[#0E79B2] w-[321px] h-[321px] bg-opacity-50" style={{ zIndex: '50' }}></div> */}
                </div>
                <div
                    className="w-2/3 flex flex-col">
                    <p className="text-6xl">Hello!</p>
                    <b className="text-xl">My name is Alora Tabuco.</b>
                    <p className="text-xl">
                        <br /><br />
                        I’m currently working as a AI/ML Software Engineer  at DevelopL.
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