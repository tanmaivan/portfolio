import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  {
    id: 2,
    title: "Geo Weather Lake",
    description:
      "A comprehensive Data Lakehouse on Docker implementing the Medallion Architecture. It automates the ingestion of historical and real-time weather data into MinIO (Delta Lake), transforms it via dbt into a Star Schema powered by DuckDB, and visualizes geospatial insights in Metabase.",
    image: "/projects/project2-geo-weather-lake.png",
    tags: [
      "Docker",
      "Airflow",
      "dbt",
      "DuckDB",
      "Delta Lake",
      "MinIO",
      "Metabase",
      "Python",
    ],
    githubUrl: "https://github.com/tanmaivan/geo-weather-lake",
  },
];

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeLightbox = (e) => {
    if (!e || e.target === e.currentTarget) {
      setLightboxVisible(false);
      setTimeout(() => setSelectedImage(null), 200);
    }
  };

  useEffect(() => {
    if (selectedImage) {
      // Trigger enter animation on next tick
      const id = setTimeout(() => setLightboxVisible(true), 0);
      return () => clearTimeout(id);
    } else {
      setLightboxVisible(false);
    }
  }, [selectedImage]);

  return (
    <section id="projects" className="py-10 px-0 sm:px-4 relative">
      <div className="container mx-auto max-w-5xl px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Featured <span className="text-rainbow">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, key) => (
            <Reveal key={key} delay={key * 80}>
              <div className="group theme-border rounded-xl overflow-hidden shadow-xs card-hover bg-secondary/60">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <button
                    type="button"
                    className="lg:w-1/3 h-48 sm:h-64 lg:h-auto overflow-hidden bg-secondary/20 flex items-center justify-center cursor-zoom-in focus:outline-none p-4 sm:p-6"
                    onClick={() => setSelectedImage(project.image)}
                    aria-label={`Open image preview for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>

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
                    <div className="mt-2 flex justify-end">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
                        title="View Code"
                        aria-label="View project source code on GitHub"
                      >
                        <span>View Code</span>
                        <ExternalLink size={16} />
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

      {selectedImage &&
        createPortal(
          <div
            className={`fixed inset-0 w-screen h-screen z-[99999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-200 ease-out ${
              lightboxVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <img
              src={selectedImage}
              alt="Project preview"
              onClick={(e) => e.stopPropagation()}
              className={`block max-h-[85vh] max-w-[95vw] object-contain transition-all duration-200 ease-out ${
                lightboxVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          </div>,
          document.body
        )}
    </section>
  );
};
