'use strict';

const galleryDialog = document.querySelector('[data-gallery-dialog]');

if (galleryDialog && typeof galleryDialog.showModal === 'function') {
  const preview = galleryDialog.querySelector('[data-gallery-preview]');
  const fileLink = galleryDialog.querySelector('[data-gallery-file]');
  let opener;

  for (const link of document.querySelectorAll('a[data-gallery-image]')) {
    link.setAttribute('aria-haspopup', 'dialog');
  }

  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const link = event.target.closest('a[data-gallery-image]');
    if (!link || galleryDialog.open) return;

    event.preventDefault();
    opener = link;
    const thumbnail = link.querySelector('img') || document.getElementById(link.dataset.galleryImage);
    const image = new Image();
    image.alt = thumbnail?.alt ?? '';
    image.src = link.href;
    preview.replaceChildren(image);
    fileLink.href = link.href;
    galleryDialog.showModal();
    galleryDialog.scrollTop = 0;
  });

  galleryDialog.addEventListener('close', () => {
    preview.replaceChildren();
    opener?.focus();
  });
}
