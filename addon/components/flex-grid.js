import Ember from 'ember';

export default Ember.Component.extend({
  dataSource: Ember.A([]),
  columnProperties: Ember.A([]),
  pageLength: 5,
  currentPage: 1,

  totalPageNumber: Ember.computed('dataSource', 'pageLength', function(){
  	var dataSource = this.get('dataSource');
  	var pageLength = this.get('pageLength');

  	return Math.ceil(dataSource.length / pageLength);
  })
});
