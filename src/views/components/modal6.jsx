import { useRef } from "react"


const Modal6 = ()=>{
const subscribe = useRef(null)

const subPosition=(e)=>{
const sub = subscribe.current
sub.classList.toggle('right_subs_tag5')
}


    return(
        <section className='qatar_subscription'>
<article className='qatar_subs_cont' style={{ backgroundImage:`url('https://www.qatarairways.com/content/dam/images/custom/enl-subscribe-component/NL_Background_Desktop.png')`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}>
<article className="qatar_subs_bg">
    <article className="qatar_subs_item">
<div className="qatar_subs_tag1" >Never miss an offer</div>
<div className="qatar_subs_tag2">Subscribe and be the first to receive our exclusive offers.</div>
<div className="qatar_subs_tag3"><input type='email' name='email' placeholder="Email Address"/>
<input type='text' name='city' placeholder="Prefered city of departure"/>
</div>
<div className="qatar_subs_tag4"> <input type='checkbox' name='check' id='check' onClick={subPosition}/><label htmlFor="check">yes, i would like to receive news and offers from Qatar Airways</label></div>
<div className="qatar_subs_tag5" ref={subscribe}>Subscribe</div>
</article>
</article>
</article>
            </section>
    )
}

export default Modal6