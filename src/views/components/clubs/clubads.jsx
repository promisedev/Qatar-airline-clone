

const Clubads = (props)=>{ 
const prop = props.props
 let position = prop.position;
 const club  =prop.club;
 let index = prop.index 

    return(
        <section  className='club_ads_item' style={{left:`${index*100}%`,transform:`translateX(-${position}%)`, backgroundImage:`url(${club?.bg})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 120%'}}>
<article className="club_ads_modal">
    <div className="club_tag">{club?.tag}</div>
    <div className="club_desc">{club?.desc}</div>
    <div className="club_button">{club?.link}</div>
</article>

        </section>
    )
}

export default Clubads