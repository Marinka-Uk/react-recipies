import { RecipeItem } from "./components/recipieItem/RecipieItem";
import { RecipeList } from "./components/recipieList/RecipieList";
import recipie from "./recipe.json"


export const App = () => {
  return <RecipeList  recipies = {recipie} />
};
