import { BlurIn } from "@/components/ui/blur-in"

const Footer = () => {
  const footerSections = [
    {
      title: "Features",
      links: ["Latency", "Privacy", "Multimodal", "Adaptive learning"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Brand"],
    },
    {
      title: "Resources",
      links: ["Docs", "Privacy", "Terms", "Status"],
    },
    {
      title: "Connect",
      links: ["Discord", "X (Twitter)", "Hugging Face", "YouTube"],
    },
  ]

  return (
    <footer className="py-16 px-4 md:px-8 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Brand Name */}
          <div className="w-full">
            <BlurIn as="h2" className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Layered UI
            </BlurIn>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col gap-4 min-w-[120px]">
                  <h3 className="text-foreground text-sm font-semibold">{section.title}</h3>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer