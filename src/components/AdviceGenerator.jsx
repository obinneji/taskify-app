import { useEffect, useState } from 'react';
import '../style/advice.css'

function AdviceGenerator() {
  const [advice, setAdvice] = useState("")
  const [adviceId,setAdviceId] = useState("")
  

  useEffect(()=>{
      fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    setAdviceId(data.slip.id)
    setAdvice(data.slip.advice)});
  },[])

  return (
    <div className='main-container'>
      <div className="main font-krona">
        <p className='advice-id'>Advice #{adviceId}</p>
        <div className='section'><h2 className='advice-word'>&ldquo;{advice}&rdquo;</h2></div>
      </div>
    </div>
  );
}

export default AdviceGenerator;