const initialState = {
  isReady: false,
  collection: {}
}

export default function imagesReducer(state=initialState, action={}) {
  switch(action.type) {
    case 'IMAGE_REQUEST':
      return {
        ...state,
        isReady: false,
      };

    case 'IMAGE_RECEIVED':
      return {
        ...state,
        isReady: true,
        collection: {
          ...state.collection,
          ...action.payload
        }
      };
    
    default:
      return state;
  }
}