import Student from "./Student";
const StudentList = (props) => {
  return (  
    <>
      <h2>THIS IS STUDET LIST COMPONENT!</h2>
      {props.students.map(student => 
       <Student key={student.bio} student={student} />
       )}
    </>
  );
}
 
export default StudentList;