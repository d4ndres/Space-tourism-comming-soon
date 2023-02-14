import { createStore } from 'vuex'
import data from '@/data.json'

export default createStore({
  state: {
    data: data
  },
  getters: {
    srcImg(){
      return src => {
          return src.substring( 1, src.length )
      }
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
