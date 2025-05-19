import { Item, SubTittle, Image, Text, Tittle, DetailItem } from './RecipieItem.styled';

export function RecipeItem({
  name,
  time,
  servings,
  calories,
  difficulty,
  image,
  clock: Clock,
  burger: Burger,
  star: Star,
  bowl: Bowl,
}) {
  return (

    <Item>
        <DetailItem>
      <Tittle>{name}</Tittle>
      <Text>
        <Clock size={20} />
        min:{time}
      </Text>
      <Text>
        <Bowl size={20} />
        servings:{servings}
      </Text>
      <Text>
        <Burger size={20} />
        calories:{calories}
      </Text>
      <Image src={image} alt={name} width="250px" />
      <SubTittle>
        <Star size={20} />
        difficulty:{difficulty}
      </SubTittle>
      </DetailItem>
    </Item>
  );
}
