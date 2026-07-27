"use client";

import { LazyMotion, m } from "framer-motion";
import { HiPhone, HiEnvelope, HiMapPin } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: HiPhone,
      title: "Call Us",
      details: [
        <a key="1" href="tel:040-23156400" className="hover:text-primary transition-colors">040-23156400</a>,
        <span key="2">
          <a href="tel:7675043138" className="hover:text-primary transition-colors">7675043138</a>,{" "}
          <a href="tel:7675043139" className="hover:text-primary transition-colors">7675043139</a>
        </span>,
        <span key="3">
          <a href="tel:7675043140" className="hover:text-primary transition-colors">7675043140</a>,{" "}
          <a href="tel:7675043141" className="hover:text-primary transition-colors">7675043141</a>
        </span>
      ],
      color: "primary",
    },
    {
      icon: HiEnvelope,
      title: "Email Us",
      details: ["sales@petrolabsindia.com"],
      link: "mailto:sales@petrolabsindia.com",
      color: "secondary",
    },
    {
      icon: HiMapPin,
      title: "Visit Us",
      details: [
        "Building No.: 5, Durga Shakthi Peetam Colony,",
        "5-35 / P-27 & 28 P, Prashanti Nagar, Mythri Nagar,",
        "Kukatpally, Hyderabad, Telangana 500072",
      ],
      link: "#map",
      color: "accent1",
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary/10",
      icon: "text-primary",
      border: "border-primary/20",
      hover: "hover:border-primary hover:shadow-primary/20",
    },
    secondary: {
      bg: "bg-secondary/10",
      icon: "text-secondary",
      border: "border-secondary/20",
      hover: "hover:border-secondary hover:shadow-secondary/20",
    },
    accent1: {
      bg: "bg-accent1/10",
      icon: "text-accent1",
      border: "border-accent1/20",
      hover: "hover:border-accent1 hover:shadow-accent1/20",
    },
    accent2: {
      bg: "bg-accent2/10",
      icon: "text-accent2",
      border: "border-accent2/20",
      hover: "hover:border-accent2 hover:shadow-accent2/20",
    },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="container mx-auto px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const colors = colorClasses[method.color];
            const Component = method.link ? "a" : "div";

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Component
                  href={method.link}
                  className={`block bg-white rounded-2xl p-6 shadow-lg border-2 ${
                    colors.border
                  } ${colors.hover} hover:shadow-xl transition-all h-full ${
                    method.link ? "cursor-pointer" : ""
                  }`}
                >
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <div className="space-y-1">
                    {method.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 text-sm font-medium"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </Component>
              </m.div>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
