function PropsDemo(props) {
  const [name, age] = [props];
  console.log(name, age);

  //   console.log(props.name);
  //   console.log(props.age);
  return (
    <>
      <h1>Props Demo</h1>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      Using the Array Notation
      <h2>Name : {props["name"]}</h2>
      <h2>Age : {props["age"]}</h2>
    </>
  );
}

export default PropsDemo;
