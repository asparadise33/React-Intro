import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function Counter({ title }) {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <Button onClick={() => setValue((prevState) => prevState + 1)}>Increment!</Button>
      <Button onClick={() => setValue((prevState) => prevState - 1)}>Decrement!</Button>
      <Button onClick={() => setValue(0)}>Reset!</Button>
    </div>
  );
}
Counter.propTypes = {
  title: propTypes.string,
};
Counter.defaultProps = {
  title: 'Counter default',
};

export default Counter;
