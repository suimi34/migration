import { createStore, mapState } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
});

export default store;
