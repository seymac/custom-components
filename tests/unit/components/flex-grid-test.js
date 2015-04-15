
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

var gridData = Ember.A([ { id: 1, title: 'A'}, { id: 2, title: 'B'}]);

moduleForComponent('flex-grid', 'FlexGridComponent', {
  beforeEach: function() {
    this.subject().set('dataSource', gridData);
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('is a table tag', function(assert) {
  var tagName = this.$().prop('tagName');
  var expectedTagName = 'TABLE';
  assert.equal(tagName, expectedTagName);

  this.subject().willDestroyElement();
});


test('row number is equal to length of dataSource', function(assert) {
  var x = this.$();
  var rowNum = $('table >tbody >tr').length;

  assert.equal(rowNum, gridData.length);

  this.subject().willDestroyElement();
});




