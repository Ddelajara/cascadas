import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export const Galeria = () => {
  return (
    <div className="container custom_bkb-color p-3 mt-2 rounded">
        <Row className="justify-content-md-center">
            <h1>Galería de Imágenes</h1>
        </Row>

        <Row>
            <Col xs={12} sm={6} md={3} className="pb-4">
                <Image className="rounded w-100 h-100" src="/image/Kayak-2.jpg" />
            </Col>
            <Col xs={12} sm={6} md={3} className="pb-4">
                <Image className="rounded w-100 h-100" src="/image/birds.jpg" />
            </Col>
            <Col xs={12} sm={6} md={3} className="pb-4">
                <Image className="rounded w-100 h-100" src="/image/salmon.jpg" />
            </Col>
            <Col xs={12} sm={6} md={3} className="pb-4">
                <Image className="rounded w-100 h-100" src="/image/asado.jfif" />
            </Col>
        </Row>

        <Row>
            <Col xs={12} sm={6} md={3} className="pb-4">
                <Image className="rounded w-100 h-100" src="/image/volcan-osorno-ski.jpg" />
            </Col>
            <Col xs={12} sm={6} md={3} className="pb-4">
                <Image className="rounded w-100 h-100" src="/image/PARQUE.jpg" />
            </Col>
            <Col xs={12} sm={6} md={3} className="pb-4">
                <Image className="rounded w-100 h-100" src="/image/fondoNB2.jfif" />
            </Col>
            <Col xs={12} sm={6} md={3} className="pb-4">
                <Image className="rounded w-100 h-100" src="/image/2d8f1292.jpg" />
            </Col>
        </Row>


    </div>
  )
}
