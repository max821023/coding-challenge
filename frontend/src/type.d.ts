interface IPizza {
  _id: string
  name: string
  toppings: string[]
}

interface IRecommendation {
  _id: string
  recommendedPizza: string
  firstIngredient: string
  secondIngredient: string
}

type ApiDataType = {
  message: string
  status: string
  pizzas: IPizza[]
  recommendation?: IRecommendation
}