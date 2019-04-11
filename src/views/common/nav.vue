<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>报障</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  components: {},
  mixins: [],
  props: {},
  watch: {},
  computed: {},
  data() {
    return {
      name: "nav"
    };
  },
  methods: {
    nav() {
      console.log(this.name);
    }
  },
  created() {},
  mounted() {
    // this.heart.start(this.nav);
  },
  beforeDestroy() {}
};
</script>

<style scoped lang='scss'>
#components-layout-demo-basic {
  text-align: center;
  // height: 100vh;
  .ant-layout {
    height: 100vh;
    // background-color: red;
    // display: flex;
    // align-items:a
  }
  .ant-layout-content {
    background: #fff;
    color: #000;
  }
  .ant-layout-header,
  .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
    // font-size: 20px;
    font-size: 30px;
  }
  .ant-layout-header {

  }
}
</style>
