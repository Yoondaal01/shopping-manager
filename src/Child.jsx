const Child = ({ name, age, location, hobby }) => {
    return (
      <div className="child">
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
        <p>Hobby: {hobby}</p>
      </div>
    );
  };
  
  export default Child;