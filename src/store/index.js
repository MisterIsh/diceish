import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ResultsShown: []
  },
  getters: {
    AscendingOrder: state => {
      if(state.ResultsShown[0] !== []) {
        let localItemList = state.ResultsShown[0].slice();
        let localresult = localItemList.sort(function(a,b)  {
          return a - b;});

        return localresult
    }},
    DescendingOrder: state => {
      if(state.ResultsShown[0] !== []) {
      let localItemList = state.ResultsShown[0].slice();
      let localresult = localItemList.sort(function(a,b)  {
        return b - a;});
      return localresult
    }},
    Grouped: state => {
      if(state.ResultsShown[0] !== [] ) {
        let counts = [];
        let i = 0;
        state.ResultsShown[0].forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
        let newcounts = counts.map((function(val, index) {
          return {face: index, result:val}
        }));
        let another_array = newcounts.filter(function(x){
          return (x !== (undefined || null || ''));
        });
        return another_array
      }
    }
    },
  mutations: {
    change(state, payload) {
      state.ResultsShown.pop();
      state.ResultsShown.push(payload);
  }},
  actions: {
    change: ({commit}) => commit('change'),
    sortBy (context) {
      // eslint-disable-next-line no-undef
        let items = state.ResultsShown.sort((a, b) => {
          // eslint-disable-next-line no-undef
          const sortA = a[sortBy];
          // eslint-disable-next-line no-undef
          const sortB = b[sortBy];

          // eslint-disable-next-line no-undef
          if (descending) {
            if (sortA < sortB) return 1;
            if (sortA > sortB) return -1;
            return 0
          } else {
            if (sortA < sortB) return -1;
            if (sortA > sortB) return 1;
            return 0
        }})
  }},
  modules: {
  },
  computed: {
    }
})
