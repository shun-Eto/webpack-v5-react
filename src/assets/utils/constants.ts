import { ListElementType } from "~@types/component";

export const drawerMenuItems: {
  first: ListElementType<string>[];
  second: ListElementType<string>[];
} = {
  first: [
    {
      id: "home",
      value: "home",
      label: { jp: "ホーム", en: "Home" },
      faIcon: ["fas", "home"]
    },
    {
      id: "page1",
      value: "page1",
      label: { jp: "ページ１", en: "Page１" },
      faIcon: ["fas", "file-alt"]
    }
  ],
  second: [
    {
      id: "account",
      value: "account",
      label: { jp: "アカウント", en: "Account" },
      faIcon: ["fas", "user-cog"]
    },
    {
      id: "setting",
      value: "setting",
      label: { jp: "設定", en: "Setting" },
      faIcon: ["fas", "cog"]
    }
  ]
};
