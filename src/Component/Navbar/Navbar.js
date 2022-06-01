import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.scss';
import '../Styles/style_section.scss';




function Navbar() {
  return (
  <div> 
    <div className='imgCover alignItem' >
        <div className='sum'>
    

            <div className='logo pl-20'>
                <button class="text-white font-medium">
                    Logo
                </button>
            </div>

            <div className='item'>
                <ul className='ul'>
                {/* <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> */}
                    <li> <div class="pt-2.5 hover:text-[#ff6752]"><Link to='/'> Home </Link> </div> </li>
                    <li> <div class="pt-2.5 hover:text-[#ff6752]"><Link to='/Products'> Products & Services</Link></div></li>
                    <li> <div class="pt-2.5 hover:text-[#ff6752]"><Link to='/Client'> Become a Client</Link></div></li>
                    <li> <div class="pt-2.5 hover:text-[#ff6752]"><Link to='/AboutUs'> About Us</Link> </div></li>
                    <li>
                        
                        <div class="container flex border rounded-3xl bg-[#ffffff]" >

                                <div class="flex border rounded-3xl ">
                                    <button class="flex items-center justify-center px-4 border-rounded ">
                                        <svg class="w-6 h-6 text-[#ff6752] bg-[#ffffff] " fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                            </path>
                                        </svg>
                                    </button>
                                    <input type="text" class="px-0 py-2 w-40 bg-[#ffffff] text-[#ff6752] pl-3 rounded-3xl " placeholder="Search Services"/>
                                </div>
                        </div>  
                    
                    </li>

                    <li>
                       <div className='logo pl-10'>
                        <button class="bg-[#ff6752] text-white font-medium py-2 px-8 border-[#ff6752]  rounded-full hover:bg-[#d85b0d]">
                            Login
                        </button>
                    </div>
                    </li>

                    <li>
                       <div className='logo pl-1'>
                        <button class="bg-[#ff6752] text-white font-medium py-2 px-6 border border-[#ff6752] rounded-full hover:bg-[#d85b0d]">
                            Register
                        </button>
                    </div>
                    </li>
    

                    {/* <li>
                        <Link to='/Shop'>
                            <button class="p-2 border rounded-3xl bg-neutral-100/10 border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </button>
                        </Link>
                    </li> */}
                    
                </ul>

            </div>
        </div>


        {/* <div class="pt-40">
    
            <div class=" pt-8 text-[#e2e2e2]"> Dramatically supply tranparent deliverables before backward</div>
            <div class="text-[#e2e2e2]">comp internam or "organic" sources. Completely leverage other. </div>

        </div> */}

    </div>
</div>

  )
}

export default Navbar