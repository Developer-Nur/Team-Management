import { useForm } from '@inertiajs/react';
import React from 'react';

const Create = () => {
    const { data, setData, post, processing, errors } = useForm ({
       body: "",
      })

    //   handle form
    function submite (e){
        e.preventDefault();
        post('/posts');
    }
    return (
        <>
            <div className='min-h-screen'>
                <h1 className='mx-7 text-[40px] mb-5 text-center'>Create a new post!</h1>
                <div className='w-1/2  mx-auto text-center mt-5'>
                    <form onSubmit={submite} className='w-full mx-auto flex flex-col justify-center items-center gap-4 '>
                        <textarea 
                        rows='10' 
                        placeholder='Type your content here' 
                        className={` w-full ${errors.body ? 'border-red-600': 'border-blue-500'} border-2 rounded-lg p-4`}  
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        >
                        </textarea>
                        {errors.body && <p className='text-red-500'>{errors.body}</p>}
                        <button
                         type='submit' 
                         value='submit' 
                         className=' w-full bg-blue-500 rounded-lg px-4 py-2 font-medium text-white'
                         disabled={processing}
                         >
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </>
    );
};

export default Create;