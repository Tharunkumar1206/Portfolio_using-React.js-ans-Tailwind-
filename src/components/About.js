import AboutImg from "../assets/about.png"

export default function About(){
    const config={
        line1 : "Hi, My name is TharunKumar, I am a Software developer. I build beautiful website using react js and Tailwind css..",
        line2 : "I'm a proficient in Frontend skills like React.js HTML, CSS,Bootstrap, Tailwind css..",
        line3 : "In backend I know Java, Python and C.."
    }
    
    return <section id="about" className="flex flex-col md:flex-row bg-secondary p-5">
        <div className=" py-5 md:w-1/2">
            <img src={AboutImg} alt="no_about_image"/>  
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white">
                <h1 className="text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold">About Me</h1>
                <p className="pb-5">{config.line1}</p>
                <p className="pb-5">{config.line2}</p>
                <p>{config.line3}</p>
            </div>
        </div>
    
    </section>
}