
import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('flex-grid', 'FlexGridComponent', {
  beforeEach: function() {
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
}


);
