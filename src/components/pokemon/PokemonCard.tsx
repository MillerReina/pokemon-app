import { SmallPokemon } from '../../interfaces/pokemon-list';
import { Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();

  const onCardClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Card isHoverable isPressable onClick={onCardClick}>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={pokemon.img} width="100%" height={140} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{pokemon.name}</Text>
          <Text>#{pokemon.id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
