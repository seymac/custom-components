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
  beforeEach: function() {
    view = this.subject({
      content: content,
      columnProperties: columnProperties
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
  var tagName = view.get('content');
  assert.equal(tagName, content);

  this.subject().willDestroyElement();
});
