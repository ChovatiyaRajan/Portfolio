import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">Get In Touch</h1>
        <p className="text-base sm:text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Here’s how you can reach me or explore more about what I do.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
        {[
          {
            icon: <Mail className="text-black w-6 h-6 shrink-0" />,
            label: "chovatiyarajan237@gmail.com",
          },
          {
            icon: <Phone className="text-black w-6 h-6 shrink-0" />,
            label: "+91 6351245423",
          },
          {
            icon: <MapPin className="text-black w-6 h-6 shrink-0" />,
            label: "Rajkot, Gujarat, India",
          },
          {
            icon: <Linkedin className="text-blue-600 w-6 h-6 shrink-0" />,
            label: "linkedin.com/in/rajan-chovatiya",
            href: "https://www.linkedin.com/in/rajan-chovatiya-a451a72aa/",
          },
          {
            icon: <Github className="text-black w-6 h-6 shrink-0" />,
            label: "github.com/rajan-dev",
            href: "https://github.com/your-username",
          },
          {
            icon: <Globe className="text-black w-6 h-6 shrink-0" />,
            label: "www.rajanportfolio.com",
            href: "https://rajanportfolio-site.vercel.app/",
          },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
            {item.icon}
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-blue-600 hover:underline break-all"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-base sm:text-lg font-medium break-all">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
