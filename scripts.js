document.addEventListener('DOMContentLoaded', () => {

  // Turn Counter
  let turnCounter = 1;


  // button
  let button = document.createElement('button');
  let btnTxt = document.createTextNode('Add Square');

  button.appendChild(btnTxt);
  document.body.appendChild(button);

  let container = document.createElement('div');
  container.classList.add('container')
  document.body.appendChild(container)


  // Black Box on Click
  button.addEventListener('click', () => {
    let square = document.createElement('div');
    let boxH1 = document.createElement('h1');
    let boxId = document.createTextNode(`${turnCounter}`);

    square.classList.add('square')
    boxH1.classList.add('hide')

    square.setAttribute('id', `${turnCounter}`);
    turnCounter++

    boxH1.appendChild(boxId);
    square.appendChild(boxH1);
    container.appendChild(square);


    // Event listener
    square.addEventListener('click', () => {
      square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
    // Color change on click
    var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'aqua', 'brown'];


    // Delete next square
    square.addEventListener('dblclick', () => {
      let id = parseInt(square.id, 10);
      if (id % 2 == 0) {
        let itemToRemove = document.getElementById(id + 1);

        if (container.contains(itemToRemove)) {
          container.removeChild(itemToRemove);
        } else {
          alert('element does not exist');
        }
      } else {
        let itemToRemove = document.getElementById(id - 1);

        if (container.contains(itemToRemove)) {
          container.removeChild(itemToRemove);
        } else {
          alert('element does not exist');
        }
      }
    });

    
  });
})