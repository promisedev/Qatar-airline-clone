
import SingleOption from "./singleoption"
import SingleOption2 from "./singleoption2"
const Modal =()=>{

    return(
        <section className="home_modal">
            <article className="modal_header">Start planing your next trip</article>
            {/* ----------------------------------- */}
<article className="modal_header1">Thinking of traveling somewhere soon? here are some options to help you get started.</article>
{/* ----------------------------------------------- */}
<article className="modal_option_cont">
{/* ---------------------------- */}
 <div className="modal_option1" >
<SingleOption props={{bg:"https://www.qatarairways.com/content/dam/images/renditions/horizontal-2/miscellaneous/map/h2-destination-discovery-map-laptop.jpg",tag:"Explore our destinations",link:"Find flight and fares"}}/>
</div>  
{/* ---------------------------- */}
<div className="modal_option2" >
<SingleOption props={{bg:"https://www.qatarairways.com/content/dam/images/renditions/horizontal-2/destinations/maldives/maldives/h2-maldives-beach-sunrise.jpg",tag:"Your perfect holiday awaits",link:"Book a package"}}/>
</div>
{/* ---------------------------- */}
<div className="modal_option3" >
<div className='modal_option3_item'><SingleOption2 props={{bg:"https://www.qatarairways.com/content/dam/images/renditions/horizontal-3/brand/aircraft/a350/h3-a350-1000-doha2.jpg",tag:"Travel requirements",link:"Find out more"}}/></div>
<div className='modal_option3_item'><SingleOption2 props={{bg:"https://www.qatarairways.com/content/dam/images/renditions/horizontal-3/brand/qsuite/h3-qsuite-ife-dine.jpg",tag:"Elevate your experience",link:"Purchase ad-ons"}}/></div>
</div>

</article>
        </section>
    )
}

export default Modal