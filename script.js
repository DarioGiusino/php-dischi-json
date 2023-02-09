const { createApp } = Vue;

const app = createApp({
  name: "DischiApp",

  data() {
    return {
      albums: [],
    };
  },
});

app.mount("#app");
