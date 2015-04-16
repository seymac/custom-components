import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  dataSource: Ember.A([]),
  columnProperties: Ember.A([])
});
