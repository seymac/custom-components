import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'tr',
  content: Ember.A([]),
  columnProperties: Ember.A([])
});
