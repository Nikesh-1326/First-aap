
  function Home(props) {
    return (
      <div style={{"border" : "2px solid yellow", "width": "300px", "height": "200px" ,backgroundColor: "pink", "margin": "10px"}}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>)
}

 export default Home;