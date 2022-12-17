import ProjectCard from "app/projectCard";
import cardGameImage from "public/cardGame.png";
import guessMyNumberImage from "public/guessMyNumber.png";
import imageConverter from "public/imageConverter.png";
import personWebsiteImage from "public/personalWebsite.png";
import roguelikeImage from "public/roguelike.png";
import tldrQandAImage from "public/tldrQandAImage.png";

export default function Projects() {
  return (
    <div className="mt-4 flex flex-col gap-6 sm:mt-20">
      <h2 className="font-semibold">Portfolio</h2>
      {projects.map((project) => (
        <ProjectCard
          key={project.href}
          title={project.title}
          content={project.content}
          href={project.href}
          img={project.img}
          buildDate={project.buildDate}
        />
      ))}
    </div>
  );
}

const projects = [
  {
    title: "TL;DR Summarize this + Q&A",
    content: (
      <>
        The app provides quick TL;DR summaries and answers to questions for easy
        knowledge access. Powered by{" "}
        <span className="text-cyan-800">
          OpenAI, JavaScript, Next.js & Tailwind CSS
        </span>
      </>
    ),
    href: "https://tldr-summarize-this.vercel.app/",
    img: tldrQandAImage,
    buildDate: "November 2022",
  },
  {
    title: "Image Converter",
    content: (
      <>
        This Image Convertor allows users to upload image files from their
        desktop/laptop, and then convert the image(s) to various formats. Built
        with <span className="text-cyan-800">Java and JavaFX</span>
      </>
    ),
    href: "https://github.com/erinmhpark/INFO5100_002743228_MinheePark/tree/main/imageManagementTool_FinalProject",
    img: imageConverter,
    buildDate: "November 2022",
  },
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
    href: "https://minheepark-dev.vercel.app/",
    img: personWebsiteImage,
    buildDate: "November 2022",
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
    buildDate: "October, 2022",
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
    buildDate: "October 2022",
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
    buildDate: "June 2021",
  },
];
