import React from "react";
import CharacterCard from '../Components/CharaterCard'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'; 
import { getResponse }  from '../store/actions'

function CharacterList({isLoading, charactorArray, getResponse }) { 
    console.log(isLoading)
    console.log(charactorArray)
    console.log(getResponse)
    return (
        <section className="character-list grid-view">
            <button onClick = {getResponse}>  
          {isLoading ? (<Loader type ='Plane' color ='black'/>):('Get Charactors Info')}</button>
          {charactorArray && charactorArray.map(character => <CharacterCard  data={character} />)}
        </section>
      ); 
}     

const maspStateToProps = (state) => {
    return {
        isLoading : state.isLoading,
        charactorArray : state.charactorArray
    }
} 

export default connect(maspStateToProps , {getResponse})(CharacterList)
