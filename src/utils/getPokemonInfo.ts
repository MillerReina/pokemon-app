import { pokeApi } from '@/api';
import { PokemonDetail } from '@/interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${nameOrId}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };

  return pokemon;
};
