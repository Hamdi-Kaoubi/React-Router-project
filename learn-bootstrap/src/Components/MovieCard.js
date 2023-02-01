import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Ratinge from './Ratinge';


const MovieCard = (props) => {
    return (
        <div>
        <Card style={{ width: '12rem' }}>
        <Card.Img style={{height:'270px'}} variant="top" src={props.el?.image} />
        <Card.Body>
          <Card.Title>{props.el.name}</Card.Title>
          <Card.Text>{props.el.type}</Card.Text>
          <Card.Text style={{fontSize:'12px'}}>
            {props.el.description}
          </Card.Text>
          <Card.Text style={{fontWeight: 'bolder'}}>
            {props.el.date}
          </Card.Text>
          
          <Ratinge el={props.el} />
          <Link to={`/Trailer/${props.el.id}`}><Button >watch trailer</Button></Link>
          
        </Card.Body>
      </Card>
        </div>
    )
}

export default MovieCard