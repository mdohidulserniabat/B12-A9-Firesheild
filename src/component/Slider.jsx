import React from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Slide style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Photo Import
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.png';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
