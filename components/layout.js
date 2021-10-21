export default function Layout({children}){
    return(
        <div className="flex justify-center bg-primary min-w-screen min-h-screen px-4 font-primary">
            {children}
        </div>
    )
}