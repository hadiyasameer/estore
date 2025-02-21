import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button'

function Discount() {
  return (
    <>
      <div className="discount">
        <div className='discount-words'>
          <h1>Welcome to <span className='yellow'>Easy Store!</span> </h1>
          <h2><span className='yellow'>Everything</span> at your fingertips!</h2>
          <p>Best products at Best prices!</p>
          <Button className='Button' href='#products'>Shop Now</Button>

        </div>
        <div>
          <Image className='discount-image' src="https://s.tmimgcdn.com/scr/800x500/343900/gradient-blue-colored-sale-banner-and-sale-banner-discount-promotion-blue-background-concept_343957-original.jpg" alt="Discount Banner"/>
        </div>
      </div>

    
    </>
  );
}

export default Discount;