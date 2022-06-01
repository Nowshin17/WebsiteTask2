import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../Styles/sliderStyle.css";

const slideImages = [
  {
    url: ' https://thereport.live/storage/bb22-640x321.jpg ',
    caption: 'Bangladesh'
  },
  {
    
    url: 'https://i.pinimg.com/736x/93/68/69/936869b5812ed23a86abd4869929f36e--east-pakistan-the-man.jpg',
    caption: 'Caption 2'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4al4U-RQMAcsms4ZPCBoeeYDT9k0nUqKabuuBWiG1XdMi7ZqZCeX1AajDHV51M0ihm8&usqp=CAU',
    caption: 'Caption 3'
  },
];


function Slider() {
  return (
    <div>

<div className="">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span class="text-[#245C51] font-extrabold text-xl">{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>



{/*     
<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>

  
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>

</div> */}

    </div>
  )
}

export default Slider