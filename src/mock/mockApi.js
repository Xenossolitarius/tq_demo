import { delay } from '@/scripts/helpers.js'

const ls = window.localStorage
const period = 3000
const lsKey = 'contacts'

const mockApi = {
    get: function(){
       return delay(period).then(() => JSON.parse(ls.getItem(lsKey)))
    },
    set: function(payload){
        return delay(period).then(() => ls.setItem(lsKey, JSON.stringify(payload)))
    }
}

export default mockApi