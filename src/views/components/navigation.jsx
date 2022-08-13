import link from './nav_link.json'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Navigation = ()=> {

    const flag= " https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg"

    return (
        
        <article className="qatar_hero_nav">
            {/* -------------------------------------- */}
         <div className="logo_div"><img src='../../graphics/logo.ico' alt='qatar_kpalikustack'/></div> 
         {/* ----------------------------------------------------- */}
        <div className="logo1_div"><img src='../../graphics/oneworld1.ico' alt='one_world'/></div> 
        {/* ------------------------------------------------------ */}
        <div className="menu_div">

        {link.map((link,index)=>{

            return( <div className='menu_link' key={index}>{link.name}</div>)
        })}
        </div>
        {/* ------------------------------------ */}
         <div className="submenu_div">
<div className="submenu_div_link">Help</div>
<div className="submenu_div_link"><SearchIcon/></div>
<div className="submenu_div_link">
    <div className="submenu_country" style={{backgroundImage:`url(${flag})`, backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}></div> EN
    </div>
<div className="submenu_div_link"><AccountCircleOutlinedIcon/></div>
<div className="submenu_div_link">
    <div className="submenu_log">Log in</div>
    <div className="">Sign up</div>
</div>
         </div>
         </article>
    )
}

export default Navigation