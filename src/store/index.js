import Vue from 'vue'
import Vuex from 'vuex'

//modules
import contacts from '@/store/contacts.js'
import history from '@/store/history.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    contacts,
    history
  }
})
