import { cn } from "@/lib/utils";
import { DataPackReleaseChannelProps } from "@/types/datapack.config";

export function ReleaseChannelBadge({
  label,
  type,
  className,
}: {
  label: string;
  type: DataPackReleaseChannelProps;
  className?: string;
}) {
  return (
    <span
      className={cn(
        `flex justify-center items-center text-center font-bold w-8 h-8 rounded uppercase ${
          type === "release"
            ? "bg-[var(--mc-vanilla-green-4)]"
            : type === "pre-release"
            ? "bg-[var(--orange-dungeons-04)]"
            : type === "beta"
            ? "bg-[var(--mc-realms-deep-blue-2)]"
            : "bg-[var(--mc-realms-pink-3)]"
        }`,
        className
      )}
    >
      {label}
    </span>
  );
}
