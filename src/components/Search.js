import React from 'react';
import { getSearchVideo } from '../actions/index'
import { connect } from 'react-redux'
import '../assets/styles/components/Search.css'

const Search = (props)=>{
    const { getSearchVideo } = props
    const handlerSearch = (event) =>{
        getSearchVideo(event.target.value);
        console.log(event.target.value)       
    }

    return(
        <main className="main">
            <h2 className="main__title">¿Que quieres ver hoy?</h2>
            <div className="main__search">
                <input 
                    className="main__search--input" 
                    type="text" 
                    placeholder="Buscar ..."
                    onKeyUp={handlerSearch}/>
                <i class="fas fa-search"></i>
            </div>

        </main>
    )
}

const mapStateToProps = state =>{
    return{
        search: state.search,
    }
}

const mapDispatchToProps = {
    getSearchVideo
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);