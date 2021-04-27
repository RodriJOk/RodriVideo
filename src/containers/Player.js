import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {getVideoSource} from '../actions/index'
import Error404 from './Error404'
import '../assets/styles/components/Player.css'

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;
    
    useEffect(()=>{
        props.getVideoSource(id)
    }, []);
    
    return  hasPlaying ?( 
        <div className="Player">
            <h1>
                Estoy en Player
            </h1>
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={()=>props.history.goBack()}>Regresar</button>
            </div>
        </div>
     ): <Error404/>
}

const mapStateToProps = state => {
    return{
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect( mapStateToProps, mapDispatchToProps)(Player);