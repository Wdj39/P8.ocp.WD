document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project').forEach((card, index) => {
    // ID unique pour debug (facultatif)
    card.setAttribute('data-id', `project-${index + 1}`);

    const blocks = card.querySelectorAll('.filter-block');

    blocks.forEach(block => {
      const button = block.querySelector('.filter-btn');
      const content = block.querySelector('.detail-content');

      button.addEventListener('click', () => {
        const isVisible = content.classList.contains('active');

        if (isVisible) {
          content.classList.remove('active');
          button.classList.remove('active');
        } else {
          content.classList.add('active');
          button.classList.add('active');
        }
      });
    });
  });
});
