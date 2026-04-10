import { Badge } from "@/components/ui/badge";

const stats = [
  {
    percentage: "+1200",
    title: "Stars on GitHub",
    description: "Layered UI has gained significant traction in the developer community with over 1200 stars, reflecting strong adoption and community support.",
  },
  {
    percentage: "56%",
    title: "Conversion rate",
    description: "Our platform delivers exceptional results with a 56% conversion rate, helping businesses maximize their growth potential.",
  },
  {
    percentage: "+500",
    title: "Powered Apps",
    description: "Layered UI powers over 500 applications, enabling developers and businesses to innovate and scale their solutions.",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            </div>
            
            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">Layered UI in numbers</span>
            </Badge>
            
            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4">
            The numbers that define our success
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl px-4">
            Layered UI is evolving to be more than just the models. It supports an entire ecosystem of APIs and platforms helping developers and businesses innovate.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-card rounded-3xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Percentage */}
              <div className="text-4xl sm:text-5xl font-normal text-primary mb-20">
                {stat.percentage}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-normal text-foreground mb-3">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;