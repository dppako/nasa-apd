import axios from 'axios';
import config from '../config'

export const ImageService = {
  getImage: (date='') => axios.get(`${config.nasaApiUrl}&date=${date}`)
}