import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/assets/images/footer_1.svg'}
          alt='Waves'
          className='footer__waves footer__waves-1'
        />
        <img
          src={process.env.PUBLIC_URL + '/assets/images/footer_2.svg'}
          alt='Waves'
          className='footer__waves footer__waves-2'
        />
      </div>
      <section className='footer__first-section'>
        <article>
          <h3>Comunícate con nosotros</h3>
          <p>
            <strong>Teléfono:</strong> +54 111111111
          </p>
          <p>
            <strong>Correo:</strong> email@email.com
          </p>
        </article>
        <article>
          <h3>Síguenos en redes</h3>
          <a
            href='https://www.instagram.com/amolicreaciones/'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </article>
      </section>
      <section className='footer__last-section'>
        <h4 className='m-0'>
          © 2023 Amoli Creaciones, todos los derechos reservados
        </h4>
      </section>
    </div>
  )
}

export default Footer
