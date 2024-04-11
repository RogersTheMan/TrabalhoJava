document.getElementById('showListBtn').addEventListener('click', function() {
  var list = document.getElementById('studentList');
  if (list.style.display === 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
});
