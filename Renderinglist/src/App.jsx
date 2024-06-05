import { people } from './Components/list.component'
import './App.css'



 
    

    
  


function App() {

  const chemist = people.filter (person => person.profession === `chemist` );
  const listItem = chemist.map ( person => <li> <p>
    <b>{person.name}:</b>
    {' ' + person.profession + ' '}
    known for {person.accomplishment}
    </p> </li>
     );

  return <ul> {listItem} </ul>;
}

export default App
