<template>
  <div id="app">
    <!-- <ul>
      <li
        v-for="(v,i) in list"
        :key="i"
        @click="go(v.path)"
        style="margin:20px 30px;cursor:default;"
      >{{v.name}}</li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    // go(path) {
    //   if (path.indexOf("error")) {
    //     this.$router.replace({
    //       path,
    //       query: {
    //         code: 300,
    //         msg:`测试错误`
    //       }
    //     });
    //     return;
    //   }
    //   this.$router.replace({
    //     path
    //   });
    // }
  },
  data() {
    return {
      // list: [
      //   {
      //     name: "login",
      //     path: "/common-login"
      //     // path: "/login"
      //   },
      //   {
      //     name: "404",
      //     path: "/404"
      //   },
      //   {
      //     name: "home",
      //     path: "/common-home"
      //   },
      //   {
      //     name: "main",
      //     path: "/common-main"
      //   },
      //   {
      //     name: "asdasd",
      //     path: "/error"
      //   }
      // ]
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>

