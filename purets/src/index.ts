class User{
    protected _courseCount = 1
    email:string
    name:string
    city: string = ''
    constructor(email: string, name: string){
        this.email = email;
        this.name = name
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCoureCount(){
        this._courseCount = 4
    }
}

const amadeo = new User('amadeo@origen.studio','Amadeo')
amadeo.city = 'Peer'
