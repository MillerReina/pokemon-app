import { Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  id: number;
}

export const FavoriteCardPokemon = ({ id }: Props) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Card isHoverable isPressable css={{ padding: 10 }} onPress={onFavoriteClick}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={`image ${id}`}
        width="100%"
        height={140}
      ></Card.Image>
    </Card>
  );
};
