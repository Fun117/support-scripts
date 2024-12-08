import ProjectMainContent from "@/components/project/maincontent";
import ProjectNavContent from "@/components/project/navcontent";
import ProjectSideContent from "@/components/project/sidecontent";
import ProjectTopContent from "@/components/project/topcontent";
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
        <ProjectNavContent nowItem="description" items={navItems} />
      </Suspense>
      <div className="flex flex-col-reverse lg:!flex-row items-start gap-2 container max-w-[1324px] p-5 mx-auto">
        <Suspense>
          <ProjectMainContent />
        </Suspense>
        <Suspense>
          <ProjectSideContent />
        </Suspense>
      </div>
    </div>
  );
}
