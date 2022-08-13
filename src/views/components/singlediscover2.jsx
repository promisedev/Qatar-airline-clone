
// work on single discover modal

import { useRef } from "react"


const Singlediscover =(props)=>{
const info = props.props
 
const desc1 = useRef(null)
const desc2 = useRef(null)
const desc3 = useRef(null)
const desc4 = useRef(null)



const changeBg = (e)=>{
const txt1 = desc1.current;
const txt2 = desc2.current;
const txt3 = desc3.current;
const txt4 = desc4.current;

const target= e.currentTarget.children[1]
target.classList.add('show_discover_desc2')
txt4.classList.add('change_col');
txt3.classList.add('change_col');
txt2.classList.add('change_col');
txt1.classList.add('change_col');


 }

const removerchangeBg = (e)=>{
const txt1 = desc1.current;
const txt2 = desc2.current;
const txt3 = desc3.current;
const txt4 = desc4.current;

const target= e.currentTarget.children[1]
target.classList.remove('show_discover_desc2')
txt4.classList.remove('change_col');
txt3.classList.remove('change_col');
txt2.classList.remove('change_col');
txt1.classList.remove('change_col');


 }








    return(
        <section className="single_discover2" onMouseOver={changeBg} onMouseOut={removerchangeBg}>
            <article className="single_discover_bg2" style={{ backgroundImage:`url(${info?.bg})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></article>
            <article className="single_discover_desc2">
             <div className="discover_desc_tag">
                <span className="d_desc11" ref={desc1}>{info?.tag}</span>
                <span className="d_desc12" ref={desc2}>{info?.date}</span>
            </div>  
             <div className="discover_desc_tag">
                <span className="d_desc13" ref={desc3}>{info?.type}</span>
                <span className="d_desc14" ref={desc4}>{info?.price}</span>
            </div> 

            <article className="discover_desc22" >
        <div id="desc1">Book now</div>
        <div id="desc2">Discover</div>
        </article>

            </article>
                 
        </section>
    )
}

export default Singlediscover