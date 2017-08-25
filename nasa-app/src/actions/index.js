import { ImageService } from '../services';

const actions = {
  getImage: (date) => (dispatch, getState) => {
    const { collection } = getState().images;

    if (collection[date || 'today']) return false;

    dispatch(actions.imageRequest())

    return ImageService.getImage(date)
      .then(response => {
        dispatch(actions.imageReceived(date, response.data))
      })
      .catch(error => {
        dispatch(actions.imageError(error))
      });
  },
  
  imageRequest: () => ({
    type: 'IMAGE_REQUEST'
  }),
  
  imageReceived: (date='today', response) => ({
    type: 'IMAGE_RECEIVED',
    payload: {
      [date]: response
    }
  }),
  
  imageError: (error) => ({
    type: 'IMAGE_ERROR',
    error
  })
};

export default actions;