
import Bookingmodal from "./bookingmodal"
import {Link} from 'react-router-dom'
import { useState } from "react"

const Qatarmodal = ()=>{

let [count,setcount] = useState(1)

const increase = ()=>{
 let num = count+=1   
setcount(num)
}
const decrease = ()=>{
   if(count ===1){} else{
    let num = count-=1    
setcount(num)
   }
 
}


    return(

    <section className="qatar_table">
        <article className="qatar_overview">
            Explore Qatar during your journey with amazing stopover packages starting from USD 14 pp at 4-star and 5-star hotels. <Link to=''>Qatar entry rules apply.</Link>
        </article>
        <Bookingmodal/>
        <article className="qatar_aside">
<div className='qatar_aside1'>
<div className="qatar_aside_txt">When would you like to add a stop in Doha during your journey?</div>
<div className="qatar_aside_radio">
<input type='radio' name='stopover' id='depature'/>
<label htmlFor="depature" className='radio_label'>Depature</label>
<input type='radio' name='stopover' id='return'/>
<label htmlFor="return" className='radio_label'>Return</label>
</div>
</div>
{/* ----------------------------- */}
<div className='qatar_aside2'>
    <div className="qatar_aside_txt">How many days would you like to stay in Qatar?</div>
<div className="qatar_aside_count">
    <div className="q_count" onClick={decrease}>-</div>
    <div className="q_number">{count}</div>
    <div className="q_count" onClick={increase}>+</div>
</div>
    
</div>
        </article>
    </section>
    )
}

export default Qatarmodal