export function throttle (callback, limit) {
    var waiting = false
    return function () {
        if (!waiting) {
            callback.apply(this, arguments)
            waiting = true
            setTimeout(function () {
                waiting = false
            }, limit)
        }
    }
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function makeId(length=10) {
    var result = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}