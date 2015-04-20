import Ember from 'ember';


export default Ember.Controller.extend({

  anotherData: Ember.A( [ Ember.Object.create({ id: 1, title: 'A'}), Ember.Object.create({ id: 2, title: 'B'})]),

  firstData: Ember.Object.create({ id: 1, title: 'A'}),

  fieldName: 'id',

  columnProperties: Ember.A([{field: 'id',  header: 'ID'} , {field:'title', header: 'TITLE'}])

});

