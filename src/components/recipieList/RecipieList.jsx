import { App } from "App";
import { RecipeItem } from "components/recipieItem/RecipieItem";
import { CiAlarmOn } from "react-icons/ci";
import { PiBowlFoodLight } from "react-icons/pi";
import { CiBurger } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

export function RecipeList (props){
    return <ul>
     {props.recipies.map((recipie)=>{
        return <RecipeItem
        bowl ={PiBowlFoodLight}
        clock = {CiAlarmOn}
        burger = {CiBurger}
        star = {CiStar}
        name = {recipie.name}
       time = {recipie.time}
       servings = {recipie.servings}
       difficulty = {recipie.difficulty}
       image = {recipie.image}
        
        />
     })}
    </ul>
}