import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  content,
  href,
  img,
}: ProjectCardProp) {
  return (
    <Link href={href} className="flex items-center gap-10">
      <Image
        className="rounded-full"
        src={img}
        alt="profile"
        width={80}
        height={80}
      />
      <div>
        <div className="font-semibold">{title}</div>
        <div>{content}</div>
      </div>
    </Link>
  );
}

interface ProjectCardProp {
  title: string;
  content: string;
  href: string;
  img: StaticImageData;
}
