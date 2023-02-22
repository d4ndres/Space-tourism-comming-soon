import { createStore } from 'vuex'
import data from '@/data.json'

export default createStore({
  state: {
    data: data,
    state: false
  },
  getters: {
    srcImg(){
      return src => {
          return src.substring( 1, src.length )
      }
    }

  },
  mutations: {
    updateState( state, newState ){
      state.state = newState
    }
  },
  actions: {
  },
  modules: {
  }
})
