import { Reveal } from "./Reveal";

export const EducationSection = () => {
  const education = [
    {
      school:
        "Vietnam National University HCMC - University of Information Technology",
      degree: "B.S. in Computer Science",
      time: "2022 - 2025",
      details: "GPA: 8.85 / 10",
      logo: "/profile/uit.png",
    },
  ];

  return (
    <section
      id="education"
      className="py-10 px-0 sm:px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          <span className="text-rainbow">Education</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {education.map((edu, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="theme-border rounded-xl p-4 sm:p-6 shadow-xs card-hover text-left bg-secondary/60">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  {/* School Logo */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg bg-white/10 p-2 sm:p-3"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>

                  {/* School Info */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h4 className="text-base sm:text-lg font-semibold leading-tight">
                      {edu.school}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">
                      {edu.degree}, {edu.time}
                    </p>
                    {edu.details && (
                      <p className="text-sm sm:text-base text-muted-foreground mt-2">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
