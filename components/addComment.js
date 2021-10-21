import { useState } from "react"

export default function AddComment({action}){
    const [state, setState] = useState(0)
    const handleChange = (e) => {
        setState(e.target.value.length)
    }
    return(
        <form action={action} className="bg-white rounded-md p-6 text-secondary mb-8">
            <label className="text-2xl text-primary text-bold " htmlFor="comment-input">Add comment</label>
            <textarea onChange={handleChange} className="pt-4 pl-6 pb-12 my-6 bg-primary block w-full acive:border-blue" type="text" maxLength={250} placeholder="Type your comment here"/>
            <div className="flex justify-between items-center mb-6">
                <p>{250 - state} characters left</p>
                <button className="px-6 py-3 text-white bg-pink hover:bg-pink-hover rounded-md">Post Comment</button>
            </div>
        </form>
    )
}