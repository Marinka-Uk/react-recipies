import { App } from "components/App";
import { RecipeItem } from "components/recipieItem/RecipieItem";

export function RecipeList (props){
    return <ul>
     {props.recipies.map((recipie)=>{
        return <RecipeItem
        name = {recipie.name}
       time = {recipie.time}
       servings = {recipie.servings}
       difficulty = {recipie.difficulty}
       image = {recipie.image}
        
        />
     })}
    </ul>
}