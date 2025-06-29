// ProductCarousel.jsx
import React, { forwardRef, useImperativeHandle, useState, useRef } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  p: 2,
};

const ProductCarousel = forwardRef((props, ref) => {
  const sliderRef = useRef();
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  useImperativeHandle(ref, () => ({
    open: ({ images = [], description = '' }) => {
      setImages(images);
      setDescription(description);
      setOpen(true);
    },
    close: () => setOpen(false),
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={style}>
        <Box
          sx={{
            position: 'relative',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Left Arrow */}
          <IconButton
            onClick={() => sliderRef.current?.slickPrev()}
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.3)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.5)',
              },
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          {/* Carousel */}
          <Box sx={{ width: '100%', maxHeight: '100%' }}>
            <Slider ref={sliderRef} {...settings}>
              {images.map((img, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh',         
                    width: '100%',
                  }}
                >
                  <img
                    src={img}
                    alt={`carousel-${idx}`}
                    style={{
                      width: '1200px',
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      borderRadius: 8,
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={() => sliderRef.current?.slickNext()}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.3)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.5)',
              },
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
});

export default ProductCarousel;
