import React from 'react'
import Dashboard from '@/components/Dashboard'
export const metadata = {
  title: "Dashboard | GetMeAChai",
  description: "Manage your profile, payments, and supporter settings.",
  robots: {
    index: false,
    follow: false,
  },
};


const page = () => {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default page
