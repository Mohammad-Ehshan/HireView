'use client'
import React, { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircle } from 'lucide-react';
import {v4 as uuidv4} from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { chatSession } from '@/utils/GemeniAIModal';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';


function AddNewInterview() {

  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading,setLoading]=useState(false);
  const [jsonResponse,setJsonResponse]=useState([]);
  const {user}=useUser();
  const router=useRouter();

  const onSubmit=async(e)=>{
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition,jobDesc,jobExperience);

    const InputPrompt=`Job Position:${jobPosition} , Job Description:${jobDesc},Years of Experience:${jobExperience} ,Return exactly ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions and their corresponding answers in a valid JSON format.Important:- Ensure that the response is a valid JSON array of objects - Each object should have two fields 'question' and 'answer'- Do not include any additional text, instructions, or comments outside of the JSON structure. `

    const result=await chatSession.sendMessage(InputPrompt);
    const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')
    setJsonResponse(MockJsonResp);

    if(MockJsonResp){
    const resp=await db.insert(MockInterview).values({
      mockId:uuidv4(),
      jsonMockResp:MockJsonResp,
      jobPosition:jobPosition,
      jobDesc:jobDesc,
      jobExperience:jobExperience,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-yyyy')
    }).returning({mockId:MockInterview.mockId})

    console.log("Inserted Id",resp)
    if(resp){
      setOpenDialog(false);
      router.push('/dashboard/interview/'+resp[0]?.mockId)
    }
  }
  else console.log("MockJsonRespError");


    setLoading(false);
  }

  return (
    <div>
      <div className='px-4 py-2 border rounded-lg  hover:scale-105 hover:shadow-md cursor-pointer transition-all bg-gradient-to-r from-white to-zinc-300 '
      onClick={()=>setOpenDialog(true)}
      >
        <h2 className='text-blue-800 font-medium text-lg text-center'>+Add New</h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className="bg-gradient-to-r from-slate-400 to-gray-600">
          <DialogHeader>
            <DialogTitle className="text-xl text-gray-800">Job Interview Information</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
              <div>
              <h2 className='text-gray-700'>Add details about your job</h2>
              
              <div className='mt-7 my-3'>
                <label className='text-black'>Job Role</label>
                <Input placeholder="Ex: full stack developer" required
                onChange={(e)=>setJobPosition(e.target.value)}
                ></Input>
              </div>
              <div className='my-3'>
                <label className='text-black'>Job Description</label>
                <Textarea placeholder="Ex: Description About Your Job" required
                onChange={(e)=>setJobDesc(e.target.value)}
                />
              </div>
              <div className='my-3'>
                <label className='text-black'>Job Experience</label>
                <Input placeholder="Ex:1,2,3,4" type="number" required
                onChange={(e)=>setJobExperience(e.target.value)}
                max="60" min="0"/>
              </div>
              {/* extra */}
              <div className='my-3'>
                <label className="text-black">Total Question</label>
                <Input placeholder="Ex:2,5,10" type="number" required max="60" min="0"/>
              </div>
              <div className='mt-7 my-3'>
                <label className='text-black'>Company</label>
                <Input placeholder="Ex:Amazon,Google,Flipkart" required/>
              </div>
              </div>
              <div className='flex gap-5 justify-end '>
                <Button type="button" className="bg-blue-400" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                <Button className="bg-sky-800" type="submit" disabled={loading}>
                  {loading?
                  <>
                  <LoaderCircle className='animate-spin'/>
                  Generating Questions
                  </>: 'Start'}
                  </Button>
              </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddNewInterview
