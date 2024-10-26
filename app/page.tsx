import Image from "next/image";
import MyProjects from "./components/MyProjects";
import MyExperience from "./components/MyExperience";
import MyBlog from "./components/MyBlog";
import LeftNav from "./components/LeftNav";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 w-full ">
      <div className="flex flex-row justify-start w-full">
a10ra
      </div>
      <div
        id="about"
        className="flex flex-row w-full h-screen items-center justify-center ">
        <div
          className="w-1/3">
          Image here
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
        </div>
      </div>
      {/* Begin Content */}
      <div className="flex flex-row w-full  justify-center">
        <div className="w-1/3 sticky top-20 h-full">
          <LeftNav />
        </div>


        <div className="flex flex-col w-2/3">
          <section id="projects" className="mb-20">
            <MyProjects />
          </section >
          <section  id="experience" className="mb-20">
            <MyExperience />
          </section >
          <section  id="blog" className="mb-20">
            <MyBlog />
          </section >
        </div>
      </div>

    </div>
  );
}
