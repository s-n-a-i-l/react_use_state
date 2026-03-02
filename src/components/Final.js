import './Final.css';

function Final({totalQuestions, correctAnswers})
{
  return(
    <div className='question'>
        <h2><div style={{display:'flex',justifyContent:'space-between'}}>Всего вопросов:</div> <div>{totalQuestions}</div></h2>
        <h2><div style={{display:'flex',justifyContent:'space-between'}}>Правильных ответов:</div> <div>{correctAnswers}</div></h2>
    </div>
  )
}
export default Final;