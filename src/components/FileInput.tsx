'use client'
import React from 'react'
import { Input } from './ui/input'
import { analytics } from "@/app/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from "react";
import { Button } from './ui/button';

const FileInput = () => {
    const [file, setFile] = useState<any>(null)

    function upload(e: any) {

        if (file !== null) {
            const fileref = ref(analytics, `/results/${file[0].name}`)
            uploadBytes(fileref, file[0]).then((data) => {
                getDownloadURL(data.ref).then((url) => {
                    console.log(url)
                })
            })
        }
        else {
            alert('Upload File')
        }
    }

    return (
        <> 
            <form >
                <Input type='file' onChange={(e) => { setFile(e.target.files) }} className='border border-black' />
                <Button onClick={upload} className='w-full mt-4 bg-blue-600'>Add Result</Button>
            </form>
        </>
    )
}

export default FileInput
