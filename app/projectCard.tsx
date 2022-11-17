import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  content,
  href,
  img,
}: ProjectCardProp) {
  return (
    <Link
      href={href}
      className="flex items-center gap-10 rounded-md bg-slate-100 p-4 transition duration-300 hover:bg-slate-200"
    >
      <Image
        className="rounded-full"
        src={img}
        alt="profile"
        width={80}
        height={80}
      />
      <div>
        <div className="font-bold">{title}</div>
        <div>{content}</div>
      </div>
    </Link>
  );
}

interface ProjectCardProp {
  title: string;
  content: string | JSX.Element;
  href: string;
  img: StaticImageData;
}
