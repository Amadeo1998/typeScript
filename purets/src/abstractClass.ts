abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        // some complex calculation

        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
        ){
            super(cameraMode, filter)
        }
    getSepia(): void {
        console.log("Method not implemented.");
    }

}

const a = new Instagram('test', 'test', 12)

a.getReelTime()