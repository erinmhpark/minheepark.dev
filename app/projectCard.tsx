import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  content,
  href,
  img,
  buildDate,
}: ProjectCardProp) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
        <div className="font-bold">
          {title}
          <span className="pl-3 text-sm font-light text-gray-400">
            {" "}
            {buildDate}
          </span>
        </div>
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
  buildDate?: string;
}
