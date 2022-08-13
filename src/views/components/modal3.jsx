import { useState } from 'react';
import ClubAds from './clubs/clubads'
import club from './qatar_club.json'


const Modal3 = ()=>{

const [position,setPosition]=useState(0)

const activateClub = (e)=>{
const payload = e.currentTarget.dataset.id;

setPosition((payload-1)*100);

const ele = e.currentTarget;
const allele = e.currentTarget.parentElement.children

ele.classList.add('active_club_menu')
let len = allele.length
for(let i = 0; i<len; i++){
    let element = allele[i]
    if(element.dataset.id !== payload){
        element.classList.remove('active_club_menu')
    }
}
}

    return(
        <section className="qatar_club">
<article className="qatar_club_menu">
{club.map((club,index)=>{

    return(
        <div className='single_club_menu' onClick={activateClub} data-id={index+1} key={index}>{club.name}</div>
    )
})}

</article>
{/* ---------------------------------- */}
<article className="qatar_club_ads">

{ club.map((club,index)=>{

    return(
        <ClubAds props={{position,club,index}} key={index}/>
    )
})}

</article>

        </section>
    )
}

export default Modal3