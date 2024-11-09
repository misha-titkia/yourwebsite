document.getElementById('button').addEventListener('click', function(){
var messageDiv = document.getElementById('message');
messageDiv.style.display = 'block';
messageDiv.classList.add('show');

this.textContent = "გმადლოთ რომ დააჭირეთ";
});