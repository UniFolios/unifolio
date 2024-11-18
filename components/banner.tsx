const Banner = () => {
    return ( 
        <div className="w-full flex justify-end relative py-4">
            <div className="absolute top-48 left-0">
                <h1 className="text-8xl">Hugo Stiglitz</h1>
                <p className="text-2xl mt-4">Full stack Developer</p>
            </div>
            <div>
                <img src="/banner.png" alt="banner" />
            </div>
        </div>
     );
}
 
export default Banner;