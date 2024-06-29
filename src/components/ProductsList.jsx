import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Spinner from './Spinner';

const ProductsList = ({ products }) => {
  return (
    <Wrapper>
      {products.length > 0 ?
        <div className='container'>
          <div className='row'>
            {products.map((product) => (
              <div key={product.id} className='col-12 col-md-6 col-lg-4 mb-4'>
                <ProductCard image={product.image} title={product.title} price={product.price} id={product.id} />
              </div>
            ))}
          </div>
        </div>
        : <Spinner />
      }
    </Wrapper>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const Wrapper = styled.section`
  img {
    max-height: 250px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.theme.radius};
  }
`;

export default ProductsList;
