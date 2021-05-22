import axios, { AxiosResponse } from 'axios';

const baseUrl: string = `http://localhost:5000`

export const addRecommendation = async (
  data: IIngredient
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const ingredients: Omit<IRecommendation, "_id"> = {
      ingredientOne: data.ingredientOne,
      ingredientTwo: data.ingredientTwo
    }
    const saveRecommendation: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/api/recommendations/create/recommendation",
      ingredients
    )
    // console.log(saveRecommendation)
    return saveRecommendation
  } catch (error) {
    throw new Error(error)
  }
}