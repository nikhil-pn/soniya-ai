import Link from 'next/link'

const Title = () => {
    return (

        <div className=" space-y-1 cursor-pointer">
            <Link href="/chat">
                <h2 className="z-10 text-[20px] font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-5xl whitespace-nowrap bg-clip-text">
                    Hello, Im Soniya
                </h2>
                <h1 className="z-10 text-2xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-[30px] md:text-6xl lg:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">

                    An Artificial Intelligence
                </h1>
            </Link>
        </div>
    )
}

export default Title