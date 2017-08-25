import sinon from 'sinon';
import sinonTestFactory from 'sinon-test';
import actions from './index';
import { ImageService } from '../services';

const sinonTest = sinonTestFactory(sinon);

describe('action creators', () => {
  describe('getImage()', () => {
    it('requests image data and dispatches received payload', sinonTest(function() {
      const testResponse = 'test-response';
      const testDate = 'test-date';
      const response = new Promise((resolve) => resolve({ data: testResponse }));
      const dispatchSpy = this.spy();
      const getState = () => ({
        images: {
          collection: {}
        }
      });
      this.stub(ImageService, 'getImage');
      ImageService.getImage.returns(response);

      const promise = actions.getImage(testDate)(dispatchSpy, getState)
      expect(dispatchSpy.calledWith(actions.imageRequest())).toEqual(true);

      return promise.then(() => {
        expect(
          dispatchSpy.calledWith(actions.imageReceived(testDate, testResponse))
        ).toEqual(true);
      })
    }));

    it('requests image data and dispatches error', sinonTest(function() {
      const testError = new Error('test error');
      const response = new Promise(reject => reject(testError));
      const dispatchSpy = this.spy();
      const getState = () => ({
        images: {
          collection: {}
        }
      });
      this.stub(ImageService, 'getImage');
      ImageService.getImage.rejects(response);

      const promise = actions.getImage(undefined)(dispatchSpy, getState)
      expect(dispatchSpy.calledWith(actions.imageRequest())).toEqual(true);

      return promise
        .then(() => {
          dispatchSpy.calledWith(actions.imageError(testError))
        })
    }));

    it(`doesn't request image if today's image already in state`, sinonTest(function() {
      const dispatchSpy = this.spy();
      const getState = () => ({
        images: {
          collection: {
            today: {}
          }
        }
      });
      
      const action = actions.getImage(undefined)(dispatchSpy, getState);
      expect(action).toEqual(false);
    }));

    it(`doesn't request image if given date image already in state`, sinonTest(function() {
      const dispatchSpy = this.spy();
      const testDate = 'test-date'
      const getState = () => ({
        images: {
          collection: {
            [testDate]: {}
          }
        }
      });
      
      const action = actions.getImage(testDate)(dispatchSpy, getState);
      expect(action).toEqual(false);
    }));
  });

  describe('imageRequest()', () => {
    it('returns object with type "IMAGE_REQUEST"', () => {
      expect(actions.imageRequest()).toEqual({
        type: 'IMAGE_REQUEST'
      });
    });
  });

  describe('imageReceived()', () => {
    it('returns object with type "IMAGE_RECEIVED" and default payload', () => {
      const response = 'test response';
      expect(actions.imageReceived(undefined, response)).toEqual({
        type: 'IMAGE_RECEIVED',
        payload: {
          today: response
        }
      });
    });

    it('returns object with type "IMAGE_RECEIVED" and given date payload', () => {
      const response = 'test response';
      const testDate = 'test-date'
      expect(actions.imageReceived(testDate, response)).toEqual({
        type: 'IMAGE_RECEIVED',
        payload: {
          [testDate]: response
        }
      });
    });
  });

  describe('imageError()', () => {
    it('returns object with type "IMAGE_ERROR" and error', () => {
      const responseError = 'error';
      expect(actions.imageError(responseError)).toEqual({
        type: 'IMAGE_ERROR',
        error: responseError
      });
    });
  });
});