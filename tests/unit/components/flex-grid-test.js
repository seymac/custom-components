
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

var gridData = Ember.A([ Ember.Object.create({ id: 1, title: 'A', description: 'description-a'}), Ember.Object.create({ id: 2, title: 'B', description: 'description-b'})]);
var columnProperties = Ember.A([ {field: 'id',  header: 'ID'} , {field:'title', header: 'TITLE'}]);

moduleForComponent('flex-grid', 'FlexGridComponent', {
  needs: ['view:grid/row', 'template:grid/row', 'view:grid/cell', 'template:grid/cell'],

  beforeEach: function() {
    this.subject().set('dataSource', gridData);
    this.subject().set('columnProperties', columnProperties);
    App = startApp();
    var x = this.$();
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
  var rowNum = $('table > tbody > tr').length;

  assert.equal(rowNum, gridData.length);

  this.subject().willDestroyElement();
});

test('header number is equal to number of header in columnProperties', function(assert) {
  var columnNum = $('table > thead').find('> tr:first > td').length;

  assert.equal(columnNum, columnProperties.length);

  this.subject().willDestroyElement();
});

test('column number is equal to number of visible field in columnProperties', function(assert) {
  var columnNum = $('table > tbody').find('> tr:first > td').length;

  assert.equal(columnNum, columnProperties.length);

  this.subject().willDestroyElement();
});





