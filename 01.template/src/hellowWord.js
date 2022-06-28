function getString() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('hellow word!!!!!!!')
        },2000)
    })
}



async function hellowWord() {
    let string = await getString()
    console.log('string', string)
}

export default hellowWord