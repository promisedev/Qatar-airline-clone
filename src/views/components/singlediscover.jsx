
// work on single discover modal

import { useRef } from "react";


const Singlediscover =(props)=>{
 const info = props.props
//console.log(info);
const desc = useRef(null)
const desc1 = useRef(null)
const desc2 = useRef(null)
const desc3 = useRef(null)
const desc4 = useRef(null)
const desc5 = useRef(null)



 const changeBg = (e)=>{
const current_desc = desc.current;
const txt1 = desc1.current;
const txt2 = desc2.current;
const txt3 = desc3.current;
const txt4 = desc4.current;
const ele = desc5.current;

current_desc.classList.add('single_discover_change_bg');
ele.classList.add('visible_ele');
txt4.classList.add('change_col');
txt3.classList.add('change_col');
txt2.classList.add('change_col');
txt1.classList.add('change_col');
 }

const removerchangeBg = (e)=>{
const current_desc = desc.current;
const txt1 = desc1.current;
const txt2 = desc2.current;
const txt3 = desc3.current;
const txt4 = desc4.current;
const ele = desc5.current;

current_desc.classList.remove('single_discover_change_bg');
ele.classList.remove('visible_ele');
txt4.classList.remove('change_col');
txt3.classList.remove('change_col');
txt2.classList.remove('change_col');
txt1.classList.remove('change_col');
 }




 
    return(
        <section className="single_discover" onMouseOver={changeBg} onMouseOut={removerchangeBg}>
            <article className="single_discover_bg" style={{ backgroundImage:`url(${info?.bg})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></article>
            <article className="single_discover_desc" ref={desc} >
                <div className="discover_desc1" >
             <div className="discover_desc_tag">
                <span className="d_desc1"  ref={desc1}>{info?.tag}</span>
                <span className="d_desc2" ref={desc2}>{info?.date}</span>
            </div>  
             <div className="discover_desc_tag">
                <span className="d_desc3" ref={desc3}>{info?.type}</span>
                <span className="d_desc4" ref={desc4}>{info?.price}</span>
            </div> 
</div>
{/* ------------------------------ */}
       <div className="discover_desc2" ref={desc5}>
        <div id="desc1">Book now</div>
        <div id="desc2">Discover</div>
        </div>     
            </article>
        </section>
    )
}

export default Singlediscover