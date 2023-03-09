const user = {
    name: 'Amadeo',
    email: 'amadeo@origen.studio',
    isActive:true
}

function createUser({name: string, isPaid:boolean}){

}

let newUser = {name: 'Noels', isPaid: false, email: 'amadeo@origen.studio'}
createUser(newUser)



function createCourse(): {name: string, price:number}{
    return {name: 'reactjs', price:399}
}

type User = {
    readonly _id: string
    name: string, 
    email: string,
    isActive:boolean
    creditCardDetais?: number
}

// function createAUser(user: User): User{
//     return {name: '', email:'', isActive:true}
// }

// createAUser({name:'', email:'',isActive:false})

let myUser: User = {
    _id: '1234',
    name: 'h',
    email: 'h@h.com',
    isActive: false
}

//myUser._id = ' test'

type cardNumber = {
    cardnumber: string

}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}




export {}