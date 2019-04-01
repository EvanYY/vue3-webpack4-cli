<template>
  <div>
    {{name}}
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
      name: "nav",
      // heart: {
      //   time: 0,
      //   start: function(fn) {
      //     console.log(this.time);
      //     fn();
      //   }
      // }
    };
  },
  methods: {
    nav() {
      console.log(this.name)
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
</style>
