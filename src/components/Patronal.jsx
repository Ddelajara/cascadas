import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export const Patronal = () => {
  return (
    <div className="container custom_bkb-color p-3 mt-2 rounded">
        <div className="row">
            <Col md={6} className="d-flex flex-column justify-content-center">
                 <div className="image-container">
                    <Image className="image-blur" src="/image/vpr.jpg" fluid/>
                </div>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
            <h1 className="text-md-start color_H1">Reserva Nacional Llanquihue</h1>
                <p className="text-md-start">En las tierras sureñas de Chile, donde los Andes se inclinan para tocar el cielo, yace el Lago Llanquihue, un espejo de aguas cristalinas que refleja la majestuosidad de la naturaleza. Rodeado por verdes praderas y bosques milenarios, este lago se extiende como un lienzo azul, pintado por los dedos del viento y adornado por el Volcán Osorno, cuya cumbre nevada se alza como un guardián eterno.</p>
                <Row className='d-flex flex-row justify-content-left pb-4'>
                    <Image className="image-blur" src="/image/tour/trekking.png" style={{ width: '60px', height: 'auto' }}/>
                    <Image className="image-blur" src="/image/tour/ski.png" style={{ width: '60px', height: 'auto' }}/>
                    <Image className="image-blur" src="/image/tour/kayak.png" style={{ width: '60px', height: 'auto' }}/>
                    <Image className="image-blur" src="/image/tour/island.png" style={{ width: '60px', height: 'auto' }}/>
                    <Image className="image-blur" src="/image/tour/dish.png" style={{ width: '60px', height: 'auto' }}/>
                    <Image className="image-blur" src="/image/tour/fishing.png" style={{ width: '60px', height: 'auto' }}/>
                </Row>
            </Col>
        </div>
    </div>
  )
}
