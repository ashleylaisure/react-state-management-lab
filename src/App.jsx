import {useState} from 'react';
import './App.css'
// import ZombieFighters from './components/ZombieFighters/ZombieFighters.jsx';

function App() {
  
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [noMoney, setNoMoney] = useState(false);
  const [zombieFighters, setZombieFighters] = useState([
    
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    
    
  ]);

  const totalStrength = team.reduce((accumulator, fighter) => {
    return accumulator += fighter.price
  }, 0)

  const totalAgility = team.reduce((accumulator, fighter) => {
    return accumulator += fighter.agility
  }, 0)

  const handleAddFighter = (fighter) => {

    if (fighter.price > money) {
      setNoMoney(true);
      return console.log("not enough money")
      
    } else {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      removeFighter(fighter.id);
      setNoMoney(false);
    }

  };

  const removeFighter = (fighterId) => {
    const newFighters = zombieFighters.filter(fighter => fighter.id !== fighterId)
    setZombieFighters(newFighters);
  }

  const handleRemoveFighter = (removefighter) => {

    const newTeam = team.filter(fighter => fighter.id !== removefighter.id)
    setTeam(newTeam);
    setZombieFighters([...zombieFighters, removefighter]);
    setMoney(money + removefighter.price);
    setNoMoney(false);
  }

  

  return (
    <>
      <h1>Zombie Fighters</h1>
      <p>Money: {money} <span>{noMoney ? "Not Enough Money" : ''}</span> </p> 

      <p>Team Strength: {totalStrength}</p>

      <p>Teams Agility: {totalAgility}</p>

      <h3>My Team:</h3>
      <p>{team.length === 0 ? 'Pick some team members!' : ''} </p>

      <ul>
        {team.map((fighter) => (
          
          <li className='onTeam'>
              <img src={fighter.img} />
              <h3>{fighter.name}</h3>
              <p><span>Price: </span>{fighter.price}</p>
              <p><span>Strength: </span>{fighter.strength} </p>
              <p><span>Agility: </span>{fighter.agility} </p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>


        ))}
      </ul>
      <h3>Fighters:</h3> 
      
      <ul>
        {zombieFighters.map((zombie) => (
  
            <li>
              <img src={zombie.img} />
              <h3>{zombie.name}</h3>
              <p><span>Price: </span>{zombie.price}</p>
              <p><span>Strength: </span>{zombie.strength} </p>
              <p><span>Agility: </span>{zombie.agility} </p>
              <button onClick={() => handleAddFighter(zombie)}>Add</button>
            </li>

        ))}
      </ul>
    </>
  )
}

export default App
