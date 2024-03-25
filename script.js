const circles = document.querySelectorAll('.circle');

circles.forEach((circle) =>
  circle.addEventListener('click', (e) => {
    const isActive =
      e.target.classList.contains('active') ||
      e.target.parentNode.classList.contains('active');

    deactivate(e.target);

    if (!isActive) {
      if (!e.target.classList.contains('circle')) {
        e.target.parentNode.classList.toggle('active');
      } else {
        e.target.classList.toggle('active');
      }
    } else {
      e.target.classList.remove('active');
    }
  })
);

function deactivate(self) {
  circles.forEach((circle) => {
    if (circle != self) {
      circle.classList.remove('active');
    }
  });
}
