let score: number | string  = 33

score = '55'

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let amadeo: User | Admin = {name: 'Amadeo', id: 12}

function getDbId(id:number | string){
    console.log(`DB is: ${id}`)
}

getDbId(3)
getDbId('3')

//aray 

const data: (number | string | boolean)[] = [1,2,3,'5', false]

let seatAllotmen: 'aisle' | 'middle' | 'window'

seatAllotmen = 'aisle'
// seatAllotmen = 'crew'

