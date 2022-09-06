import React, { Fragment, useEffect } from 'react';
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'
import Carousel from 'react-material-ui-carousel';
import './ProductDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../actions/productAction';


const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    );

    useEffect(() => {
        dispatch(getProduct(match.params.id));
    }, [dispatch, match.params.id]);

  return ( 
    <div>
        <Header />

        <Fragment> 
            <div className = "ProductDetails"> </div>
        </Fragment>

        <Carousel>
            {product.images &&
                product.images.map((item, i) => (
                    <img
                    className = "CarouselImage"
                    key = {item.url}
                    src = {item.url}
                    alt = {`${i} slide`}
                    />
                ))}
        </Carousel>

        <Footer />
    </div>
  );
};

export default ProductDetails;
