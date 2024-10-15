import React from 'react'
import { Link } from 'react-router-dom'


export default function HeadFoot() {
  return (
    <>
   <header className='Header'>
   

   <div className='navBar'>       
         <div className='siteName'>
         <div className='headLogo'></div>
         </div>      

        
   
       <div className='pages'>
  
                     <ul className='mainList'>
                   {/*About us*/}
                  
                         <li className='LI1'><Link className='link' to='/aboutus'>Aboutus</Link> 
                    
                             <div className='dropCon1'>
                    
                               <ul className='subList'>
                       
                                <div className='te1'>
                                 <li>a</li>
                                 <li>a</li>
                                 <li>a</li>
                                 </div>
                               </ul>
                 
                             </div>   
                             <span  style={{ margin: '0 10px' }}>|</span> {/* Vertical bar */}

                {/* investors*/}
                         </li>
                       
                         <li className='LI2'> <Link className='link'  to='/investors'>Investors</Link>  
                             <div className='dropCon2'>
                             <ul className='subList'>
                       
                         <div className='te1'>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
                       </div>
                     </ul>

                             </div>
                         
                         
                         </li>
                         
                         <span style={{ margin: '0 10px' }}>|</span> {/* Vertical bar */}

                         {/* Solutions*/}
                         <li className='LI3'><Link className='link' to='/solutions'>Solutions</Link> 
                             <div className='dropCon3'>
                             <ul className='subList'>
                       
                             <div className='te1'>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
             </div>
                     </ul>

                             </div>
                             <span style={{ margin: '0 10px' }}>|</span> {/* Vertical bar */}
                         {/* Sustainability*/}
                         </li>
                         
                         <li className='LI4'><Link className='link' to='/sustainability'>Sustainability</Link> 
                             <div className='dropCon4'>
                             <ul className='subList'>
                             <div className='te1'>
                         
                       <li><a>a</a></li>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
             </div>
                     </ul>

                             </div>
                             <span style={{ margin: '0 10px' }}>|</span> {/* Vertical bar */}
                         {/*Newsroom */}
                         </li>
                         
                         <li className='LI5'><Link className='link' to='/newsroom'>Newsroom</Link> 
                             <div className='dropCon5'>
                             <ul className='subList'>
                       
                             <div className='te1'>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
             </div>
                     </ul>

                             </div>
                             <span style={{ margin: '0 10px' }}>|</span> {/* Vertical bar */}
                         {/* Career*/}
                         </li>
                         
                         <li className='LI6'><Link className='link' to='/career'>Career</Link> 
                             <div className='dropCon6'>
                             <ul className='subList'>
                             <div className='te1'>
                         
                       <li><a>a</a></li>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
             </div>
                     </ul>

                             </div>
                             <span style={{ margin: '0 10px' }}>|</span> {/* Vertical bar */}
                         {/*Contact Us */}
                         </li>
                         
                         <li className='LI7'><Link className='link' to='/contactus'>Contact Us</Link> 
                             <div className='dropCon7'>
                             <ul className='subList'>
                       
                             <div className='te1'>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
                       <li><a>a</a></li>
              </div>
                     </ul>

                             </div>
                         
                         
                         </li>




                     
                     </ul>


      
       </div>
     </div>

</header>



    </>
  )
}
