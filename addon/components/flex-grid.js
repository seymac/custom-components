import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  dataSource: [],
  sampleArray: Ember.A( [ { id: 1, title: 'A'}, { id: 2, title: 'B'}])
});
