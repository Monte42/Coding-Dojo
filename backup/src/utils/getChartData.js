export const parseData = (data) => {
    let highLow = [['Date','L-H, O-C','b','c','d']]
    for (let d in data){
        const day = new Date(data[d].t)
        const hld = [day,
            data[d].l,
            data[d].o,
            data[d].c,
            data[d].h]
            highLow.push(hld)
        }
    return highLow
}