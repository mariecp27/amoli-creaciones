import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Product from '../Product/Product'

const ProductList = ({ products }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div
      className='product-list'
      data-aos='fade-up'>
      <div className='product-list__title'>
        <div>
          <h2>Nuestros productos</h2>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/form.png'}
            alt='Título'
            className='product-list__form'
          />
        </div>
        <img
          src={process.env.PUBLIC_URL + '/assets/images/background.svg'}
          alt='Waves'
          className='banner-waves'
        />
      </div>
      <div className='container-fluid product-list__products p-0'>
        <section className='row row-cols-lg-5 justify-content-center m-0'>
          {products.map((product) => (
            <Product
              {...product}
              key={product.id}
            />
          ))}
        </section>
        <img
          src={process.env.PUBLIC_URL + '/assets/images/footer_1.svg'}
          alt='Waves'
          className='footer-waves footer-waves-1'
        />
        <img
          src={process.env.PUBLIC_URL + '/assets/images/footer_2.svg'}
          alt='Waves'
          className='footer-waves footer-waves-2'
        />
      </div>
    </div>
  )
}

export default ProductList
