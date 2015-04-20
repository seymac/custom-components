/**
 * Created by scakmak on 20/04/2015.
 */

import { test, moduleFor } from 'ember-qunit';
import startApp from '../../../helpers/start-app';
import Ember from 'ember';

var App;

var view;

moduleFor('view:grid/cell', 'CellView', {

  beforeEach: function() {
    view = this.subject();
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});


test('has columns tag', function(assert) {
  var tagName = view.tagName;
  var expectedTagName = 'td';
  assert.equal(tagName, expectedTagName);

  this.subject().willDestroyElement();
});

