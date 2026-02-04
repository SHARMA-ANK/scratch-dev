import React from "react";

const projects = [
  {
    image: "/awsmd.com/awsmd.com/img/portfolio-2.webp",
    title: "Project One",
    category: "Web Design",
  },
  {
    image: "/awsmd.com/awsmd.com/img/portfolio-4.webp",
    title: "Project Two",
    category: "Branding",
  },
  {
    image: "/awsmd.com/awsmd.com/img/portfolio-6.webp",
    title: "Project Three",
    category: "Development",
  },
];

const SelectedWork: React.FC = () => {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Selected Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
