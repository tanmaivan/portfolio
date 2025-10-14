import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

// Data-engineering focused skills. If you add logo files later, put them under
// /public/skills/<file>.png and set the "logo" field accordingly. For now, we
// render placeholders using the "abbr" field.
const skills = [
  // Languages
  {
    name: "Python",
    abbr: "Py",
    category: "languages",
    proficiency: "Proficient",
    logo: "/public/skills/languages/python.png",
  },
  {
    name: "SQL",
    abbr: "SQL",
    category: "languages",
    proficiency: "Proficient",
    logo: "/public/skills/languages/sql.png",
  },
  {
    name: "C++",
    abbr: "C++",
    category: "languages",
    proficiency: "Proficient",
    logo: "/public/skills/languages/cpp.png",
  },
  {
    name: "JavaScript",
    abbr: "JS",
    category: "languages",
    proficiency: "Proficient",
    logo: "/public/skills/languages/js.png",
  },
  // Batch Processing
  {
    name: "Apache Spark",
    abbr: "Sp",
    category: "processing",
    proficiency: "Proficient",
    logo: "/public/skills/processing/spark.png",
  },
  // {
  //   name: "Databricks",
  //   abbr: "Db",
  //   category: "processing",
  //   proficiency: "Competent",
  //   logo: "/public/skills/processing/databricks.png",
  // },
  {
    name: "dbt",
    abbr: "dbt",
    category: "processing",
    proficiency: "Competent",
    logo: "/public/skills/processing/dbt.png",
  },
  // Streaming Processing
  // {
  //   name: "Apache Kafka",
  //   abbr: "Kf",
  //   category: "processing",
  //   proficiency: "Competent",
  //   logo: "/public/skills/processing/kafka.png",
  // },

  // Orchestration
  // {
  //   name: "Apache Airflow",
  //   abbr: "Af",
  //   category: "orchestration",
  //   proficiency: "Competent",
  //   logo: "/public/skills/orchestration/airflow.png",
  // },
  {
    name: "Prefect",
    abbr: "Pf",
    category: "orchestration",
    proficiency: "Competent",
    logo: "/public/skills/orchestration/prefect.png",
  },
  // {
  //   name: "dagster",
  //   abbr: "Dg",
  //   category: "orchestration",
  //   proficiency: "Competent",
  //   logo: "/public/skills/orchestration/dagster.png",
  // },
  // Databases & Warehouses
  {
    name: "PostgreSQL",
    abbr: "PG",
    category: "databases",
    proficiency: "Competent",
    logo: "/public/skills/databases/postgresql.png",
  },
  {
    name: "MySQL",
    abbr: "My",
    category: "databases",
    proficiency: "Competent",
    logo: "/public/skills/databases/mysql.png",
  },
  {
    name: "MongoDB",
    abbr: "Mg",
    category: "databases",
    proficiency: "Basic",
    logo: "/public/skills/databases/mongodb.png",
  },
  {
    name: "Snowflake",
    abbr: "Sn",
    category: "databases",
    proficiency: "Basic",
    logo: "/public/skills/databases/snowflake.png",
  },
  {
    name: "BigQuery",
    abbr: "BQ",
    category: "databases",
    proficiency: "Competent",
    logo: "/public/skills/databases/bigquery.png",
  },

  // Cloud & Storage
  // {
  //   name: "AWS",
  //   abbr: "AWS",
  //   category: "cloud",
  //   proficiency: "Competent",
  //   logo: "/public/skills/cloud/aws.png",
  // },
  {
    name: "GCP",
    abbr: "GCP",
    category: "cloud",
    proficiency: "Competent",
    logo: "/public/skills/cloud/gcp.png",
  },
  {
    name: "AWS",
    abbr: "AWS",
    category: "cloud",
    proficiency: "Competent",
    logo: "/public/skills/cloud/aws.png",
  },
  {
    name: "Terraform",
    abbr: "Tf",
    category: "cloud",
    proficiency: "Competent",
    logo: "/public/skills/cloud/terraform.png",
  },
  // Visualization
  {
    name: "Looker Studio",
    abbr: "Lk",
    category: "visualization",
    proficiency: "Basic",
    logo: "/public/skills/visualization/looker.png",
  },
  // DevEx & Tooling
  {
    name: "Docker",
    abbr: "Dk",
    category: "tools",
    proficiency: "Competent",
    logo: "/public/skills/tools/docker.png",
  },
  {
    name: "Git / GitHub",
    abbr: "Git",
    category: "tools",
    proficiency: "Proficient",
    logo: "/public/skills/tools/git.png",
  },
  {
    name: "Linux",
    abbr: "Ln",
    category: "tools",
    proficiency: "Competent",
    logo: "/public/skills/tools/linux.png",
  },
  {
    name: "VS Code",
    abbr: "VS",
    category: "tools",
    proficiency: "Proficient",
    logo: "/public/skills/tools/vscode.png",
  },
  {
    name: "Notion",
    abbr: "No",
    category: "tools",
    proficiency: "Proficient",
    logo: "/public/skills/tools/notion.png",
  },
];

const categories = [
  "all",
  "languages",
  "processing",
  "orchestration",
  "databases",
  "cloud",
  "visualization",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const proficiencyGroups = ["Proficient", "Competent", "Basic"];
  return (
    <section
      id="skills"
      className="py-10 px-0 sm:px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-rainbow"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full transition-colors duration-300 capitalize text-sm sm:text-base",
                activeCategory === category
                  ? "btn-rainbow"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {proficiencyGroups.map((group) => {
          const groupSkills = filteredSkills.filter(
            (s) => (s.proficiency || "Competent") === group
          );
          if (groupSkills.length === 0) return null;
          return (
            <div key={group} className="mb-12 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-border flex-1" />
                <span className="text-2xl font-semibold text-rainbow">
                  {group}
                </span>
                <div className="h-px bg-border flex-1" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 place-items-stretch">
                {groupSkills.map((skill, key) => (
                  <Reveal key={skill.name + key} delay={key * 25}>
                    <div className="theme-border rounded-xl p-4 shadow-xs card-hover flex flex-col items-center justify-between h-full bg-secondary/60">
                      <div className="flex items-center justify-center h-16 w-16 rounded-md overflow-hidden">
                        {skill.logo ? (
                          <img
                            src={
                              skill.logo.startsWith("http") ||
                              skill.logo.startsWith("/")
                                ? skill.logo.replace("/public", "")
                                : `/skills/${skill.logo}`
                            }
                            alt={skill.name}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center border border-border bg-secondary/50 rounded-md">
                            <span className="text-sm font-semibold text-foreground/80">
                              {skill.abbr}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="mt-3 text-center flex-grow flex items-center justify-center">
                        <h4 className="font-medium text-sm sm:text-base">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
