import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "prismjs/themes/prism-coy.min.css";
import CodeBox from "../components/CodeBox.vue";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.component("CodeBox", CodeBox);
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
};
