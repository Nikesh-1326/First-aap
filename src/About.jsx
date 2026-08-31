function about(props) {
  return (
    <div>
      <h1>{props.taskName}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default about;