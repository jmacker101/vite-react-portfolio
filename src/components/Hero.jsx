import ProfilePic from "../assets/ProfilePic.jpg"
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <img src={ProfilePic} alt="Jeovan Mills" className="border border-stone-900 rounded-3xl"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start mt-10">
                    <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Jeovan Mills</h2>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero