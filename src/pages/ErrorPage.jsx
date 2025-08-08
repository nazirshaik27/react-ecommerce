import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/')
        },2000)

        return () => clearTimeout(timeoutId);
    },[navigate])

    const goToHome = () => {
        console.log("Main Goto home")
    }
  return (
     <div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="text-center">
    <h2 class="text-2xl font-bold mb-4">Error Page</h2>
    <button onClick={goToHome} class="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Back to Home
    </button>
  </div>
</div>
  )
}

export default ErrorPage
