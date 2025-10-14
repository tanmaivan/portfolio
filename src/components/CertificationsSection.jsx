import { Reveal } from "./Reveal";
import { ExternalLink } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "TOEIC Listening & Reading – 895 / 990",
      issuer: "IIG Vietnam (ETS TOEIC)",
      year: "2025",
      details: "Listening: 430 | Reading: 465",
    },
    {
      name: "TOEIC Speaking & Writing – 330 / 400",
      issuer: "IIG Vietnam (ETS TOEIC)",
      year: "2025",
      details: "Speaking: 160 | Writing: 170",
    },
    {
      name: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
      year: "2025",
      verificationUrl:
        "https://www.hackerrank.com/certificates/iframe/9cdaae752111",
    },
    {
      name: "Problem Solving Using Computational Thinking",
      issuer: "Coursera",
      year: "2024",
      verificationUrl:
        "https://coursera.org/share/4a61fb642695a00f63f7fc0217775a93",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-10 px-0 sm:px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          <span className="text-rainbow">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="theme-border rounded-xl p-4 sm:p-6 shadow-xs card-hover text-left bg-secondary/60 flex flex-col h-full">
                <div className="flex-grow">
                  <h4 className="text-base sm:text-lg font-semibold leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    {cert.issuer}, {cert.year}
                  </p>
                  {cert.details && (
                    <p className="text-sm sm:text-base text-muted-foreground mt-2">
                      {cert.details}
                    </p>
                  )}
                </div>
                {cert.verificationUrl && (
                  <div className="mt-4 flex justify-end">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
                      title="Verify Certificate"
                    >
                      <span>Verify</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
