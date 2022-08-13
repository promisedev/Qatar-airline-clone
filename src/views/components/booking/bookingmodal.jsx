import { ExpandMore } from '@material-ui/icons';
import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';

const Bookingmodal = ()=>{
const rotate =(e)=>{

    e.currentTarget.classList.toggle('aside_rotate')
}

    return(
        <section className='aside_table'>
          <article className="aside_table1"><span>From</span></article> 
          <article className='aside_tofro' onClick={rotate}><SwapHorizOutlinedIcon/></article> 
          <article className="aside_table2"><span>To</span></article> 
        <article className="aside_table3">
         <div className='aside_option'>
            <span className='op1'>Trip</span>
            <span className='op2'>Return</span >
         </div>
         <div className='aside_more'><ExpandMore/></div>   
        </article>  
          <article className="aside_table4">
             <div className='aside_option'>
            <span className='op1'>Depart</span>
            <span className='op2'>07 Aug 22</span >
         </div>
         <div className='aside_more'>-</div>
         <div className='aside_option'style={{marginLeft:'0px',marginRight:'9px' }}>
            <span className='op1'>Return</span>
            <span className='op2'>14 Aug 22</span >
         </div>
         
         </article> 
          <article className="aside_table5">
            <div className='aside_option'>
            <span className='op1'>Passenger/ Class</span>
            <span className='op2'>1 Passenger, Economy</span >
         </div>
          </article>
        </section>
    )
}

export default Bookingmodal