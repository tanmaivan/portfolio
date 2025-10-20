import { Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-10 px-0 sm:px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          About <span className="text-rainbow"> Me</span>
        </h2>

        <div className="space-y-8 sm:space-y-10">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed">
              I'm a recent Computer Science graduate from VNU-HCM University of
              Information Technology (VNUHCM-UIT). I’m building a strong
              foundation in data engineering, cloud platforms, and distributed
              systems.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed">
              My work and learning focus on developing reliable data pipelines,
              managing large-scale datasets, and understanding how modern data
              infrastructures operate in production environments.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed">
              I’m exploring modern data engineering practices and technologies
              to design end-to-end workflows that efficiently transform and
              deliver data for analytics and decision-making. I aim to build
              scalable, maintainable data systems that bridge engineering and
              business impact.
            </p>

            {/* Cards moved below content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">
              <div className="theme-border rounded-xl p-4 sm:p-6 card-hover transition-shadow bg-secondary/60 shadow-sm">
                <div className="text-center">
                  <h4 className="font-semibold text-base sm:text-lg text-rainbow">
                    Data Engineering
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Designing and orchestrating reliable data pipelines at
                    scale.
                  </p>
                </div>
              </div>
              <div className="theme-border rounded-xl p-4 sm:p-6 card-hover transition-shadow bg-secondary/60 shadow-sm">
                <div className="text-center">
                  <h4 className="font-semibold text-base sm:text-lg text-rainbow">
                    Continuous Learning
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Growing through real-world practice and experimentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
