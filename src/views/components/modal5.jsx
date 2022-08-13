
import SingleJourney from "./singlejourney"
import journey from './journey.json'
const Modal =()=>{

    return(
        <section className="home_modal">
            <article className="modal_header">Complement your journey</article>
            {/* ----------------------------------- */}
<article className="modal_header1">Upgrade or save up to 20% when you purchase extra baggage, lounge access or meet and assist services online to make your journey even more memorable.</article>
{/* ----------------------------------------------- */}
<article className="modal_journey_cont">
{/* ---------------------------- */}
{journey.map((journey,index)=>{

return(
<SingleJourney props={journey} key={index}/>)
})}

</article>
        </section>
    )
}

export default Modal