import PlanceButton from "./PlaneButton"

const Title = () => {
    return (
        <div className="space-y-1  absolute bottom-40  z-10  ">
            {/* <h2 className="z-10 text-2xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-5xl whitespace-nowrap bg-clip-text">
                Join the waitlist for
            </h2> */}
            <div className="flex items-center text-[10px] relative justify-center">

            {/* <PlanceButton></PlanceButton> */}
            </div>
            <h1 className="z-10 text-2xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">
                H3lios Blockchain Launch
            </h1>
        </div>
    )
}

export default Title