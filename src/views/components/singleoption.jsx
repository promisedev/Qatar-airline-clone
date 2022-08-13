import { ArrowForward } from "@material-ui/icons"

 
const Singleoption = (props)=>{
let info = props.props;

    return(
        <section className="single_option">
            <article className="single_option_bg" style={{ backgroundImage:`url(${info?.bg})`, backgroundRepeat:'no-repeat', backgroundSize:'120% 130%'}}>
                <div className='single_option_tag'>
                    {info?.tag}
                </div>
            </article>
        <article className="single_option_desc">
             <span>{info?.link} <ArrowForward/> </span>  
        </article>

        </section>
    )
}

export default Singleoption