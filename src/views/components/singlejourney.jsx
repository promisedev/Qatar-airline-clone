
import {ArrowForward} from '@material-ui/icons'

const Singlejourney = (props)=>{
const info = props.props;
    return(
        <article className="single_journey">
           <div className="single_journey_bg" style={{ backgroundImage:`url(${info?.bg})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
           <div className="single_journey_link">
            <span>{info?.link}</span>
            <span><ArrowForward/></span>
           </div>
        </article>
    )
}

export default Singlejourney