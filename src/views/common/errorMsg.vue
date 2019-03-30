<template>
  <div>
    <h1>报错页面，见此页面请联系后台人员</h1>
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