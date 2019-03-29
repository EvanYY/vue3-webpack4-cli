<template>
  <div>
    <h1>报错信息：</h1>
    <h2>错误代码：{{errorMsg.code}}</h2>
    <b>{{errorMsg.msg}}</b>
  </div>
</template>

<script>
export default {
	name:"errorPage",
  components: {},
  mixins: [],
  props: {},
  watch: {},
  computed: {},
  data() {
    return {
      errorMsg: {
        code: 200,
        msg: ""
      }
    };
  },
  methods: {},
  created() {
    this.errorMsg = { ...this.$route.query };
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style scoped lang='scss'>
</style>
