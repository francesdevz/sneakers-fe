import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import heroHeader from '../Common/Images/shop-08.jpg';
import skaterGirl from '../Common/Images/skater-girl.jpg';
import { LinkBarButton } from './ActionButton';

const dividerData = () => [
  {
    productImage: heroHeader,
    productSubImage: [],
    productOriginalPrice: '₱ 500',
    productNewPrice: '',
    productDescription:
      "Navigate city streets with ease in these urban-chic sneakers. With their trendy design and practical features, they're the ultimate footwear choice for urbanites on the move.",
    productName: 'StreetSmart Ultra',
    productStocks: '',
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
  }
];

const CustomerDivider = () => {
  return (
    <div
      className="container-md pt-5"
      style={{ 
        display: 'flex', 
        gap: '1rem', 
        flexWrap: 'wrap', 
        height: '1000px', 
      }}
    >
      {dividerData().map((item, idx) => (
        <Card
          key={`${item.productName || 'item'}-${idx}`}
          sx={{
            width: '100%',
            height: 500,
            maxWidth: 360,
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: item.isProduct ? 'black' : 'transparent',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
            color: 'black',
            borderRadius: 0,
            border: '1px solid red'
          }}
        >
          {item.isProduct ? (
            <>
              <CardMedia
                component="img"
                height="340"
                image={item.productImage}
                alt={item.productName}
                sx={{ backgroundColor: 'white' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                  {item.productName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.productDescription}
                </Typography>
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
                  color: 'white' ,
                  marginTop: 2, 
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
                  className='bg-white shrink-hover'
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
      ))}
    </div>
  );
};

export default CustomerDivider;
