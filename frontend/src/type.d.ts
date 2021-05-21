interface IPizza {
  _id: string
  name: string
  toppings: string[]
}

interface IRecommendation {
  _id: string
  ingredientOne: string
  ingredientTwo: string
  recommendedPizza?: string
}

type ApiDataType = {
  message: string
  status: string
  pizzas: IPizza[]
  recommendation?: IRecommendation
}