import reducer from './images.reducer'

const initialState = {
  isReady: false,
  collection: {}
}

describe('images reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle IMAGE_REQUEST and keep previousState', () => {
    const action = {
      type: 'IMAGE_REQUEST',
    };
    const previousState = {
      isReady: true,
      collection: {
        test: 'test'
      }
    }
    expect(reducer(previousState, action)).toEqual({
      ...previousState,
      isReady: false
    })
  })

  it('should handle IMAGE_RECEIVED and add payload to previousState', () => {
    const action = {
      type: 'IMAGE_RECEIVED',
      payload: {
        newImage: 'new-image'
      }
    };
    const previousState = {
      isReady: false,
      collection: {
        test: 'test',        
      }
    }
    expect(reducer(previousState, action)).toEqual({
      ...previousState,
      isReady: true,
      collection: {
        ...previousState.collection,
        newImage: 'new-image'
      }
    })
  })
})