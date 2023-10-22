const Concept = (props) => {
  return (
    <li className={props.className}>
      <img src={props.imageSource} alt={props.concepts.title} />
      <h2>{props.concepts.title}</h2>
      <p>{props.concepts.description}</p>
    </li>
  );
};

export default Concept;
