import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useInventory from '../../../hooks/useInventory';
import Loading from '../Loading/Loading';

const Banner = () => {
    const [products, setProducts] = useInventory([]);
    if (products.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-2 mb-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={products[0]?.img}
                    />
                    <Carousel.Caption>
                        <h3>{products[0]?.name}</h3>
                        <p>{products[0]?.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={products[1]?.img}
                    />

                    <Carousel.Caption>
                        <h3>{products[1]?.name}</h3>
                        <p>{products[1]?.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src={products[2]?.img}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{products[2]?.name}</h3>
                        <p>{products[2]?.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;