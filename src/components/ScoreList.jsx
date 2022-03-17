import Score from "./Score";

const Scorelist = (props) => {
  return ( 
  <>
      {props.scores.map(score =>
      <Score key={score.date} score={score}/>
      )}
  </> 
  );
}
 
export default Scorelist;