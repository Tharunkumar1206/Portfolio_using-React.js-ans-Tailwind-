import websiteImg1 from "../assets/ecommerce-websites.jpg"
import websiteImg2 from "../assets/food-ecommerce.jpg"
import websiteImg3 from "../assets/website-blog.jpg"

export default function Project(){

    const config ={
        projects : [
            {
                image : websiteImg1,
                description: "A ecommerce website built with MERN Stack",
                link: "https://github.com/"
            },
            {
                image : websiteImg2,
                description: "Food Ecommerce website like swiggy, built with Angular and .Net",
                link:"https://github.com/"
            },
            {
                image : websiteImg3,
                description: "Basic Blog website, built with NextJs and MangoDB",
                link: "https://github.com/"
            }
        ]
    }
    return <section id="project" className=" flex  flex-col bg-primary py-10  px-5 text-white justify-center ">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5 ">
                 <h1 className="text-4xl  border-b-4 border-secondary mb-5 w-[140px] font-bold">Projects</h1>
                 <p>This are some of the my best project built with java and react.js..</p>
            </div>
        </div>
        <div className="w-full">
            <div className="flex flex-col md:flex-row px-10 h-200 gap-5">
                {config.projects.map((project) => (
                    <div className="relative">
                        <img className="h-[230px] w-[400px]" src={project.image}/>
                        <div className="project-desc">
                            <p className="text-center p-5">{project.description}</p>
                            <div className="flex justify-center">
                                <a className= "btn" target="_blank" href={project.link}>View Project</a>
                            </div>
                        </div>
                            
                    </div>
                ))}
                
            </div>
        </div>
    </section>
}