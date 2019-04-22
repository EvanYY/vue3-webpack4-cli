export default {
  state: {
    allAjax: [],
  },
  mutations: {
    updateAllAjax(state, name) {
      state.allAjax.push(name)
    },
  },
}
