
interface ConverterRepositoryDTO{
  value: number
}

class ConverterRepository{
  public async toConvert({value}:ConverterRepositoryDTO){
    const binValue = value
    
    const decValue = binValue

    return decValue

  }
}


export default ConverterRepository