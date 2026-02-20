export default function QuizOption({text, correct, add}){
    return(
        <button onClick={()=>correct && add()}>
            {text}
        </button>
    )
}
