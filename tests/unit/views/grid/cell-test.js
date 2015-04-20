/**
 * Created by scakmak on 20/04/2015.
 */

import { test, moduleFor } from 'ember-qunit';
import startApp from '../../../helpers/start-app';
import Ember from 'ember';

var App;

var view;
var rowContent = Ember.Object.create({ id: 1, title: 'A', description: 'description-a'});
var fieldName = 'id';

moduleFor('view:grid/cell', 'CellView', {

  beforeEach: function() {
    view = this.subject({
      rowContent: rowContent,
      fieldName: fieldName
    });
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

test('has template name cell', function(assert) {
  var templateName = view.templateName;
  var expectedTemplateName = 'grid/cell';
  assert.equal(templateName, expectedTemplateName);

  this.subject().willDestroyElement();
});


test('shows given field of rowContent', function(assert) {
  var cellContent = view.get('content');
  var expectedCellContent = rowContent.get(fieldName);
  assert.equal(cellContent, expectedCellContent);

  this.subject().willDestroyElement();
});
