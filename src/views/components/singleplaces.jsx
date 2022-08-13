
import {ArrowForward} from '@material-ui/icons'

const Singleplaces = (props)=>{
const info =props.props;
    return(
        <article className="single_places">
        <div className="single_places_bg" style={{ backgroundImage:`url(${info?.bg})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>

        <div className="single_places_desc">
            <div className="single_places_tag">{info?.tag}</div>
            <div className="single_places_overview">{info?.desc}</div>
            <div className="single_places_button">{info?.link} <ArrowForward/></div>
            
        </div>
        </article>
    )
}

export default Singleplaces