import { Project } from "@/components/project";
import DefaultLayout from "@/layouts/default";
import { ProjectType } from "@/types";
import { ProjectList } from "@/utils/projectList";

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <div>
        <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
          <div className="flex flex-col gap-20">
            {ProjectList.map((project: ProjectType) => (
              <Project key={`project-item-${project.title}`} {...project} />
            ))}
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
