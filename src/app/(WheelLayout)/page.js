import Header from "@/components/Header/Header";
import ProjectsWrapper from "@/components/Project/ProjectsWrapper";

const Home = () => {
  return (
    <div className="overflow-hidden fixed top-0 left-0 right-0">
      <Header />
      <div className="relative h-auto">
        <ProjectsWrapper />
      </div>
    </div>
  );
};

export default Home;
