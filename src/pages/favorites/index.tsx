import { useEffect, useState } from 'react';
import Layout from '@/components/layouts/Layout';
import { NoFavoritesComponent } from '@/components/ui';
import { localFavorites } from '@/utils';
import { Card, Container, Grid } from '@nextui-org/react';
import { FavoritePokemonsComponent } from '../../components/ui/FavoritePokemons';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemonsInLocalStorage);
  }, []);

  return (
    <Layout title="Página de favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavoritesComponent></NoFavoritesComponent>
      ) : (
        <FavoritePokemonsComponent favoritePokemons={favoritePokemons}></FavoritePokemonsComponent>
      )}
    </Layout>
  );
};

export default FavoritesPage;
