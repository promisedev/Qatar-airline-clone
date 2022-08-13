import FooterLink from "./footerlink"
import footer from './footer.json'
import footer2 from './footer2.json'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {ExpandMore} from '@material-ui/icons';

import award from './award.json'
import { useRef } from "react";


const Modal7 = ()=>{

    const qatar = useRef(null)
    const ratting = useRef(null)

const footerHide= (e)=>{
e.currentTarget.classList.toggle('rotate_footer_hide')
const qatar_ele  = qatar.current;
const ratting_ele  = ratting.current;
qatar_ele.classList.toggle('hide_qatar_footer2')
ratting_ele.classList.toggle('hide_footer_ratting')

}


    return(
        <section className="qatar_footer">
<article className='qatar_footer1' style={{backgroundImage:'url("../../graphics/footer_bg.png")', backgroundRepeat:'no-repeat', backgroundSize:'105% 105%', backgroundPositionX:'-3px'}}></article>

<article className='qatar_footer2' ref={qatar}>

 <article className="qatar_footer_link_cont" >
    <div className="qatar_footer_link">
      { footer.map((footer,index)=>{
      
      return(<FooterLink props={footer} key={index}/>)}) 
}
    </div>
    <div className="qatar_footer_cert">
<div className="footer_cert_logo"><img src='https://www.qatarairways.com/content/dam/images/custom/mdd/footer-iocns/Theqa_logo_SVG.svg' alt='certified'/></div>
<div className="footer_cert_social">

 <span>Let's stay connected</span>
  <div className="footer_social_icon">
<span><FacebookIcon/></span>
<span><TwitterIcon/></span>
<span><LinkedInIcon/></span>
<span><YouTubeIcon/></span>
<span><InstagramIcon/></span>

</div>  
</div>


    </div>
</article>  
{/* ------------------------------------- */}
<article className="qatar_footer_ratting" ref={ratting}>

   {award.map((award,index)=>{

    return(<div className='footer_ratting' key={index}>
    <div className='footer_ratting_logo' style={{backgroundImage:`url(${award?.logo})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
    <div className='footer_ratting_desc'>{award?.title}</div>
    </div> )
   })}

</article>  

</article>
<article className='qatar_footer3'>
    <div className='footer_hide' onClick={footerHide}><ExpandMore/></div>
    <div className="qatar_footer3_item1">
        <ul>
            {footer2.map((footer,index)=>{
            
            return(<li key={index}>{footer.name}</li>)})}
        </ul>
    </div>
    <div className="qatar_footer3_item2">Qatar Airways. All rights reserved</div>
</article>

        </section>
    )
}

export default Modal7