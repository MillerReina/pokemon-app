import { ReactElement } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import Layout from '@/components/layouts/Layout';
import { GetStaticProps } from 'next';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

export const HomePage = ({ pokemons }: Props) => {
  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <PokemonCard pokemon={pokemon}></PokemonCard>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  data.results.forEach((value, index) => {
    value.id = index + 1;
    value.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Lista de Pokémons">{page}</Layout>;
};
