import { useState } from 'react';

import Layout from '@/components/layouts/Layout';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Text, Grid, Card, Button, Container, Image } from '@nextui-org/react';
import { pokeApi } from '@/api';
import { PokemonDetail } from '../../interfaces/pokemon-detail';
import { getPokemonInfo, localFavorites } from '@/utils';
import confetti from 'canvas-confetti';
import { PokemonListResponse } from '@/interfaces';

interface Props {
  pokemon: PokemonDetail;
}

const PokemonNamePage: NextPage<Props> = ({ pokemon }: Props) => {
  const titlePage = `Pokémon ${pokemon.name}`;

  const [isInFavoritesList, setIsInFavoritesList] = useState(localFavorites.existsPokemonInList(pokemon.id));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavoritesList(!isInFavoritesList);

    if (!isInFavoritesList) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  return (
    <Layout title={titlePage}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: 30 }}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} alt={pokemon.name} width="100%" height={200} />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" ghost={!isInFavoritesList} onPress={onToggleFavorite}>
                {isInFavoritesList ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}> Sprites</Text>
              <Container direction="row" display="flex">
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}></Image>
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}></Image>
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}></Image>
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}></Image>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=150`);

  return {
    paths: data.results.map(({ name }) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export default PokemonNamePage;
