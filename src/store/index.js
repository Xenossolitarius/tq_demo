import Vue from 'vue'
import Vuex from 'vuex'

//modules
import contacts from '@/store/contacts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    currentModal: null,
    globalContact: null,
  },
  getters:{
    currentModal: state => state.currentModal,
    globalContact: state => state.globalContact
  },
  mutations: {
    SET_CURRENTMODAL: (state,currentModal) => state.currentModal = currentModal,
    SET_GLOBALCONTACT: (state,contact) => state.globalContact = contact
  },
  actions:{
    setCurrentModal({commit},currentModal){
      commit('SET_CURRENTMODAL', currentModal)
    },
    setGlobalContact({commit},contact){
      commit('SET_GLOBALCONTACT', contact)
    }
  },
  modules: {
    contacts
  }
})
