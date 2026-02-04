import React from "react";

const services = [
  {
    title: "Web Design",
    description:
      "We create beautiful and intuitive web designs that are a joy to use.",
  },
  {
    title: "Development",
    description:
      "Our development team builds fast, responsive, and scalable websites.",
  },
  {
    title: "Branding",
    description:
      "We help you create a strong brand identity that resonates with your audience.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-8 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
