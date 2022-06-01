import React from 'react';
import '../Styles/style_section.scss';


function Footer() {
  return (
    <div>

<footer class="p-4 bg-[#255D52] sm:p-6 dark:bg-gray-800 alignItem">
    <div class="">
        {/* <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com" class="flex items-center">
                <img src="/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
        </div> */}

        
        <div class="grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-4">
            <div>
                <h2 class="mb-6 text-sm text-white font-semibold text-[20px] pt-20">About Us</h2>
                <ul class="text-white font-light text-[16px]">
                    <li class="pt-4">
                        <a href="" class="hover:underline ">Capital Profile</a>
                    </li>
                    <li class="pt-4">
                        <a href=" " class="hover:underline ">Missing and Vision</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Board of Derector</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Curculations</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Career Opportunity</a>
                    </li>
                    
                </ul>
            </div>

            
            
            <div>
            <h2 class="mb-6 text-sm text-white font-semibold text-[20px] pt-20">Product & Services</h2>
                <ul class="text-white font-light text-[16px]">
                    <li class="pt-4">
                        <a href="" class="hover:underline ">Privacy Policy</a>
                    </li>
                    <li class="pt-4">
                        <a href=" " class="hover:underline ">Documentation</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Issue management</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Downloads Forms</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Notice/Circular</a>
                    </li>
                </ul>
            </div>

            <div>
            <h2 class="mb-6 text-sm text-white font-semibold text-[20px] pt-20">Support</h2>
                <ul class="text-white font-light text-[16px]">
                    <li class="pt-4">
                        <a href="" class="hover:underline ">Contact Us</a>
                    </li>
                    <li class="pt-4">
                        <a href=" " class="hover:underline ">Online Chat</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Whatsapp</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Telegram</a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class="hover:underline">Ticketing</a>
                    </li>
                </ul>
            </div>

            

            <div>
            <h2 class="mb-6 text-sm text-white font-semibold text-[20px] pt-20">Logo</h2>
                <ul class="text-white font-light text-[16px]">
                    <li class="pt-4">
                        <a href="">Be the first one to know about offers and events. We can help you! any query just Email us.  </a>
                    </li>
                    <li class="pt-4">
                        <a href=" " class="hover:underline ">  </a>
                    </li>

                    <li class="pt-4">
                        <a href=" " class=" ">
                        <div class="flex justify-center">
                            <div class="mb-3 xl:w-96">
                                <div class=" dap-2 flex items-stretch w-80 mb-4">
                                    
                                    <div>
                                    <button type="button" class="text-white bg-[#ff6752] 
                                    focus:outline-none focus:ring-4 focus:ring-[#ff6752] font-medium rounded-full text-sm px-4
                                    py-2.5 text-center mr-2 mb-2 ">
                                        LogIn As a Client
                                    </button>
                                    </div>
                                {/* <button class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 
                                font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 
                                focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Subs</button> */}
                                </div>
                            </div>
                        </div>

                        </a>
                    </li>

                   
                    <li class="">
                        <a href=" " class="hover:underline">
                        <div class="flex mt-4 space-x-4">
                            
                            <a href="#" class="text-[#ff6752] p-2 border rounded-full bg-white hover:text-gray-900 dark:hover:text-white">
                                <svg
                                    class="w-4 h-4 text-[#ff6752] fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                    />
                                </svg>
                            </a>
                            <a href="#" class="text-[#ff6752] p-2 border rounded-full bg-white hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>
                            </a>
                            <a href="#" class="text-[#ff6752] p-2 border rounded-full bg-white hover:text-gray-900 dark:hover:text-white">
            
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#ff6752]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                             </a>
                            <a href="#" class="text-[#ff6752] p-2 border rounded-full bg-white hover:text-gray-900 dark:hover:text-white">
                                <svg
                                    class="w-4 h-4 text-[#ff6752] fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                    ></path>
                                </svg>
                            </a>
                            
                        </div>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    
    <hr class="my-6 border-gray-400 sm:mx-auto dark:border-gray-400 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flowbite.com" class="hover:underline"> </a>.
        </span>

        
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <span class="text-white font-light text-[16px]">CoptRight©Nowshin<a href="https://flowbite.com" class="hover:underline">2022,</a> All Rights Reserved
        </span>
        </div>
    </div>
</footer>
        

        
    </div>
  )
}

export default Footer