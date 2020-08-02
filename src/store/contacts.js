import mockContacts from '@/mock/mockData.js'

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
        fetchContacts(){

        }
    },
    getters: {
        filterContacts: state => filter => {
            return state.contacts.filter((x)=>{
                x.nameFull.includes(filter)
            })
        },
        getContacts: state => {
            return state.contacts
        }
    }
}

export default contacts