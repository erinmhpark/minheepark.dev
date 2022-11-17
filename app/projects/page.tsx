import ProjectCard from "app/projectCard";
import cardGameImage from "public/cardGame.png";
import fizzBuzzImage from "public/fizzBuzz.png";
import guessMyNumberImage from "public/guessMyNumber.png";
import personWebsiteImage from "public/personalWebsite.png";
import roguelikeImage from "public/roguelike.png";

export default function Projects() {
  return (
    <div className="mt-20 flex flex-col gap-10">
      <ProjectCard
        title={"Personal Website"}
        content={"content to be added"}
        href={"https://curious-souffle-cb1a97.netlify.app"}
        img={personWebsiteImage}
      />
      <ProjectCard
        title={"Card Game"}
        content={"content to be added"}
        href={"https://serene-alfajores-370611.netlify.app/"}
        img={cardGameImage}
      />
      <ProjectCard
        title={"Guess My Number"}
        content={"content to be added"}
        href={"https://inquisitive-hotteok-a8a319.netlify.app"}
        img={guessMyNumberImage}
      />
      <ProjectCard
        title={"Roguelike"}
        content={"content to be added"}
        href={"https://github.com/erinmhpark/roguelike"}
        img={roguelikeImage}
      />
      <ProjectCard
        title={"FizzBuzz"}
        content={"content to be added"}
        href={"https://ornate-unicorn-ab2470.netlify.app"}
        img={fizzBuzzImage}
      />
    </div>
  );
}
