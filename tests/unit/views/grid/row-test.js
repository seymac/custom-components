/**
 * Created by scakmak on 16/04/2015.
 */
import { test, moduleFor } from 'ember-qunit';
import startApp from '../../../helpers/start-app';
import Ember from 'ember';

var App;

moduleFor('view:grid/row', 'RowView', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('is a row tag', function(assert) {
  var tagName = this.subject().tagName;
  var expectedTagName = 'tr';
  assert.equal(tagName, expectedTagName);

  this.subject().willDestroyElement();
});
