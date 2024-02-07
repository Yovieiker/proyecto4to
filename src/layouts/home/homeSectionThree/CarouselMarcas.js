import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

const marcas = [
  { id: 1, nombre: 'Avon', imagen: '/assets/img/marcas/Avon.png' },
  { id: 2, nombre: 'babaria', imagen: '/assets/img/marcas/babaria.png' },
  { id: 3, nombre: 'ilove', imagen: '/assets/img/marcas/ilove.png' },
  { id: 4, nombre: 'Mary kay', imagen: '/assets/img/marcas/Marykay.png' },
  { id: 5, nombre: 'Ruby', imagen: '/assets/img/marcas/Ruby.png' },
  { id: 6, nombre: 'Avon', imagen: '/assets/img/marcas/Avon.png' },
  { id: 7, nombre: 'babaria', imagen: '/assets/img/marcas/babaria.png' },
  { id: 8, nombre: 'ilove', imagen: '/assets/img/marcas/ilove.png' },
  { id: 9, nombre: 'Mary kay', imagen: '/assets/img/marcas/Marykay.png' },
  { id: 10, nombre: 'Ruby', imagen: '/assets/img/marcas/Ruby.png' },
  { id: 11, nombre: 'Avon', imagen: '/assets/img/marcas/Avon.png' },
  { id: 12, nombre: 'babaria', imagen: '/assets/img/marcas/babaria.png' },
  { id: 13, nombre: 'ilove', imagen: '/assets/img/marcas/ilove.png' },
  { id: 14, nombre: 'Mary kay', imagen: '/assets/img/marcas/Marykay.png' },
  { id: 15, nombre: 'Ruby', imagen: '/assets/img/marcas/Ruby.png' },
];

function CarouselMarcas() {
  const currentSlideIndex = useRef(0);

  const handleSlideChange = (event) => {
    currentSlideIndex.current = event.activeIndex;
  };

  const renderSlides = () => {
    return marcas.map((marca) => (
      <SwiperSlide key={marca.id}>
        <Box
          component="img"
          src={marca.imagen}
          alt={marca.nombre}
        className='img-carousel'
          
        />
      </SwiperSlide>
    ));
  };

  return (
  <>
    <Box sx={{ display: { md: "none" } }}>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
      >
        {renderSlides()}
      </Swiper>
    </Box>
    {/**destopk */}
     <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
      >
        {renderSlides()}
      </Swiper>
    </Box>
  </>
  );
}

export default CarouselMarcas;