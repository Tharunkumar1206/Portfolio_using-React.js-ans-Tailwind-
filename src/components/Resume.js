import resumeImg from "../assets/resume.jpg"

export default function Resume(){

    const config = {
        link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
    return <section id="resume" className="flex flex-col md:flex-row bg-secondary p-5">
        <div className=" py-5 md:w-1/2 flex justify-center md:justify-end">
            <img className="w-[400px]" src={resumeImg} alt=""/>  
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white">
                <h1 className="text-4xl  border-b-4 border-primary mb-5 w-[140px] font-bold">Resume</h1>
                <p className="pb-5">You can view my resume <a className="btn" href={config.link}>Download</a></p>
            </div>
        </div>
    
    </section>
}