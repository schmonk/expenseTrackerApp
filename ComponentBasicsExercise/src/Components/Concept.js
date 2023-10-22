const Concept = (props) => {
  const classes = `concept ${props.className}`;
  return (
    <li className={classes}>
      <img src={props.imageSource} alt={props.concepts.title} />
      <h2>{props.concepts.title}</h2>
      <p>{props.concepts.description}</p>
    </li>
  );
};

export default Concept;
