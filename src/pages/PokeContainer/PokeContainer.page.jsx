import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Pokemon from '../../components/Pokemon';
import { GET_POKEMONS } from '../../graphql/getPokemon';
import { Container } from './PokeContainer.styles';

const PokeContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <Container>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </Container>
  );
};

export default PokeContainer;
