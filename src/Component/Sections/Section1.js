import React from 'react'
import '../Styles/style_section.scss';

function Section1() {
  return (
    <div>
        <div className='background-color alignItem'>
            <div class="bg-[#F6F8F7] ">
            
                <div class="text-[#ff6752] text-1xl font-semibold text-center pt-16"> Our Services</div>
                <div class="bg-[#F6F8F7] text-4xl font-bold text-center pt-1">About Us</div>
                <div class="pt-12 flex p-1 gap-4"> 
                    <a class="block p-8 max-w-sm bg-white rounded-sm border border-gray-200 
                        shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <button class="p-4 border rounded-full bg-[#255D52] border-transparent text-neutral-50">
                            <svg class="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  
                                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                            </svg>
                        </button>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                            Online Services</h5>
                        <p class="font-normal text-gray-600 dark:text-gray-400 pt-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>

                    <a href="#" class="block p-8 max-w-sm bg-white rounded-sm border border-gray-200 
                        shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <button class="p-4 border rounded-full bg-[#ff6752] border-transparent text-neutral-50">
                            <svg class="h-8 w-8 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </button>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                        Get Notices</h5>
                        <p class="font-normal text-gray-600 dark:text-gray-400 pt-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>

                    <a href="#" class="block p-8 max-w-sm bg-white rounded-sm border border-gray-200 
                        shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <button class="p-4 border rounded-full bg-[#255D52] border-transparent text-neutral-50">
                                <svg class="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
                            </button>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                               Career Opportunities</h5>
                            <p class="font-normal text-gray-600 dark:text-gray-400 pt-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>

                    <a href="#" class="block p-8 max-w-sm bg-white rounded-sm border border-gray-200 
                        shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <button class="p-4 border rounded-full bg-[#255D52] border-transparent text-neutral-50">
                            <svg class="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="10" y1="16" x2="14" y2="16" /></svg>
                        </button>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                        Download Forms</h5>
                        <p class="font-normal text-gray-600 dark:text-gray-400 pt-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
   
                
                </div>
            
            </div>
        </div>
    </div>

  )
}

export default Section1