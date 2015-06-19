import Ember from 'ember';


export default Ember.Controller.extend({

  anotherData: Ember.A( [ Ember.Object.create({ id: 1, title: 'M'}), 
  							Ember.Object.create({ id: 2, title: 'B'}),
  							Ember.Object.create({ id: 3, title: 'C'}),
  							Ember.Object.create({ id: 4, title: 'R'}),
  							Ember.Object.create({ id: 5, title: 'E'}),
  							Ember.Object.create({ id: 6, title: 'F'}),
  							Ember.Object.create({ id: 7, title: 'G'}),
  							Ember.Object.create({ id: 8, title: 'H'}),
  							Ember.Object.create({ id: 9, title: 'I'}),
  							Ember.Object.create({ id: 10, title: 'S'}),
  							Ember.Object.create({ id: 11, title: 'K'}),
  							Ember.Object.create({ id: 12, title: 'L'}),
  							Ember.Object.create({ id: 13, title: 'A'}),
  							Ember.Object.create({ id: 14, title: 'N'}),
  							Ember.Object.create({ id: 15, title: 'O'}),
  							Ember.Object.create({ id: 16, title: 'P'}),
  							Ember.Object.create({ id: 17, title: 'D'}),
  							Ember.Object.create({ id: 18, title: 'J'})

  							]),

  firstData: Ember.Object.create({ id: 1, title: 'A'}),

  fieldName: 'id',

  columnProperties: Ember.A([{field: 'id',  header: 'ID'} , {field:'title', header: 'TITLE'}])

});

