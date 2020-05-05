import { regexPatterns, validateInput } from '../../../src/util/regExPatterns';
import { onServerMessage, onSuccessFullyChanged } from '../../../src/util/eventListeners';

describe('Test ResetPassword', () => {
  const displayMessage = {
    isLoggedIn: true,
    error: '',
    message: 'Hello',
  };

  it('testing validation', () => {
    const testInvalid = {
      value: 'eukigali',
    };
    const testvalid = {
      value: 'eukigali@gmail.com',
    };

    expect(validateInput(testInvalid, regexPatterns.email)).toEqual('invalid');
    expect(validateInput(testvalid, regexPatterns.email)).toEqual('valid');
  });
  it('format message from server', () => {
    expect(onServerMessage(displayMessage)).toEqual('Hello');
    expect(onServerMessage(onServerMessage({}))).toEqual(undefined);
  });
  it('format message from server', () => {
    expect(onSuccessFullyChanged(displayMessage)).toEqual(true);
    expect(onSuccessFullyChanged(onServerMessage({ ...displayMessage, isLoggedIn: false }))).toEqual(undefined);
  });
});
