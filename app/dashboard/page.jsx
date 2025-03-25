'use client'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
import Overview from '@/components/ui/Overview'

function Dashboard() {
  return (
    <>
    <Overview/>
    <InterviewList/>
    </>
  )
}

export default Dashboard
