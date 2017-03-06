'use strict';

var ModelBuilder = require('../index');

test('a blank code will result in an empty result', function() {

  var map = ModelBuilder().createMap();

  expect(map).toMatchSnapshot();

});

test('a 401 is added', function() {

  var map = ModelBuilder().add(401).createMap();

  expect(map).toMatchSnapshot();

});

test('a 401 and 500 is added', function() {

  var map = ModelBuilder().add(401).add(500).createMap();

  expect(map).toMatchSnapshot();

});