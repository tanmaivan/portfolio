import { ArrowRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    id: 1,
    title: "Hacker News Analytics Platform",
    description:
      "An end-to-end ELT pipeline on GCP that ingests Hacker News data, transforms it with dbt into a Star Schema in BigQuery, and serves insights via a Looker Studio dashboard. The entire platform is automated with Prefect and managed as code with Terraform.",
    image: "/projects/project1-hackernews.png",
    tags: ["GCP", "BigQuery", "Terraform", "dbt", "Prefect", "Python", "SQL"],
    githubUrl: "https://github.com/tanmaivan/hackernews-pipeline",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 px-0 sm:px-4 relative">
      <div className="container mx-auto max-w-5xl px-4 sm:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-rainbow"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="space-y-8">
          {projects.map((project, key) => (
            <Reveal key={key} delay={key * 80}>
              <div className="group theme-border rounded-xl overflow-hidden shadow-xs card-hover bg-secondary/60">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-1/3 h-48 sm:h-64 lg:h-auto overflow-hidden bg-secondary/20 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3 p-4 sm:p-6 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground reveal"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex justify-end">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="btn-rainbow w-fit inline-flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tanmaivan"
            aria-label="Check my GitHub"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
