import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen mt-80 md:mt-0 bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/42fc5102-b2eb-4574-b5a3-aab587b70896" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-white text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - zahidhasan19932023@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
                <input type="Email" className='my-4 p-2 bg-[#ccd6f6]' placeholder='Email' name='email'/>
                <textarea name="message" className='bg-[#ccd6f6]' placeholder='Message' rows="10"></textarea>
                <button className='text-white border-2 hover:bg-white hover:border-white hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
            </form>
            
        </div>
    );
};

export default Contact;