err = "Пользователь не найден"
var errorContainer = document.getElementById('error-container');

function showError(err) {
  errorContainer.textContent = err;
}


try {

  throw new Error('Произошла ошибка');
} catch (error) {
  showError(error.message);
}