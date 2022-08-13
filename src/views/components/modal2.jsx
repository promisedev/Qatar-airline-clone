
import EditIcon from '@material-ui/icons/Edit'
import {IconButton} from '@material-ui/core'
import Navlink from './nav_link.json'
import { useEffect, useRef, useState } from 'react'
import Singlediscover from './singlediscover'
import Singlediscover2 from './singlediscover2'
 import explore from './explore.json'


const Modal =()=>{
//const [isfirst,setisfirst] =useState(null


    return(
        <section className="home_modal">
            <article className="modal_header">Find great fares</article>
            {/* ----------------------------------- */}
<article className="modal_header1">From
 <div className="modal_edit">
   <div className="modal_edit_tag">Lagos LOS</div> <IconButton className='modal_button_edit'><EditIcon className='modal_mui_edit'/></IconButton>
 </div>
 </article> 
{/* ----------------------------------------------- */}
<article className="modal_discover_cont">
{/* ---------------------------- */}
 
<div className='modal_colage1'>
<div className='modal_discover_item_big'>
{explore.map((explore,index)=>{

    if(explore.id === 1){
        return (<Singlediscover props={explore} key={index}/>)
    }
})
    }
</div>
{/* --------------------------- */}
<div className='modal_discover_item_big item_big_colage'>
 {explore.map((explore,index)=>{
 
 if(explore.id === 2 || explore.id === 3|| explore.id === 4 || explore.id === 5){
        return (<Singlediscover2 props={explore} key={index}/>)
    }

})
 }  

</div>
</div> 
{/* --------------------------------------------------- */}
<div className='modal_colage2'>

{explore.map((explore,index)=>{
  if(explore.id === 6 || explore.id === 7|| explore.id === 8 || explore.id === 9){
        return (<Singlediscover2 props={explore} key={index}/>)
    }
})
 } 
</div>

</article>

<article className='modal_discover_footer'>
    <div className='discover_footer_button'>
        View more fares
    </div>
</article>
        </section>
    )
}

export default Modal