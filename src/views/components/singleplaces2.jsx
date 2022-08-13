




import {ArrowForward} from '@material-ui/icons'

const Singleplaces = (props)=>{
const info = props.props;
    return(
        <article className="single_places2">
        <div className="single_places_bg2" style={{ backgroundImage:`url(${info?.bg})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>

        <div className="single_places_desc2">
            <div className="single_places_tag">{info?.tag}</div>
            <div className="single_places_overview">{info?.desc}</div>
            <div className="single_places_button">{info?.link} <ArrowForward/></div>
            
        </div>
        </article>
    )
}

export default Singleplaces