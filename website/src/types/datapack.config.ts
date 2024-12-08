export type DataPackReleaseChannelProps =
  | "release"
  | "pre-release"
  | "beta"
  | "alpha";
export type DataPackReleaseProps = {
  version_id: string;
  title: string;
  i18n_title: boolean;
  created_at: string;
  updated_at: string;
  release_channel: DataPackReleaseChannelProps;
  game_edition: "java" | "bedrock";
  game_versions: string[];
  file: {
    label: string;
    filename: string;
  };
};
export interface DataPackConfigProps {
  created_at: string;
  license: {
    label: string;
    link: string;
  };
  members: {
    avatar: string;
    username: string;
    role: "owner" | "developer" | string;
    website: string;
  }[];
  release: DataPackReleaseProps[];
}
