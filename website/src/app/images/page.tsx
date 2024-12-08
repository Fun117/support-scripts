import ProjectSideContent from "@/components/project/sidecontent";
import ProjectNavContent from "@/components/project/navcontent";
import ProjectTopContent from "@/components/project/topcontent";
import ProjectImagesContent from "@/components/project/imagescontent";
import { Suspense } from "react";

export default function Home() {
  const navItems = [
    {
      id: "description",
      href: "/",
    },
    {
      id: "files",
      href: "/files",
    },
    {
      id: "images",
      href: "/images",
    },
  ];
  return (
    <div className="relative flex min-h-[calc(100vh-80px)] flex-col justify-between items-center">
      <ProjectTopContent />
      <Suspense>
        <ProjectNavContent nowItem="images" items={navItems} />
      </Suspense>
      <div className="flex flex-col-reverse lg:!flex-row items-start gap-2 container max-w-[1324px] p-5 mx-auto">
        <Suspense>
          <ProjectImagesContent />
        </Suspense>
        <Suspense>
          <ProjectSideContent />
        </Suspense>
      </div>
    </div>
  );
}
