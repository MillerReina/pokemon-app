import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
  favoritePokemons: number[];
}

export const FavoritePokemonsComponent = ({ favoritePokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
          <FavoriteCardPokemon id={id}></FavoriteCardPokemon>
        </Grid>
      ))}
    </Grid.Container>
  );
};
