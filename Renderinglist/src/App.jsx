import { people } from './Components/list.component'
import './App.css'
import getImage from './Components/getUrlfile';


export default function App() {

  const chemist = people.filter (person => person.profession === `chemist`);
  const listItem = chemist.map (person => <li key= {person.id}> <img 
    src={getImage(person)}
    alt={person.name}
    /> 
    <p> <b>{person.name}:</b>
    {" "+person.profession+" "}
    known for {person.accomplishment}
    
   </p>
  </li>
  );
  return <ul>{listItem}</ul>
}

 



















