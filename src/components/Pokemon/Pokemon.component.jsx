import React from 'react';
import {
  Character,
  PokeName,
  PokeAttacks,
  PokeImage,
  PokeMeta,
} from './Pokemon.styles';

const Pokemon = ({ pokemon }) => {
  return (
    <Character>
      <PokeName>
        <p>{pokemon.name}</p>
      </PokeName>
      <PokeMeta>
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
      </PokeMeta>
      <PokeImage>
        <img src={pokemon.image} alt={pokemon.name} />
      </PokeImage>
      <PokeAttacks>
        {pokemon.attacks.special.slice(0, 3).map((attack) => (
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
        ))}
      </PokeAttacks>
    </Character>
  );
};

export default Pokemon;
