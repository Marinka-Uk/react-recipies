export function RecipeItem(props){
    return <li>
        <h2>{props.name}</h2>
        <p>{props.time}min:</p>
        <p>servings:{props.serving}</p>
        <p>calories:{props.calories}</p>
        <p>difficulty:{props.difficulty}</p>
    <img src={props.image}alt={props.name}/> 
    </li>
}