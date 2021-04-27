const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            const exist = state.miLista.find(item => item.id === action.payload.id)
            if (exist) return {...state}
            return {
              ...state,
              miLista: [...state.miLista, action.payload]
            }
        case 'DELETE_FAVORITE':
            return{
              ...state,
              miLista: state.miLista.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
          return{
            ...state,
            user: action.payload, 
          }
        case 'LOGOUT_REQUEST':
          return{
            ...state,
            user: action.payload,
          }
        case 'REGISTER_REQUEST':
          return {
            ...state,
            user: action.payload,
          }  
        case 'GET_VIDEO_SOURCE':
          return{
            ...state,
            playing: state.tendencia.find(item =>item.id === Number(action.payload)) 
            || state.original.find(item => item.id === Number(action.payload))
            || []
          }
        case 'SEARCH_VIDEO':
          if(action.payload === "")
          return{
            ...state, search: []
          };
          const listas = [...state.tendencia, ...state.originales];
          return{
            ...state,
            search: listas.filter( items => items.title.toLowerCase().includes(action.payload.toLowerCase()))
          }
        default:
          return state;
    }
}

export default reducer;

