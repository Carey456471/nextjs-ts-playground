"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation'

const ProfileID = () => {
    const params = useParams();
    const router = useRouter()
    return (
        <div>
        profile id : {params.id}
        <div onClick={() => router.push("/profile")}>
            back to main page
        </div>
        </div>
    )
}

export default ProfileID
