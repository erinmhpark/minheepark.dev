import Image from "next/image";
import profilePic from "public/profile.png";

export default function Home() {
  return (
    <div className="mt-20 flex flex-col gap-2 border-2 border-solid border-blue-700 p-2">
      <div className="flex flex-row border-2 border-solid border-blue-500">
        <div className="flex flex-col place-content-center gap-2 p-4">
          <ProfileTitle />
          <ProfileContent />
        </div>
        <Image src={profilePic} alt="profile" width={210} height={210} />
      </div>
      <div className="gap-2 border-2 border-solid border-blue-500 p-4">
        <ProjectTitle />
        <LandingProjects />
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

function LandingProjects() {
  return <div>More Content Here</div>;
}
