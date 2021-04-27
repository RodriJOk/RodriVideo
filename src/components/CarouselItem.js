import React from 'react';
import PropTypes from 'prop-types'
import { setFavorite, deleteFavorite } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/styles/components/CarouselItem.css'

const CarouselItem = (props) => {
    const {id, title, year, contentRating, duration, cover, isList} = props;
    const handleSetFavorite = () =>{
        props.setFavorite({
            id, title, year, contentRating, duration, cover
        })
    }

    const handleDeleteFavorite = ( itemId ) =>{
      props.deleteFavorite(itemId)
    }

    console.log(handleSetFavorite)
    return ( 
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div className="carousel-item__details--container">
                <Link to={`/player/${id}`}> 
                  <img 
                    className="carousel-item__details--img"
                    src="./play-icon.png" 
                    alt="icono-play"
                  />
                </Link>
                {isList ?
                  <img 
                  className="carousel-item__details--img"
                  src="./remove-icon.png"
                  alt="Eliminar"
                  onClick={()=>handleDeleteFavorite(id)}/>
                  :
                  <img 
                  className="carousel-item__details--img"
                  src="./plus-icon.png" 
                  alt="icono-plus"
                  onClick={handleSetFavorite}
                />}
                </div>
                <p className="carrousel-item__details--title">
                  {title}
                </p>
                <p className="carrousel-item__details--subtitle">
                  {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
     );
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite  
}

export default connect(null, mapDispatchToProps)(CarouselItem)