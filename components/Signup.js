'use client'
import { Amplify} from 'aws-amplify';
//import awsExports from '../src/aws-exports'; // The path may vary
//import config from '../src/amplifyconfiguration.json';
//import { createSignup } from "../src/graphql/mutations";

//import { CreateSignupMutation } from "@/API";
//import DialogForm from "../dialogform/page";
import FormEvent from 'react'
import { useState, ChangeEvent, ChangeEventHandler } from 'react';
import { generateClient } from "aws-amplify/data";






const client = generateClient()

export default function SignupForm() {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [email,setEmail] = useState()
  const [open,setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  async function handleSubmit(FormEvent) {
    FormEvent.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const formData = new FormData(FormEvent.currentTarget)
      console.log("Form Data", formData.get("email"))
      // const response = await fetch('/api/submit', {
      //   method: 'POST',
      //   body: formData,
      // })

      const result = await client.models.SignUpUser.create({
        email: formData.get("email")
      })
     
    //  const result = await client.graphql({
    //   query:createSignup,
    //   variables:{
    //     input:{
    //        email: formData.get("email")?.toString()
    //     }
    //   }

    // })

      // if (!response.ok) {
      //   throw new Error('Failed to submit the data. Please try again.')
      // }
 
      // Handle response if necessary
      //const data = await response.json()
      // ...
    } catch (error) {
      // Capture the error message to display to the user
     // setError(error.message:string)
      console.error(error)
    } finally {
      setEmail(" ")
      setIsLoading(true)
      setSuccess(true)
    }
  }
  return (
    <form
    onSubmit={handleSubmit}
    className=" is-revealing flex flex-col gap-2 sm:flex-row"
  >
    <div className="w-full flex flex-row flex-grow md:flex-grow justify-center sm:w-full flex-wrap">

      <label className="hidden" htmlFor="email" aria-hidden="true">
        Email
      </label>
      <input
        required
        placeholder="Your best email&hellip;"
        id="email"
        name="email"
        type="email"
        value={email}
  
        autoComplete="off"
        className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
      />
      {success && (
        <div className="mt-2 text-xs italic text-[#f43f5e]">Email submitted successfully!</div>
      )}
      </div>
      <div className="flex-shrink px-3">
      <button
      className="-mt-px bg-gradient-to-r from-[#ec4899] to-[#f43f5e] focus:accent-[#50d71e] inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0  px-7 py-4 text-center font-medium leading-4 text-white no-underline"
      type="submit" onClick={handleClick}
    >
      Get Early Access
    </button>
   
    </div>

    
     
   
  </form>
  )
}