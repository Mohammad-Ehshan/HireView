import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {

   const textToSpeech=(text)=>{
    if('speechSynthesis' in window){
      const speech=new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else {
      alert("Sorry,your browser don't support text to speech")
    }
   }

  return mockInterviewQuestion&&(
      <>
      {/* <h1 className='text-3xl text-gray-50 text-center mt-10'>ALL THE BEST!</h1> */}
    <div className='p-5 border rounded-lg my-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => (
          <div>
            <h2 className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex==index&&' text-blue-600'}`}>Question #{index + 1}</h2>
          </div>
        ))}
      </div>
        <h2 className='my-5 text-md md:text-lg text-gray-300'>Que:{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
  
        <div className='border rounded-lg p-5 bg-blue-100 mt-10'>
          <h2 className='fle gap-2 items-center text-primary'>
           <Lightbulb/>
           <strong>Note:</strong>
          </h2>
          <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
          </div>
    </div>
    </>
  )
}

export default QuestionsSection
