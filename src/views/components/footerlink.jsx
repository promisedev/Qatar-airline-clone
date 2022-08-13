



const footerlink = (props)=>{
const info =props.props;
    return(

        <article className="footerlink">
          <div>{info?.name}</div>  
        <ul>
          {info?.link.map((link,index)=>{

            return(<li key={index}>{link?.name}</li>)
          })}
        </ul>

        </article>
    )
}

export default footerlink