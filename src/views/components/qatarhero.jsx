import Navigation from "./navigation"

const Qatar = ()=>{



    return(
        <section className="qatar_hero" style={{backgroundImage:`url('../../graphics/hero.png')`, backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}>
            {/* ------------------------- */}
        <Navigation/>
        {/* ----------------------- */}
        <article className="qatar_hero_desc">
            <div className="qatar_hero_desc_h1">Incredible offers to Maldives</div>
            <div className="qatar_hero_desc_h2">All-inclusive fares from USD 1,621*</div>
            <div className="qatar_hero_desc_button">Book now</div>
        </article>
        </section>
    )
}

export default Qatar