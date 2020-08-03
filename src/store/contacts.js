import mockContacts from '@/mock/mockData.js'
import mockApi from '@/mock/mockApi.js'

mockApi.set(mockContacts)

const contacts = {
    state: () => ({
        //imitate existing api
        contacts: mockContacts,
    }),
    mutations: {
        SET_CONTACTS: (state,contacts) => {
            state.contacts = contacts
        },
        DELETE_CONTACT: (state,contact) => {
            let tempContacts = state.contacts.filter( x => x.shorthand !== contact.shorthand )
            console.log(tempContacts)
            state.contacts = tempContacts
        },
        ADD_CONTACT: (state,contact) => {
            state.contacts.unshift(contact)
        },
        UPDATE_CONTACT: (state,contact) => {
            let index = state.contacts.findIndex( x => x.shorthand === contact.shorthand )
            state.contacts[index] = contact
        },
        TOGGLE_FAVORITE: (state,contact) => {
            let index = state.contacts.findIndex( x => x.shorthand === contact.shorthand )
            contact.favorite = !contact.favorite
            state.contacts[index] = contact
        }
    },
    actions: {
        async fetchContacts(){
            let data = await mockApi.getAll()
            console.log(data)
            return true
        },
        async createContact({commit},contact){
            let data = await mockApi.new(contact)
            contact.shorthand = data
            commit('ADD_CONTACT', contact)
            return data
        },
        async updateContact({commit}, contact){
            let data = await mockApi.update(contact)
            commit('UPDATE_CONTACT', contact)
            return data
        },
        async deleteContact({commit},contact){
            console.log('delete contact')
            console.log(contact)
            let data = await mockApi.delete(contact)
            commit('DELETE_CONTACT', contact)
            return data
        },
        async toggleFavorite({commit}, contact){
            let data = await mockApi.favorite(contact)
            commit('TOGGLE_FAVORITE', contact)
            return data
        }
    },
    getters: {
        filterContacts: state => filter => {
            let tempContacts = state.contacts
            if(filter.routeFilter){
                tempContacts = tempContacts.filter( (contact) => {
                    return contact[filter.routeFilter]
                })
            }
            if(filter.nameFull){
                tempContacts = tempContacts.filter( x => {
                    return x.nameFull.toLowerCase().includes(filter.nameFull.toLowerCase())
                })
            }   
            return tempContacts
        },
        getContacts: state => {
            return state.contacts
        },
        getContact: state => shorthand => {
            return state.contacts.filter( x => x.shorthand == shorthand).pop()
        }
    }
}

export default contacts