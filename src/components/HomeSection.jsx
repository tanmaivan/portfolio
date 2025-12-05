import { ArrowDown, Download } from "lucide-react";

export const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="w-full mx-4 sm:mx-6 lg:mx-8 xl:mx-auto xl:max-w-6xl z-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left space-y-6 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in block sm:inline">
                {" "}
                Hi, I'm
              </span>
              <span className="ml-0 sm:ml-2 opacity-0 animate-fade-in-delay-1 text-rainbow block sm:inline">
                Mai Văn Tân
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I focus on building and learning data systems that handle
              large-scale information efficiently. My interest lies in data
              engineering and big data technologies - turning raw data into
              useful, structured insights.
            </p>

            {/* <div className="pt-2 opacity-0 animate-fade-in-delay-4">
              <a
                href="/resume.pdf"
                download
                className="btn-rainbow inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </a>
            </div> */}
          </div>

          {/* Personal Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="/profile/profile.jpg"
              alt="Profile"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-xl border border-border shadow-md transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
