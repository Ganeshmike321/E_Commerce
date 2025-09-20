import React from 'react'

export default function NewsletterBox() {
    function onSubmitHandler(event) {
        event.preventDefault()

    }

    return (
        <div className='text-center'>
            <p>Subscribe now & get 20% off </p>
            <p>Exclusive offers and new arrivals straight to your inbox.</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
                <input className='w-full sm:flex-1 outline-none' required type='email' placeholder='Enter your email' />
                <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

