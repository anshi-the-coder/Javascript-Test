class Math{
    constructor(params){
        this.params=params
    }
    sum(){
        if(Array.isArray(this.params)){
           return this.params.reduce((a,b)=>(a+b)) 
        }else{
            return "This is not an array"
        }
    }
    min(){
        if(Array.isArray(this.params)){
            let min=this.params[0]
            for(let i=1;i<this.params.length;i++){
                if(this.params[i]<min){
                    min=this.params[i]
                }
            }
            return min
         }else{
             return "This is not an array"
         }
    }

    max(){isArray
        if(Array.isArray(this.params)){
            let max=this.params[0]
            for(let i=1;i<this.params.length;i++){
                if(this.params[i]>max){
                    max=this.params[i]
                }
            }
            return max
         }else{
             return "This is not an array"
         }
    }
}

let math=new Math([8,9,7,76,89])
let sum1=math.sum()
console.log(sum1)
let min1=math.min()
console.log(min1)
let max1=math.max()
console.log(max1)