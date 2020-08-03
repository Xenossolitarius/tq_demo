import { delay,makeId } from '@/scripts/helpers.js'

const ls = window.localStorage
const period = 1000
const lsKey = 'contacts'

const mockApi = {
    set: function(payload){
       return ls.setItem(lsKey, JSON.stringify(payload))
    },
    get: function(){
        return JSON.parse(ls.getItem(lsKey))
    },
    checkIfExists(shorthand){
        let tempContacts = this.get()
        return tempContacts.findIndex( x => x.shorthand === shorthand )
    },
    makeShortHand: function(nameFull){
        nameFull = nameFull.replace(/ /g,'')
        if(nameFull.length < 6){
            nameFull += makeId(6 - nameFull.length)
        }else{
            nameFull = nameFull.slice(0,3) + nameFull.slice(nameFull.length-3, nameFull.length)
        }
        if(this.checkIfExists > -1){
            nameFull += makeId(3)
          return this.makeShortHand(nameFull)
        }
        return nameFull
    },
    delayGet: function(){
       return delay(period).then(() => this.get)
    },
    delaySet: function(payload){
        return delay(period).then(() => this.set(payload))
    },
    getAll: function(){
        return this.delayGet()
    },
    new: function(contact){
        let tempContacts = this.get()
        contact.shorthand = this.makeShortHand(contact.nameFull)
        tempContacts = [...tempContacts,contact]
        this.set(tempContacts)
        return delay(period).then(() => contact.shorthand)
    },
    update: function(contact){
        let tempContacts = this.get()
        let index = tempContacts.findIndex( x => x.shorthand === contact.shorthand )
        tempContacts[index] = contact
        return this.delaySet(tempContacts)
    },
    delete: function(contact) {
        let tempContacts = this.get()
        tempContacts = tempContacts.filter( x => x.shorthand !== contact.shorthand )
        return this.delaySet(tempContacts)
    },
    favorite: function(contact){
        let tempContacts = this.get()
        let index = tempContacts.findIndex( x => x.shorthand === contact.shorthand )
        tempContacts[index].favorite = !tempContacts[index].favorite
        return this.delaySet(tempContacts)
    }
}

export default mockApi