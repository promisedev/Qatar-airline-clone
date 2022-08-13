import {ExpandMore} from '@material-ui/icons'


const Component = ()=>{


    return(
        <section className="booking_option">
         <article className="booking_option1">
            Check in for your flight at your convenience
        </article>  
         {/*----------------------------------  */}
        <article className="booking_option2">
           <div className="option_form_2" style={{borderRight:'0px'}}>From/Flight number</div> 
            <div className="option_form_2 " style={{borderRight:'0px'}}>To</div>
            <div className="option_form_2 form_2_op">
                <span>11 August</span>
                <ExpandMore/></div>
           <div className="option_form_2 a_form ">Search flights</div>
        </article>
         
        </section>
    )
}

export default Component