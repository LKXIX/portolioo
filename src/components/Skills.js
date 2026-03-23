import { motion } from "framer-motion";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "SEO", category: "Marketing" },
  { name: "AEO", category: "Marketing" },
  { name: "IT Security", category: "Security" },
  { name: "Git / GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Sanity CMS", category: "Tools" },
];

const SkillTag = ({ name, index }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="inline-flex items-center px-4 py-2 rounded-lg border border-solid border-dark/20 dark:border-light/20
      bg-light dark:bg-dark text-dark dark:text-light font-medium text-sm cursor-default
      hover:border-primary dark:hover:border-primaryDark hover:text-primary dark:hover:text-primaryDark
      transition-colors duration-200"
  >
    {name}
  </motion.span>
);

const Skills = () => (
  <>
    <h2 className="font-bold mb-8 text-8xl mt-32 w-full text-center md:text-6xl md:mt-24 xs:text-4xl">
      Skills
    </h2>
    <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto mb-32 md:mb-24">
      {skills.map((skill, i) => (
        <SkillTag key={skill.name} name={skill.name} index={i} />
      ))}
    </div>
  </>
);

export default Skills;
