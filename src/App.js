import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Question from './components/Question';
import Final from './components/Final';
import Restart from './components/Restart';


const questions =
  [
    {
      title: "Какой из языков программирования самый быстрый?",
      variants: ['С', 'С++', 'Assembler', 'C#', 'Python'],
      correct: 2
    },
    {
      title: "Какой язык является процедурным?",
      variants: ['C', 'C++', 'C#', 'Java'],
      correct: 0
    },
    {
      title: "Что такое функия?",
      variants: [
        'Именованная область в памяти, содержимое которой может изменяться во время ввыполнения программ',
        'Именованная область в памяти, содержимое которой НЕ может изменяться во время ввыполнения программ',
        'Именованая область кода, которую можно вызвать при необходимости'],
      correct: 2
    },
    {
      title: "Что такое переменная?",
      variants: [
        'Именованная область в памяти, содержимое которой может изменяться во время ввыполнения программ',
        'Именованная область в памяти, содержимое которой НЕ может изменяться во время ввыполнения программ',
        'Именованая область кода, которую можно вызвать при необходимости'],
      correct: 0
    },
    {
      title: "Что такое метод?",
      variants: [
        'Переменная внутри класса',
        'Функция внутри класса',
        'Реализация алгоритма'],
      correct: 1
    },
    {
      title: "Какая структура данных обеспечивает добавление/удаление элементов за константное время?",
      variants: [
        'Массив',
        'Список',
        'Дерево'],
      correct: 1
    },
    {
      title: "Какая структура данных обеспечивает доступ к элементам за константное время?",
      variants: [
        'Массив',
        'Список',
        'Дерево'],
      correct: 0
    }
  ]

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleAllQuestions(baseQuestions) {
  // 1) перемешиваем порядок вопросов
  const shuffled = shuffleArray(baseQuestions);

  // 2) для каждого вопроса перемешиваем варианты ответов
  return shuffled.map((question) => {
    const variants = [...question.variants];
    const correctIndex = question.correct;

    const indices = variants.map((_, idx) => idx);
    const shuffledIndices = shuffleArray(indices);

    const newVariants = shuffledIndices.map((i) => variants[i]);
    const newCorrect = shuffledIndices.indexOf(correctIndex);

    return {
      ...question,
      variants: newVariants,
      correct: newCorrect,
    };
  });
}

function App() {
  
  const [shuffledQuestions, setShuffledQuestions] = useState(() => 
    shuffleAllQuestions(questions)
  );

  const totalQuestions = shuffledQuestions.length;
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  let question = shuffledQuestions[step];
  //console.log("Текущий вопрос variants:", question.variants);

  const onClickVariant = (variant) => {
    setStep(step + 1);
    //console.log(typeof(variant));
    if (variant === question.correct)
      setCorrect(correct + 1);
  };

  const onRestart = () => {
   setShuffledQuestions(shuffleAllQuestions(questions));
    setStep(0);      //обнуляем
    setCorrect(0);   //обнуляем
  };

  return (
    <div className='main'>
      {
        step < totalQuestions ?
          <Question question={question}
            onClickVariant={onClickVariant}
            step={step}
            totalQuestions={totalQuestions} /> :
          <Final totalQuestions={totalQuestions}
            correctAnswers={correct} />
      }
      <Restart onRestart={onRestart} />
      {/* <h4 style={{display:'flex',justifyContent:'space-between'}}><div>Номер вопроса:</div> <div>{step}</div></h4>
       <h4 style={{display:'flex',justifyContent:'space-between'}}><div>Правильных ответов:</div> <div>{correct}</div></h4> */}
    </div>
  );
}

export default App;
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
