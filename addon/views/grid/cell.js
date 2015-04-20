/**
 * Created by scakmak on 20/04/2015.
 */
import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'td',
  templateName: 'grid/cell',
  rowContent: Ember.Object.create({}),
  fieldName: '',

  content: Ember.computed( 'rowContent', 'fieldName', function(){
    var rowContent = this.get('rowContent');
    var fieldName = this.get('fieldName');
    return rowContent.get(fieldName);
  })
});
