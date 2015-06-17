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
  }),

  paginatedContent: Ember.computed('dataSource', 'currentPage', 'pageLength', function(){
  	var dataSource = this.get('dataSource');
  	var currentPage = this.get('currentPage');
  	var pageLength = this.get('pageLength');
  	var paginatedContent = Ember.A([]);

  	for(var i = (currentPage - 1) * pageLength; i < currentPage * pageLength ; i++){
  		if(dataSource.get(i)){
  			paginatedContent.push(dataSource.get(i));
  		}
  	}
  	return paginatedContent;
  })
});
