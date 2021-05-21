import axios, { AxiosResponse } from 'axios';

const baseUrl: string = "http://localhost:3000"

export const addRecommendation = async (
  data: IRecommendation
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const recommendation: Omit<IRecommendation, "_id"> = {
      ingredientOne: data.ingredientOne,
      ingredientTwo: data.ingredientTwo
    }
    const saveRecommendation: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/create/recommendation",
      recommendation
    )
    return saveRecommendation
  } catch (error) {
    throw new Error(error)
  }
}