import { DataPackConfigProps } from "@/types/datapack.config";

const datapack: DataPackConfigProps = {
  created_at: "2024-12-08",
  license: {
    label: "CC-BY-SA-4.0",
    link: "https://github.com/toakiryu/support-scripts/blob/main/LICENSE.txt",
  },
  members: [
    {
      avatar: "https://github.com/toakiryu.png",
      username: "ToaKiryu",
      role: "owner",
      website: "https://fun117.dev",
    },
  ],
  release: [
    {
      version_id: "je-1.21.2",
      title: "Support Scripts 1.21.2",
      i18n_title: false,
      created_at: "2024/12/8",
      updated_at: "2024/12/8",
      release_channel: "release",
      game_edition: "java",
      game_versions: ["1.21.2", "1.21.3"],
      file: {
        label: "Java Edition 1.21.2",
        filename: "je-1.21.2.zip",
      },
    },
    {
      version_id: "je-1.21",
      title: "Support Scripts 1.21",
      i18n_title: false,
      created_at: "2024/12/8",
      updated_at: "2024/12/8",
      release_channel: "release",
      game_edition: "java",
      game_versions: ["1.21", "1.21.1"],
      file: {
        label: "Java Edition 1.21",
        filename: "je-1.21.zip",
      },
    },
  ],
};

export default datapack;
