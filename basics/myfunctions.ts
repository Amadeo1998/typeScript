import { tr } from "date-fns/locale"

function AddTwo(num: number): number{
    return num + 2
    //return 'hello'
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

let loginUser = (name: string, email:string, isPaid:boolean = true) => {}
AddTwo(2)
signUpUser('Noels','amadeo@origen.studio',false)
getUpper('Amadeo')
loginUser('h', 'h@h.com')

function getValue(myVal: number){
    if(myVal > 5){
        return tr
    }
    return '200'
}

const getHello = (s:string): string => {
    return ''
}

//const heros = ['thor','spiderman','ironman'];

const heros = [1,2,3];

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    // return 1
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
    // return 1
}



export {}