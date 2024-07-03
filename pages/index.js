import { useState } from 'react';
import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  // const { user } = useAuth();
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Hello Paradise!</p>
      <h1>Counter Fun!</h1>
      <h2>{value}</h2>
      <Button onClick={() => setValue((prevState) => prevState + 1)}>Increment!</Button>
      <Button onClick={() => setValue((prevState) => prevState - 1)}>Decrement!</Button>
      <Button onClick={() => setValue(0)}>Reset!</Button>
    </div>
  );
}

export default Home;
