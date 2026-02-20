import QuizOption from "../sub/QuizOption";

export default function QuizQuestion({data,add}){
  return(
    <div className="quiz">
      <h4>{data.q}</h4>
      <QuizOption text={data.a} correct add={add}/>
      <QuizOption text="Wrong"/>
    </div>
  )
}