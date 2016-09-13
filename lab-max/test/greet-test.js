'use strict';

const helloWorld = require('../lib/greet.js');
const assert = require('assert');

describe('testing module greet', function(){
  describe('testing #greet()', function(){
    it('should return hello max', function(){
      let answer = helloWorld.greet('max');
      assert.ok(answer === 'hello max', 'was not hello max');
    });
    it('should return a string length greater than 5', function(){
      let answerLength = helloWorld.greet('bob').length;
      assert.ok(answerLength > 5, 'not greater than 5');
    });
  });
});
