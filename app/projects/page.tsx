import ProjectCard from "app/projectCard";
import cardGameImage from "public/cardGame.png";
import fizzBuzzImage from "public/fizzBuzz.png";
import guessMyNumberImage from "public/guessMyNumber.png";
import personWebsiteImage from "public/personalWebsite.png";
import roguelikeImage from "public/roguelike.png";

export default function Projects() {
  return (
    <div className="mt-4 flex flex-col gap-6 sm:mt-20">
      {projects.map((project) => (
        <ProjectCard
          key={project.href}
          title={project.title}
          content={project.content}
          href={project.href}
          img={project.img}
        />
      ))}
    </div>
  );
}

const projects = [
  {
    title: "Personal Website",
    content: (
      <>
        Powered by{" "}
        <span className="text-cyan-800">
          Next.js server components, TypeScript, & Tailwind CSS
        </span>
      </>
    ),
    href: "https://curious-souffle-cb1a97.netlify.app",
    img: personWebsiteImage,
  },
  {
    title: "Card Game",
    content: (
      <>
        A memory card game to test your memorization skills, built with{" "}
        <span className="text-cyan-800">HTML, Javascript, & CSS</span>
      </>
    ),
    href: "https://serene-alfajores-370611.netlify.app/",
    img: cardGameImage,
  },
  {
    title: "Guess My Number",
    content: (
      <>
        Try to collect trophies by guessing a random number, built with{" "}
        <span className="text-cyan-800">HTML, Javascript, & CSS</span>
      </>
    ),
    href: "https://inquisitive-hotteok-a8a319.netlify.app",
    img: guessMyNumberImage,
  },
  {
    title: "Roguelike",
    content: (
      <>
        Dive into this fantasy rogue like adventure! Written in{" "}
        <span className="text-cyan-800">C++ & Windows API</span>
      </>
    ),
    href: "https://github.com/erinmhpark/roguelike",
    img: roguelikeImage,
  },
  {
    title: "FizzBuzz",
    content: (
      <>
        A word game to test your division skills, built with{" "}
        <span className="text-cyan-800">HTML, Javascript, & CSS</span>
      </>
    ),
    href: "https://ornate-unicorn-ab2470.netlify.app",
    img: fizzBuzzImage,
  },
];
