import ProjectCard from "app/projectCard";
import Image from "next/image";
import cardGameImage from "public/cardGame.png";
import personWebsiteImage from "public/personalWebsite.png";
import profilePic from "public/profile.png";

export default function Home() {
  return (
    <div className="mt-4 flex flex-col gap-7 sm:mt-20 ">
      <div className="flex flex-col items-center gap-10 sm:flex-row">
        <div className="flex flex-col place-content-center gap-2 p-4">
          <ProfileTitle />
          <ProfileContent />
        </div>
        <Image src={profilePic} alt="profile" width={210} height={210} />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <ProjectTitle />
        <ProjectCard
          title={"Personal Website"}
          content={
            <>
              Powered by{" "}
              <span className="text-cyan-800">
                Next.js server components, TypeScript, & Tailwind CSS
              </span>
            </>
          }
          href={"https://thriving-paprenjak-1a594f.netlify.app/index.html"}
          img={personWebsiteImage}
        />
        <ProjectCard
          title={"Card Game"}
          content={
            <>
              A memory card game to test your memorization skills, built with{" "}
              <span className="text-cyan-800">HTML, Javascript, & CSS</span>
            </>
          }
          href={"https://serene-alfajores-370611.netlify.app/"}
          img={cardGameImage}
        />
      </div>
    </div>
  );
}

function ProfileTitle() {
  return <h1 className="text-2xl font-semibold">Hi, I&apos;m Minhee. ☕️</h1>;
}

function ProfileContent() {
  return (
    <>
      <p>I am a software engineer based in San Francisco.</p>
      <p>
        Currently, I&apos;m pursuing a master&apos;s in Information Systems at
        Northeastern.
      </p>
    </>
  );
}

function ProjectTitle() {
  return <h2 className="text-lg font-semibold">Projects</h2>;
}
