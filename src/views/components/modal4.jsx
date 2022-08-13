

import SinglePlaces from "./singleplaces"
import SinglePlaces2 from "./singleplaces2"
import places from './places.json'
import { assertPlaceholder } from "@babel/types"

const Modal =()=>{

    return(
        <section className="home_modal">
            <article className="modal_header">Let's go places together</article>
            {/* ----------------------------------- */}
<article className="modal_header1">Discover the latest offers and news and start planning your next trip with us.</article>
{/* ----------------------------------------------- */}
<article className="modal_places_cont">
{/* ---------------------------- */}
<div className="modal_places_item">
    {places.map((place,index)=>{

    if(place.id === 1){
        return (<SinglePlaces props={place} key={index}/>)
    }
})
    }
    

<div className="modal_places_colage">
   {places.map((place,index)=>{
if(place.id === 2|| place.id === 3|| place.id === 4){
        return (<SinglePlaces2 props={place} key={index}/>)
    }})}
</div>
</div>
{/* --------------------------------- */}
<div className="modal_places_item">
   {places.map((place,index)=>{
if(place.id === 5|| place.id === 6){
 return (<SinglePlaces props={place} key={index}/>)
    }}) }
</div>
</article>
        </section>
    )
}

export default Modal