document.querySelectorAll('.casinha').forEach(casa => {
  casa.addEventListener('mouseenter', () => {
    casa.style.zIndex = 10;
  });
  casa.addEventListener('mouseleave', () => {
    casa.style.zIndex = 1;
  });
});
