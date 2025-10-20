import { Reveal } from "./Reveal";

export const AchievementsSection = () => {
  const achievements = [
    {
      title:
        "Academic Encouragement Scholarship – University of Information Technology, VNUHCM",
      subtitle: "Awarded for Excellent Academic Performance",
      bullets: [
        "Semester 2, Academic Year 2022–2023",
        "Semester 1, Academic Year 2023–2024",
        "Semester 1, Academic Year 2024–2025",
      ],
    },
    {
      title:
        "Student of Five Merits – University of Information Technology, VNUHCM",
      subtitle:
        "Recognized for excellence in Ethics, Academic Accomplishment, Physical Fitness, Voluntary Activities, and Integration",
      bullets: ["Academic Year 2022–2023", "Academic Year 2023–2024"],
    },
  ];

  return (
    <section id="achievements" className="py-10 px-0 sm:px-4 relative">
      <div className="container mx-auto max-w-5xl px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          <span className="text-rainbow">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {achievements.map((ach, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="theme-border rounded-xl p-4 sm:p-6 shadow-xs card-hover text-left bg-secondary/60">
                <h4 className="text-base sm:text-lg font-semibold leading-tight">
                  {ach.title}
                </h4>
                {ach.subtitle && (
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    {ach.subtitle}
                  </p>
                )}
                {ach.bullets?.length > 0 && (
                  <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground mt-3 space-y-1">
                    {ach.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
