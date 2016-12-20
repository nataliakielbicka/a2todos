export class Init {
  load() {
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
      console.log('No Todos Found... Creating...');
      var todos = [
        {
          text: 'Drink milk'
        },
        {
          text: 'Take up pills'
        },
        {
          text: 'Prepare dinner'
        }
      ];
      
      localStorage.setItem('todos', JSON.stringify(todos));
      return
    } else {
      console.log('Found Todos...');
    }
  }
}

