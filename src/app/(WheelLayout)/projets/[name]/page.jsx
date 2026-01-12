import Content from "@/components/Project/page/Content";
import projects from "@/lib/projects";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.name;
  const project = projects.find((p) => p.href === slug);

  if (!project) {
    return { title: "Projet Introuvable" };
  }

  const title = `${project.label} - ${project.type} ${project.technologies}`;

  return {
    title: title,

    description: project.description,
  };
}

const page = () => {
  return (
    <>
      <Content />
    </>
  );
};
export default page;
