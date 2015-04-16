
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

var gridData = Ember.A([ { id: 1, title: 'A', description: 'description-a'}, { id: 2, title: 'B', description: 'description-b'}]);
var columnProperties = Ember.A([ {field: 'id',  header: 'ID'} , {field:'title', header: 'TITLE'}]);

moduleForComponent('flex-grid', 'FlexGridComponent', {
  beforeEach: function() {
    this.subject().set('dataSource', gridData);
    this.subject().set('columnProperties', columnProperties);
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

test('header number is equal to number of header in columnProperties', function(assert) {
  var x = this.$();
  var columnNum = $('table >thead >tr >td').length;

  assert.equal(columnNum, columnProperties.length);

  this.subject().willDestroyElement();
});

test('column number is equal to number of visible field in columnProperties', function(assert) {
  var x = this.$();
  var columnNum = $('table >tbody >tr >td').length;

  assert.equal(columnNum, columnProperties.length);

  this.subject().willDestroyElement();
});





