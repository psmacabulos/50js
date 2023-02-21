const panels = document.querySelectorAll('.panels');

panels.forEach((panel) =>
  panel.addEventListener('click', () => {
    removeClasses(panels);
    panel.classList.add('active');
  })
);

const removeClasses = (panels) =>
  panels.forEach((panel) => panel.classList.remove('active'));
