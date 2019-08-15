import React from "react";
import CharacterCard from "./CharacterCard";
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


export default function CharacterList(props) {
    return (
        <section className="character-list grid-view">
          <h2>
            {characters.map(character => (
              <CharacterCard data={character} />
            ))}
          </h2>
        </section>
      ); 
}   
