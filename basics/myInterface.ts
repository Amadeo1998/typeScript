interface User{
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    //startTrail() => string
    startTrail(): string,
    getCoupon(couponname: string): number
}

const amadeo: Admin = {dbId: 22, email: 'amadeo@origen.studio', userId: 2211, startTrail: () => {return 'trail started'},
getCoupon: (name: 'Amadeo') => {
    return 64
},
githubToken: '1234',
role: 'learner'
}

interface User{
    githubToken: string
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

