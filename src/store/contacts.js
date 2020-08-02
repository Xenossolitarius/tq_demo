import mockContacts from '@/mock/mockData.js'
import mockApi from '@/mock/mockApi.js'

mockApi.set(mockContacts)

const contacts = {
    state: () => ({
        //imitate existing api
        contacts: mockContacts,
    }),
    mutations: {
        SET_CONTACTS: (state) => {
            return state
        }
    },
    actions: {
        async fetchContacts(){
            console.log('fetchContacs')
            let data = await mockApi.get()
            console.log(data)
            return true
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