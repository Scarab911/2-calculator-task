console.log('calculator works!');
const equation = document.getElementById('equation');
const answer = document.getElementById('answer');
const allButtons = document.querySelectorAll('button');

allButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    switch (button.innerText) {
      case '=':
        answer.innerText = 'suma';
        equation.innerText = '0';
        console.log(button.innerText);
        break;
      case 'C':
        equation.innerText = '0';
        answer.innerText = '0';
        console.log(button.innerText);
        break;
      case '+':
        equation.innerText = '0';
        answer.innerText = '0';
        console.log(button.innerText);
        break;
      case '-':
        equation.innerText = '0';
        answer.innerText = '0';
        console.log(button.innerText);
        break;
      case 'X':
        equation.innerText = '0';
        answer.innerText = '0';
        console.log(button.innerText);
        break;
      case '/':
        equation.innerText = '0';
        answer.innerText = '0';
        console.log(button.innerText);
        break;
      case '':
        break;

      default:
        equation.innerText = button.innerText;
        console.log(button.innerText);
        break;
    }

    // if (
    //   button.innerText === '=' ||
    //   button.innerText === ' ' ||
    //   button.innerText === '+' ||
    //   button.innerText === '-' ||
    //   button.innerText === 'X' ||
    //   button.innerText === '/' ||
    //   button.innerText === 'C'
    // )
    //   return;
  });
});
