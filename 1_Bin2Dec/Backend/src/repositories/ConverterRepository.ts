
interface ConverterRepositoryDTO{
  value: number
}

class ConverterRepository{
  public async toConvert({value}:ConverterRepositoryDTO){

    const binValue = String(value).split("").map((num)=>{
      return Number(num)
    })
    
    var decValue: number = 0

    binValue.reverse().map((item,index)=>{
      if(!!item){
        decValue=decValue+Math.pow(2,index)
      }
    })
    return decValue

  }
}


export default ConverterRepository