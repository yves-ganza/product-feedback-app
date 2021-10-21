import { useRouter } from "next/router"

import Layout from "../../components/layout"
import AddComment from "../../components/addComment"
import Comment from "../../components/comment"

export async function getStaticProps({params}){

    const data = require('../../data.json').productRequests[params.id-1]

    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths(){
    const data = require('../../data.json').productRequests
    const paths = data.map(feedback => ({
        params: {
            id: feedback.id.toString()
        }
    }))

    return {paths, fallback: 'blocking'}
}

export default function Feedback({data}) {  
    return(
    <Layout>
        <div className="w-full lg:max-w-3xl pt-20">
            <header className="w-full mb-6">
                <div className="flex justify-between items-center mb-6">
                    <a href="#" className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block text-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <p className="inline-block text-primary text-bold hover:border-b-2">Go Back</p>
                    </a>
                    <button className="px-4 py-2 bg-blue rounded-md text-white hover:bg-blue-hover">Edit Feedback</button>
                </div>
                {/* <!--Feedback container--> */}
                <div className="flex gap-x-10 p-6 bg-white rounded-md">
                    <div className="flex-none ">
                        <div className="bg-primary hover:bg-inter-hover active:bg-blue active:text-white w-full py-2 px-4 text-primary rounded-md">
                            <button className="w-full align-top mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            </button>
                            <p className="mx-auto font-semibold">
                                {data.upvotes}
                            </p>
                        </div>
                    </div>
                    <article className="flex-grow">
                        <h1>{data.title}</h1>
                        <p className="text-base text-secondary">{data.description}</p>
                        <p className="text-blue px-5 py-1 mt-4 rounded-md bg-primary inline-block">{data.category}</p>
                    </article>
                    <div className="flex-none flex gap-x-2 my-auto mx-auto font-semibold text-primary">
                        <span className="inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f2f4ff" viewBox="0 0 24 24" stroke="#f2f4ff">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>                        
                        </span>
                        <span className="inline-block">
                            {data.comments.length}
                        </span>
                    </div>
                </div>
            </header>
            <main>
                {/* <!--Comments container--> */}
                <div className="bg-white rounded-md py-6 px-9 mb-6">
                    <h1>{data.comments.length} comments</h1>
                    <div>
                    {
                        data.comments.map(comment => {
                            return(
                                <Comment {...comment} />
                            )
                        })
                    }                        
                    </div>

                </div>
                {/* <!--Comment input form--> */}
                <AddComment action=""/>
            </main>
        </div>
    </Layout>
    )
}