import { useRef, useState, useEffect } from "react";
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import Bookingmodal from './bookingmodal'
import Qatarmodal from "./qatarmodal"

const Component = ()=>{
  const ele1 = useRef(null)
  const ele2 = useRef(null)

  const [isbook,setisbook]=useState(true)
  //const [isqatar,setisqatar]=useState(false)

useEffect(() => {
  const f_ele = ele1.current;
  f_ele.classList.add('active_aside_nav_item')
},[])


 const activeAside=(e)=>{

const f_ele = ele1.current;
const q_ele = ele2.current;

 const ele = e.currentTarget;
 const txt = e.currentTarget.textContent;
 ele.classList.add('active_aside_nav_item')
 if(txt === 'Flights'){
    q_ele.classList.remove('active_aside_nav_item')
    setisbook(true)
 }else 
 if(txt === 'Qatar Stopover'){
f_ele.classList.remove('active_aside_nav_item')
setisbook(false)
  }


 }

    return(
        <section className="booking_body">
<article className="aside_desc"><span>Just from $14</span></article>
            {/* ----------------------------- */}
<article className='aside_nav'>
<div className="aside_nav_item" onClick={activeAside} ref={ele1}>Flights</div>
<div className="aside_nav_item" onClick={activeAside} ref={ele2}>Qatar Stopover</div>
</article>
            {/* ----------------------------- */}
<article className='aside_cont'>
{isbook?<Bookingmodal/>:<Qatarmodal/>}

</article>
          {/*---------------------  */}
<article className='aside_footer'>
<div className="aside_footer_item footer_item1">+ Add promo code</div>
<div className="aside_footer_item footer_item2">Show flights <FlightTakeoffOutlinedIcon/></div>

</article>
            
</section>
    )
}

export default Component