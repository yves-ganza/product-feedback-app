import Image from 'next/image'

export default function Comment({id, content, user,replies}){
    console.log(replies)
    console.log(id)
    return(
        <article className='pl-8 mt-8'>
            <header className='flex items-center'>
                <div className='flex-none w-10 h-10'>
                    <img className='rounded-full' src={user.image} alt={user.name}/>
                </div>
                <div className='flex-grow pl-8'>
                    <h2>{user.name}</h2>
                    <p>@{user.username}</p>
                </div>
                <button className='flex-none text-blue'>Reply</button> 
            </header>
            <main className='flex pl-8'>
                <span className='flex-none w-10 h-10'></span>
                <p className='flex-grow'>{content}</p>
            </main>
            {
                replies &&             
                <footer>
                {
                    replies.map(reply =>{
                        return (
                            <Comment content={reply.content} user={reply.user} replies = {reply.replies || null}/>
                        )
                    })
                }
                </footer>
            }
        </article>
    )
}