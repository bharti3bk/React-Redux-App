import React from "react";
import CharacterCard from '../Components/CharaterCard'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'; 
import { getResponse }  from '../store/actions'


export default function CharacterList(props) { 
    console.log(props)
    return (
        <section className="character-list grid-view">
            <button onClick = {props.getResponse}>  
          {props.isLoading ? (<Loader type ='Plane' color ='black'/>):('Get Charactors Info')}</button>
          {props.charactorArray && props.charactorArray.map(character => <CharacterCard  data={character} />)}
        </section>
      ); 
}     

const maspStateToProps = (state) => {
    return {
        isLoading : state.isLoading,
        charactorArray : state.charactorArray
    }
} 
connect(maspStateToProps , {getResponse})(CharacterList)
