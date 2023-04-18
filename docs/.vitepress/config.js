import { defineConfig } from "vitepress";

export default defineConfig({
  title: "信管求生指南",
  description: "信管专业学习资料推荐和经验分享",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],

    sidebar: [
      {
        text: "资料清单",
        items: [
          {
            text: "前言",
            link: "/资料清单-前言",
          },
          {
            text: "数学",
            link: "/数学",
          },
          {
            text: "编程",
            link: "/编程",
          },
          {
            text: "数据科学",
            link: "/数据科学",
          },
        ],
      },
      {
        text: "经验分享",
        items: [
          {
            text: "前言",
            link: "/经验分享-前言",
          },
          {
            text: "工具推荐",
            link: "/工具推荐",
          },
          {
            text: "信息检索",
            link: "/信息检索",
          },
          {
            text: "碎碎念",
            link: "/碎碎念",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/wzkMaster/awesome-SIM" },
    ],
  },
});
