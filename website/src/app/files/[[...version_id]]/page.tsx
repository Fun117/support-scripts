import ProjectFilesPreviewContent from "@/components/project/filedescription";
import ProjectFilesContent from "@/components/project/filescontent";
import ProjectNavContent from "@/components/project/navcontent";
import ProjectSideContent from "@/components/project/sidecontent";
import ProjectTopContent from "@/components/project/topcontent";
import { Suspense } from "react";
import datapack from "../../../../datapack.config";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version_id: string }>;
}): Promise<Metadata> {
  const version_id = (await params).version_id;

  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Metadata" });

  // リリース情報を検索
  const release = version_id
    ? datapack.release.find((r) => r.version_id === version_id[0])
    : null;

  // 動的にメタデータを生成
  const title = release
    ? release.i18n_title
      ? t(release.title)
      : release.title || `File Details`
    : "Files";

  return {
    title: title,
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ version_id: string }>;
}) {
  const version_id = (await params).version_id;

  const release = version_id
    ? datapack.release.find((r) => r.version_id === version_id[0])
    : null;

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
        <ProjectNavContent nowItem="files" items={navItems} />
      </Suspense>
      <div className="flex flex-col-reverse lg:!flex-row items-start gap-2 container max-w-[1324px] p-5 mx-auto">
        <Suspense>
          {release ? (
            <ProjectFilesPreviewContent version_id={version_id} />
          ) : (
            <ProjectFilesContent />
          )}
        </Suspense>
        <Suspense>
          <ProjectSideContent />
        </Suspense>
      </div>
    </div>
  );
}
