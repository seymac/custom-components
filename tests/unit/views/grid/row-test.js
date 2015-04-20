/**
 * Created by scakmak on 16/04/2015.
 */
import { test, moduleFor } from 'ember-qunit';
import startApp from '../../../helpers/start-app';
import Ember from 'ember';

var App;

var content = { id: 1, title: 'A', description: 'description-a'};
var columnProperties = Ember.A([ {field: 'id',  header: 'ID'} , {field:'title', header: 'TITLE'}]);
var view;

moduleFor('view:grid/row', 'RowView', {
  needs: ['template:grid/row'],

  beforeEach: function() {
    view = this.subject({
      content: content,
      columnProperties: columnProperties,
      templateName: 'grid/row'
    });
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('is a row tag', function(assert) {
  var tagName = view.tagName;
  var expectedTagName = 'tr';
  assert.equal(tagName, expectedTagName);

  this.subject().willDestroyElement();
});

test('get content from outside', function(assert) {
  var actualContent = view.get('content');
  assert.equal(actualContent, content);

  this.subject().willDestroyElement();
});

//test('number of column in row equal to number of visible column in columnDefinitions', function(assert) {
//  //var columnNum = $('tr > td').length;
//  var columnNum = Ember.$('.row');
//  assert.equal(columnNum, columnProperties.length);
//
//  this.subject().willDestroyElement();
//});
