import ProjectsWrapper from "@/components/Project/ProjectsWrapper";

const Home = () => {
  return (
    <div className="overflow-hidden flex flex-col h-[calc(100vh-var(--header-height))]">
      <div className="relative h-auto">
        <ProjectsWrapper />
      </div>
    </div>
  );
};

export default Home;
