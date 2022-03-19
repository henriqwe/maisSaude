import React from 'react'
import { Carousel } from 'react-bootstrap'

export function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={'https://www.amapar.com.br/images/covid-plano-saude.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cuide-se</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={
            'https://thumbs.web.sapo.io/?W=1920&H=0&crop=center&delay_optim=1&epic=M2Mz7TJ4s33bsxDZcKx1ak6SpkcNay7wkNKDeVX8jaLnhF8xj3OJBYU0HnOrkL22Tj40uubdwAA1ipMOiiBe9/UqzdXJ1uulbnq6eBkacgmKF0c='
          }
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>IMC</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0TIy0NNbRtaZmVkj1NeUc_MHPRxWhMzDFg&usqp=CAU'
          }
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Exercite-se</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
