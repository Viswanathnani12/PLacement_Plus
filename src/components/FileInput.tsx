'use client'
import React from 'react'
import { Input } from './ui/input'
import { analytics } from "@/app/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from "react";

const FileInput = () => {
    const [file, setFile] = useState(null)

    function handlefileChange(e: any) {
        if (!e.target.files)
            return;
        else {
            const fileref = ref(analytics, '/results/eswar')
            // uploadBytes(fileref,)
            setFile(e.target.files)
        }
    }

    return (
        <Input type='file' onChange={(e) => { handlefileChange }} />
    )
}

export default FileInput
