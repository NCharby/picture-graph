//@flow
//TODO: you should really define a type for these

//TODO: this is possible, just hard
// export function append(newItems: Array<any>): (Array<any>)=>Array<any>{
//     return function(existing){
//         //prepare the new collections
//         // const splitItems = split(newItems, existing.length)
//         return []
//     }
// }

//payload: the image results we want to break appart
//newCount: how many columns, starting at 1
export function split(payload: Array<any>, newCount: number = 1){
    if(newCount === 1) {
        //shortcut
        return [payload]
    }
    let col = 0
    let s = []
    for (let i = 0; i < payload.length; i++) {
        if(!s[col]){
            s[col] = []
        }
        s[col].push(payload[i])
        col = col + 1 >= newCount? 0 : col + 1
    }

    return s    
}