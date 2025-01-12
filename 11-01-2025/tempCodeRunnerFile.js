class Student extends Person {
    constructor(params){
        super(params)
        this.doing= params.doing
    }
    doingStudy(){
        console.log(`This student doing ${this.doing}`)
    }
}