
import MyProjects from "./components/MyProjects";
import MyExperience from "./components/MyExperience";
// import MyBlog from "./components/MyBlog";
import LeftNav from "./components/LeftNav";

import MyProfile from "./components/MyProfile";
import TopNav from "./components/TopNav";
export default function Home() {


  return (
    <div className="flex flex-col bg-white items-center justify-items-center min-h-screen p-8 w-full ">
       <TopNav />
      <div className="lg:h-screen">
       

        <MyProfile />
      </div>

      {/* Begin Content */}
      <div className="flex flex-col lg:flex-row w-full  justify-center">
        <div className="w-1/3 sticky top-20 h-full hidden lg:block">
          <LeftNav />
        </div>


        <div className="flex flex-col w-full lg:w-2/3">


          <section id="projects" className="mb-20">
            <MyProjects />
          </section >

          <section id="experience" className="mb-20">
            <MyExperience />
          </section >
          {/* <section id="blog" className="mb-20">
            <MyBlog />
          </section > */}
        </div>
      </div>

    </div>
  );
}
