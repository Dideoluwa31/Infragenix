// components/VisionMissionMandate.js
import { Stethoscope, Activity, Hospital, Download } from "lucide-react";

export default function VisionMissionMandate() {
  const items = [
    {
      icon: <Stethoscope className="w-12 h-12 text-green-600" />,
      title: "Our Vision",
      text: "At Infragenix Nigeria Limited, our vision is to become Africa’s leading integrated solu ons provider, revolu onizing how technology, human capital, construc on, and infrastructure intersect to build a smarter, more efficient, and inclusive future",
    },
    {
      icon: <Activity className="w-12 h-12 text-purple-600" />,
      title: "Our Mission",
      text: "At Infragenix Nigeria Limited, our mission is to deliver innova ve, high impact, and technology driven solutions that empower organiza ons, communi es, and individuals to thrive in an increasingly complex and interconnected world.",
    },
    {
      icon: <Hospital className="w-12 h-12 text-blue-600" />,
      title: "Our Mandate",
      text: "At Infragenix Nigeria Limited, we pride ourselves on being a mul sectoral solutions   provider, delivering top er  services tailored to meet the evolving needs of governments, businesses, and communites.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-teal-50 to-[#1f888d]">
      <div className="max-w-7xl mx-auto px-12 md:px-12 lg:px-20">
        {/* Centered Grid */}
        <div className="grid gap-12 md:grid-cols-3 text-center justify-items-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center max-w-sm">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#1f888d] mb-4">
                {item.title}
              </h3>
              <p className="text-black leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        
        <div className="mt-12 flex justify-center">
  <a
    href="/companyprofile/INFRAGENIX COMPANY PROFILE.pdf" 
    download
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white
               bg-white/20 backdrop-blur-md
               border border-[#1f888d] 
               shadow-lg hover:shadow-xl 
               hover:bg-white/30 
               transition-all duration-300 ease-in-out"
  >
    <Download className="w-5 h-5" />
    Download Company Profile
  </a>
</div>

      </div>
    </section>
  );
}
