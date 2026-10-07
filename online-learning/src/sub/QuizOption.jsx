export default function QuizOption({ text, correct, add }) {
  const handleClick = () => {
    if (!correct) return;
    add();
  };

  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button> 
  );
}