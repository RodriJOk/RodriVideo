import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducer/index'

const initialState = {
    user: {},
    playing: {},
    search:{},
    miLista: [],
    tendencia: [
      {
        id: 2,
        slug: "tvshow-2",
        title: "In the Dark",
        type: "Scripted",
        language: "English",
        year: 2009,
        contentRating: "16+",
        duration: 164,
        cover: "http://dummyimage.com/800x600.png/99118E/ffffff",
        description: "Vestibulum ac est lacinia nisi venenatis tristique",
        source: "https://vod-progressive.akamaized.net/exp=1619563712~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2775%2F21%2F538877060%2F2554448071.mp4~hmac=7a41ed288ec36564af48bcf6ecd81b80da7a3bd57bfa1606dad1fd021ca773c7/vimeo-prod-skyfire-std-us/01/2775/21/538877060/2554448071.mp4?filename=Waves+-+70796.mp4",
      },
      {
        id: 3,
        slug: "tvshow-3",
        title: "Instinct",
        type: "Adventure",
        language: "English",
        year: 2002,
        contentRating: "16+",
        duration: 137,
        cover: "http://dummyimage.com/800x600.png/302140/ffffff",
        description: "Vestibulum ac est lacinia nisi venenatis tristique",
        source: "https://vod-progressive.akamaized.net/exp=1619563831~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3306%2F20%2F516532097%2F2399156935.mp4~hmac=0348df6015a5cc3a36f844f9990ae6b00eecb2aaa26042fa83293bdf4d2b73a9/vimeo-prod-skyfire-std-us/01/3306/20/516532097/2399156935.mp4?filename=Cat+-+66004.mp4",
      },
      {
        id: 4,
        slug: "tvshow-4",
        title: "Grand Hotel",
        type: "Comedy",
        language: "English",
        year: 2014,
        contentRating: "16+",
        duration: 163,
        cover: "http://dummyimage.com/800x600.png/5472FF/ffffff",
        description: "Vestibulum ac est lacinia nisi venenatis tristique",
        source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        id: 5,
        slug: "tvshow-5",
        title: "Stargate Atlantis",
        type: "Scripted",
        language: "English",
        year: 2014,
        contentRating: "16+",
        duration: 194,
        cover: "http://dummyimage.com/800x600.png/B36F20/ffffff",
        description: "Vestibulum ac est lacinia nisi venenatis tristique",
        source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        id: 6,
        slug: "tvshow-6",
        title: "Final Space",
        type: "Scripted",
        language: "English",
        year: 2017,
        contentRating: "16+",
        duration: 124,
        cover: "http://dummyimage.com/800x600.png/CCC539/ffffff",
        description: "Vestibulum ac est lacinia nisi venenatis tristique",
        source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        id: 7,
        slug: "tvshow-7",
        title: "The InBetween",
        type: "Drama",
        language: "English",
        year: 2011,
        contentRating: "16+",
        duration: 179,
        cover: "http://dummyimage.com/800x600.png/FF7A90/ffffff",
        description: "Vestibulum ac est lacinia nisi venenatis tristique",
        source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      ],
    originales :[
      {
          id: 8,
          slug: "tvshow-8",
          title: "Stargate Atlantis",
          type: "Action",
          language: "English",
          year: 2012,
          contentRating: "16+",
          duration: 148,
          cover: "http://dummyimage.com/800x600.png/306880/ffffff",
          description: "Vestibulum ac est lacinia nisi venenatis tristique",
          source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
          id: 9,
          slug: "tvshow-9",
          title: "Alien Highway",
          type: "Action",
          language: "English",
          year: 2019,
          contentRating: "16+",
          duration: 128,
          cover: "http://dummyimage.com/800x600.png/604180/ffffff",
          description: "Vestibulum ac est lacinia nisi venenatis tristique",
          source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
          id: 10,
          slug: "tvshow-10",
          title: "Elementary",
          type: "Animation",
          language: "English",
          year: 2011,
          contentRating: "16+",
          duration: 346,
          cover: "http://dummyimage.com/800x600.png/FF91BA/ffffff",
          description: "Vestibulum ac est lacinia nisi venenatis tristique",
          source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
          id: 11,
          slug: "tvshow-11",
          title: "Strange Angel",
          type: "War",
          language: "English",
          year: 2015,
          contentRating: "16+",
          duration: 226,
          cover: "http://dummyimage.com/800x600.png/45807C/ffffff",
          description: "Vestibulum ac est lacinia nisi venenatis tristique",
          source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
          id: 12,
          slug: "tvshow-12",
          title: "Private Eyes",
          type: "Comedy",
          language: "English",
          year: 2018,
          contentRating: "16+",
          duration: 190,
          cover: "http://dummyimage.com/800x600.png/577380/ffffff",
          description: "Vestibulum ac est lacinia nisi venenatis tristique",
          source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
          id: 13,
          slug: "tvshow-13",
          title: "NCIS: Los Angeles",
          type: "Drama",
          language: "English",
          year: 2010,
          contentRating: "16+",
          duration: 160,
          cover: "http://dummyimage.com/800x600.png/5472FF/ffffff",
          description: "Vestibulum ac est lacinia nisi venenatis tristique",
          source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers())

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
