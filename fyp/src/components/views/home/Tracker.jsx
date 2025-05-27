// components/views/home/Tracker.jsx
import React from 'react'
import ProjectProgressCard from '../home/ProjectProgressCard'
import SectionContainer from '../../layouts/SectionContainer'

const Tracker = () => {
  const milestones = [
    {
      title: "Literature Review",
      details: "Completed on March 15, 2023",
      status: "Completed"
    },
    {
      title: "Requirements Analysis",
      details: "Completed on April 2, 2023",
      status: "Completed"
    },
    {
      title: "System Design",
      details: "In progress (Due: May 10, 2023)",
      status: "In Progress"
    },
    {
      title: "Implementation",
      details: "Not started",
      status: "Not Started"
    }
  ]

  return (
    <SectionContainer className="py-8">
      <ProjectProgressCard
        title="AI-Based Chatbot for Education"
        team="Ali, Aisha, Omar"
        supervisor="Dr. Ahmad Khan"
        status="In Progress"
        progress={65}
        milestones={milestones}
      />
    </SectionContainer>
  )
}

export default Tracker