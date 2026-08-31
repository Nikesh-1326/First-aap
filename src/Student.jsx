function Student(props) {
    return (
       <div>
        <h2>{props.name }</h2>
        <p>Roll No: {props.rollno}</p>
        <p>Email: {props.Email_id}</p>
       </div>
    )
}
export default Student;