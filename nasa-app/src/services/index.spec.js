import axios from 'axios';
import sinon from 'sinon';
import sinonTestFactory from 'sinon-test';
import { ImageService } from './index';
import config from '../config'

const sinonTest = sinonTestFactory(sinon);

describe('ImageService', () => {
  describe('getImage()', () => {
    it('calls default endpoint', sinonTest(function() {
      const response = new Promise((resolve) => resolve({ data: [] }));

      this.stub(axios, 'get');
      axios.get.returns(response);
      ImageService.getImage();
      expect(axios.get.callCount).toEqual(1);
      expect(axios.get.calledWith(`${config.nasaApiUrl}&date=`)).toEqual(true);
    }));

    it('calls endpoint with given date', sinonTest(function() {
      const response = new Promise((resolve) => resolve({ data: [] }));
      const testDate = 'test-date';

      this.stub(axios, 'get');
      axios.get.returns(response);
      ImageService.getImage(testDate);
      expect(axios.get.callCount).toEqual(1);
      expect(
        axios.get.calledWith(`${config.nasaApiUrl}&date=${testDate}`)
      ).toEqual(true);
    }));
  });
});