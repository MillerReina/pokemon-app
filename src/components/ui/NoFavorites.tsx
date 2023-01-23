import { Container, Text, Image } from '@nextui-org/react';

export const NoFavoritesComponent = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh-100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="Default image"
        width={250}
        height={250}
        css={{
          opacity: 0.45,
        }}
      ></Image>
    </Container>
  );
};
