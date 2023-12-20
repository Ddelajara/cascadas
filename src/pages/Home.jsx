import { MenuNav } from '../components/MenuNav'
import { Row, Col } from 'react-bootstrap';
import { Welcome } from '../components/Welcome';
import { Galeria } from '../components/Galeria';
import { Patronal } from '../components/Patronal';


export const Home = () => {
  return (

    <div className="container">
        <MenuNav />
        <Welcome />
        <Galeria />
        <Patronal />
    </div>

)
}
