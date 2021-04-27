import React from 'react';
import { connect } from 'react-redux'
import '../App.css';
import Categoria from '../components/Categoria';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import { platziVideo } from '../assets/static/database'

const Home = ({miLista, tendencia, originales, search})=> {
  console.log(miLista)
  return(
    <>
      <Search/>
      {search.length > 0 && (
        <Categoria title="Resultados">
          <Carousel>
            {search.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categoria>
      )}
      {miLista.length > 0 ?
      <Categoria title="Mis favoritos">
          <Carousel>
            {miLista.map(item =>
              <CarouselItem 
                key={item.id} 
                {...item}
                isList
              />
            )}
          </Carousel>
      </Categoria>
      : null
      }
        <Categoria title="Tendencia">
          <Carousel>
            {tendencia.map(item =>
              <CarouselItem key={item.id}{...item}/>
              )
            }
          </Carousel>
        </Categoria>
        
        <Categoria title="Ver mas tarde">
          <Carousel>
            {originales.map(item =>
              <CarouselItem key={item.id}{...item}/>
              )
            }
          </Carousel>
        </Categoria>
    </>
  );
}

const mapStateToProps = state =>{
  return{
    miLista: state.miLista,
    tendencia: state.tendencia,
    originales: state.originales,
    search: state.search,
  };
};

export default connect(mapStateToProps, null)(Home)