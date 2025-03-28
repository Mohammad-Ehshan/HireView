'use client'

import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsDown, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


function Feedback({ params }) {

  const [feedbackList, setFeedbackList] = useState([])
  const router = useRouter();

   // Calculate average rating
  //  const allRatings = [...pastRatings.map((r) => r.rating), JsonFeedbackResp?.rating];
  //  const averageRating = allRatings.reduce((sum, r) => sum + r, 0) / allRatings.length;

  useEffect(() => {
    GetFeedback();
  }, [])


  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  }

  return (
    <div className='p-10 min-h-screen'>

      {feedbackList?.length == 0 ?
        <h2 className='font-bold text-xl text-red-500'>No interview Feedback record found</h2>
        :
        <>
          <h2 className='font-bold text-yellow-500 text-center text-5xl'>Congratulation!</h2>
          <h2 className='font-bold
      text-2xl'>Here is your feedback</h2>
          <h2 className='text-blue-400 text-2xl my-3 font-medium'>Your Mental Health Score:6/10 <strong></strong></h2>
          {/* <h2 className='text-blue-400 text-2xl my-3 font-medium'> Average Rating: {averageRating}<strong></strong></h2> */}

          <h2 className='text-sm text-gray-400'>Find below each question and answer and feedback for improvement</h2>

          {feedbackList && feedbackList.map((item, index) => (
            <Collapsible key={index} className='mt-7'>
              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full'>
                {item.question} <ChevronsUpDown className='h-5 w-5' />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating:</strong>{item.rating}</h2>
                  <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-blue-900'><strong>Your answer:</strong>{item.userAns}</h2>
                  {/* <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer:</strong>{item.correctAns}</h2> */}
                  <h2 className='p-2 border rounded-lg bg-yellow-50 text-sm text-yellow-900'><strong>Feedback:</strong>{item.feedback}</h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}

        </>}


      <Button onClick={() => router.replace('/dashboard')}>Dashboard</Button>
    </div>
  )
}

export default Feedback
