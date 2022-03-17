import ScoreList from "./ScoreList";
const student = (props) => {
  return ( 
  <>
  <h3>
     {props.student.bio}, This is the Bio for {props.student.name}.
  </h3>
  <ScoreList scores={props.student.scores} />
    </> 
  );
}
 
export default student;