import ProjectCard from "app/projectCard";
import Image from "next/image";
import cardGameImage from "public/cardGame.png";
import personWebsiteImage from "public/personalWebsite.png";
import profilePic from "public/profile.png";

export default function Home() {
  return (
    <div className="mt-20 flex flex-col gap-7 ">
      <div className="flex flex-row gap-10">
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
          content={"Created with Next.js, TypeScript, & Tailwind CSS"}
          href={"https://thriving-paprenjak-1a594f.netlify.app/index.html"}
          img={personWebsiteImage}
        />
        <ProjectCard
          title={"Card Game"}
          content={"content to be added"}
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
