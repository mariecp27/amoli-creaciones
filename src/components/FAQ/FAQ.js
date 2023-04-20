import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCartShopping,
  faDollar
} from '@fortawesome/free-solid-svg-icons'
import {
  faCcMastercard,
  faCcVisa,
  faCcAmex
} from '@fortawesome/free-brands-svg-icons'

const FAQ = () => {
  return (
    <div className='faq'>
      <div className='faq__body'>
        <h3>Preguntas frecuentes</h3>
        <section className='faq__location'>
          <h4>¿Dónde estámos?</h4>
          <div>
            <div className='faq_icon'>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              augue ut mi tempus porttitor commodo vel sapien. Quisque at
              pharetra nunc. In fermentum convallis malesuada. Nulla massa
              neque, egestas sed velit in, hendrerit consectetur odio.
            </p>
          </div>
        </section>
        <section className='faq__how-to-purchase'>
          <h4>¿Cómo comprar?</h4>
          <div>
            <div className='faq_icon'>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              augue ut mi tempus porttitor commodo vel sapien. Quisque at
              pharetra nunc. In fermentum convallis malesuada. Nulla massa
              neque, egestas sed velit in, hendrerit consectetur odio.
            </p>
          </div>
        </section>
        <section className='faq__purchase-methods'>
          <h4>Medios de pago</h4>
          <div>
            <div className='faq_icon'>
              <FontAwesomeIcon icon={faDollar} />
            </div>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              augue ut mi tempus porttitor commodo vel sapien. Quisque at
              pharetra nunc. In fermentum convallis malesuada. Nulla massa
              neque, egestas sed velit in, hendrerit consectetur odio.
            </p>
            <div className='faq_purchase-methods-icons'>
              <FontAwesomeIcon icon={faCcMastercard} />
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faCcAmex} />
            </div>
          </div>
        </section>
      </div>
      <img
        src={process.env.PUBLIC_URL + '/assets/images/footer_1.svg'}
        alt='Waves'
        className='faq__waves faq__waves-1'
      />
      <img
        src={process.env.PUBLIC_URL + '/assets/images/footer_2.svg'}
        alt='Waves'
        className='faq__waves faq__waves-2'
      />
    </div>
  )
}

export default FAQ
