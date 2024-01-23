"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profile = () => {
    const router = useRouter()

  return (
    <div>
      <h1>my list of profiles</h1>
      <div>
        <div className='flex flex-col'>
            <Link href={"/profile/1"}>
                profile 1
            </Link>
            <Link href={{pathname: "/profile/2", query: {
                userName: "Apple"
            }}}>profile 2 aaa</Link>
            <Link href={"/profile/3"}>profile 3</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
