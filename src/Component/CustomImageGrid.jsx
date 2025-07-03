import React, { useImperativeHandle, forwardRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import { motion } from 'framer-motion';
import shop1To1 from '../Common/Images/shop-08.jpg';
import shop1To2 from '../Common/Images/shop-08-2.jpg';
import shop1To3 from '../Common/Images/shop-08-3.jpg';
import shop1To4 from '../Common/Images/shop-08-4.jpg';
import shop1To5 from '../Common/Images/shop-08-5.jpg';
import skaterGirl from '../Common/Images/skater-girl.jpg';
import { LinkBarButton } from './ActionButton';
import { useRef } from 'react';
import ProductCarousel from './ProductCarousel';

const dividerData = () => [

  {
    productImage: shop1To1,
    productSubImage: [
        {
          img: shop1To2
        },
        {
          img: shop1To3
        },
        {
          img: shop1To4
        },
        {
          img: shop1To5
        },
    ],
    productOriginalPrice: '₱ 2,000.00',
    productNewPrice: '₱ 999.00',
    productDescription:
      "Navigate city streets with ease in these urban-chic sneakers. With their trendy design and practical features, they're the ultimate footwear choice for urbanites on the move.",
    productName: 'StreetSmart Ultra',
    productStocks: '51',
    isProduct: true
  },
  {
    productImage: skaterGirl,
    productSubImage: [],
    productOriginalPrice: '',
    productNewPrice: '',
    productDescription: "Elevate your game with our premium sport shoes, engineered for performance and style.",
    productName: 'StrideMax Pro',
    productStocks: '',
    isProduct: false
  },
  {
    productImage: shop1To1,
    productSubImage: [
        {
          img: shop1To2
        },
        {
          img: shop1To3
        },
        {
          img: shop1To4
        },
        {
          img: shop1To5
        },
    ],
    productOriginalPrice: '₱ 2,000.00',
    productNewPrice: '₱ 999.00',
    productDescription:
      "Navigate city streets with ease in these urban-chic sneakers. With their trendy design and practical features, they're the ultimate footwear choice for urbanites on the move.",
    productName: 'StreetSmart Ultra',
    productStocks: '21',
    isProduct: true
  },
];

/**
 * 
 * @returns {import('react').JSX.Element}
 */
const CustomImageGrid = () => {

  const carouselRef = useRef();

  return (
    <div
      className="container-md pt-5"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '1rem',
        width: '100%',
        height: '100%',
      }}
    >
      {dividerData().length > 0 && dividerData().map((item, idx) => (
        <motion.div
          key={`${item.productName || 'item'}-${idx}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          <Card
            sx={{
              width: '100%',
              height: '100%',
              maxWidth: 360,
              border: '1px solid red',
              borderColor: 'divider',
              backgroundColor: item.isProduct ? 'black' : 'transparent',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative',
              color: 'black',
              borderRadius: 0,
            }}
          >
            {item?.isProduct && (
              <div
                style={{
                position: 'absolute',
                top: '25px',
                left: '10px',
                zIndex: 2, 
                borderRadius: '5px',
                padding: '2px 6px',
                backgroundColor: 'rgb(249,249,249)'
              }}
              >
                 <Rating 
                  name="half-rating-read" 
                  defaultValue={5} 
                  precision={5} 
                  readOnly 
                  sx={{
                    fontSize: 20, 
                    color: 'black',
                  }}
                 />
              </div>
            )}
            {item.isProduct ? (
              <>
                <CardMedia
                  component="img"
                  height="340"
                  image={item?.productImage}
                  alt={item?.productName}
                  sx={{ backgroundColor: 'rgb(249,249,249)' }}
                />
                 <div 
                    style={{
                        display: 'flex',
                        backgroundColor: 'rgb(249,249,249)',
                    }}
                >
                  {item.productSubImage && item.productSubImage.map((subImg, subIdx) => {
                      return (
                          <img 
                            src={subImg.img} 
                            width={'80px'}
                            key={subIdx}
                            style={{
                              cursor: 'pointer',
                              backgroundColor: 'transparent',
                              border: 'none',
                            }}
                            onClick={() => {
                              carouselRef.current?.open({
                                description: item?.productDescription,
                                images: [item.productImage, ...item.productSubImage.map(img => img.img)]
                              });
                            }}
                          />
                      )
                  })}
                </div>
                
                <CardContent sx={{ flexGrow: 1, backgroundColor: 'rgb(249,249,249)'  }}>

                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 1000, backgroundColor: 'rgb(249,249,249)'  }}>
                    {item?.productName}
                  </Typography>

                  <div
                    style={{
                      display: 'flex',
                      backgroundColor: 'rgb(249,249,249)'
                    }}
                  >

                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.black', 
                        fontSize: '16px', 
                        marginBottom: '5px',
                        textDecoration: item?.productNewPrice ? 'line-through' : 'none',
                        backgroundColor: 'rgb(249,249,249)'
                      }}
                    >
                      {item?.productOriginalPrice}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      sx={{ color: 'text.black', 
                        fontSize: '16px', 
                        marginBottom: '5px', 
                        marginLeft: '15px',  
                      }}
                    >
                      {item?.productNewPrice}
                    </Typography>
                  </div>

                  <Typography 
                    variant="body2" 
                    sx={{ color: 'text.black', fontSize: '14px', backgroundColor: 'rgb(249,249,249)' }}
                  >
                    {item?.productDescription}
                  </Typography>

                  <CardActions
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: 0,
                      padding: 0,
                      backgroundColor: 'rgb(249,249,249)'
                    }}
                  >
                    <LinkBarButton 
                      label='Shop Now'
                      className='link-bar-btn ps-4 pe-4 pt-1 pb-2 border border-black mt-4'
                      style={{width: '120px'}}
                    />
                    <LinkBarButton 
                      label={`${item?.productStocks} in stock`}
                      className='link-bar-btn ps-4 pe-4 pt-1 pb-2 mt-4'
                      style={{width: '150px'}}
                    />
                  </CardActions>
                </CardContent>
              </>
            ) : (
              <div
                style={{
                  backgroundImage: `url(${item.productImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1rem',
                  border: '1px solid black'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(to top, black, transparent)',
                    zIndex: 0
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    background: 'none',
                    color: 'white',
                    marginTop: 25,
                    zIndex: 1
                  }}
                >
                  {item.productName}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    zIndex: 1,
                    background: 'none',
                    color: 'white',
                    marginTop: 2
                  }}
                >
                  {item.productDescription}
                </Typography>
                <CardActions
                  sx={{
                    background: 'none',
                    zIndex: 1
                  }}
                >
                  <LinkBarButton
                    label={'Details'}
                    className="bg-white shrink-hover"
                    style={{
                      zIndex: 1,
                      color: 'black',
                      borderRadius: '20px',
                      marginTop: 20,
                      padding: '8px 45px',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </CardActions>
              </div>
            )}
          </Card>
        </motion.div>
      ))}
        <ProductCarousel ref={carouselRef}/>
    </div>
  );
};

export default CustomImageGrid;
