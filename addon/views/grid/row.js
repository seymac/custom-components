import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'tr',
  content: Ember.Object.create({}),
  columnProperties: Ember.A([]),
  templateName: 'grid/row'
});
