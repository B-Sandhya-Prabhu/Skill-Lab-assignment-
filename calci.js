document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    let currentInput = '';

    buttons.addEventListener('click', function (event) {
      const clickedButton = event.target;

      if (clickedButton.tagName === 'BUTTON') {
        const buttonText = clickedButton.textContent;

        if (buttonText === '=') {
          try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
          } catch (error) {
            display.textContent = 'Error';
          }
        } else {
          currentInput += buttonText;
          display.textContent = currentInput;
        }
      }
    });
  });