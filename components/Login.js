import React from 'react'
import Image from "next/image"
import { useMoralis } from 'react-moralis';
function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className='bg-black relative text-white'>
            <h1>i am login screen</h1>
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
                <Image className='object-cover rounded-full' src="/ape.png" width={200} height={200} />
                <button onClick={authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>Login</button>
            </div>
            <div className='w-full h-screen'>
                <Image src="/cyber.jpg" layout='fill' objectFit='cover' />
            </div>
        </div>
    )
}

export default Login