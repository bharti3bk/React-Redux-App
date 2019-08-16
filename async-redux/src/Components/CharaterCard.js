
import React from 'react' 
import {Card,CardImg ,CardTitle} from "reactstrap"; 
import '../../src/index.css';

  export default function CharacterCard(props) {
    return (
      <div>
        <Card id ="characterid">
          <CardImg topwidth="100%" src={props.data.image} alt="Rick and Morty Character" />
            <CardTitle>Name : {props.data.name}</CardTitle> 
        </Card>
      </div>
    );
  }
