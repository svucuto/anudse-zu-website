'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacao');
const narrowScreen = window.matchMedia('(max-width: 1040px)');

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation.toggleAttribute('data-open', open);
}

menuToggle.closest('.nav-shell').setAttribute('data-enhanced', '');
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') === 'false'));
narrowScreen.addEventListener('change', () => {
  if (narrowScreen.matches && navigation.contains(document.activeElement)) menuToggle.focus();
  setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && narrowScreen.matches && navigation.hasAttribute('data-open')) {
    setMenu(false);
    menuToggle.focus();
  }
});

const projects = document.querySelector('[data-projects]');

if (projects) {
  const cards = [...projects.querySelectorAll('[data-project-area]')];
  const filters = projects.querySelector('.projects-filter');
  const status = projects.querySelector('[data-project-status]');

  if (cards.length) {
    projects.querySelector('[data-project-empty]')?.setAttribute('hidden', '');
    filters.hidden = false;

    filters.addEventListener('click', (event) => {
      const selected = event.target.closest('[data-filter]');
      if (!selected) return;

      const category = selected.dataset.filter;
      let count = 0;

      for (const button of filters.querySelectorAll('[data-filter]')) {
        button.setAttribute('aria-pressed', String(button === selected));
      }

      for (const card of cards) {
        const visible = category === 'todos' || card.dataset.projectArea.split(/\s+/).includes(category);
        card.hidden = !visible;
        if (visible) count += 1;
      }

      if (count === 0) status.textContent = 'Ainda não há projectos publicados nesta área.';
      else status.textContent = count === 1 ? '1 projecto encontrado.' : count + ' projectos encontrados.';
    });
  }
}

const contact = document.querySelector('[data-contact-form]');

if (contact) {
  const subject = contact.elements.assunto;
  const requestedSubject = new URLSearchParams(window.location.search).get('assunto');
  if (requestedSubject && [...subject.options].some((option) => option.value === requestedSubject)) {
    subject.value = requestedSubject;
  }

  // Use an email approved for public disclosure, with a simple ASCII mailbox address.
  const email = contact.dataset.email.trim();
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    const direct = document.querySelector('[data-email-link]');
    const status = contact.querySelector('[data-form-status]');
    const fieldset = contact.querySelector('fieldset');

    direct.href = 'mailto:' + email;
    direct.textContent = email;
    direct.hidden = false;
    document.querySelector('[data-email-pending]')?.setAttribute('hidden', '');
    document.querySelector('[data-form-pending]').hidden = true;
    document.querySelector('[data-form-ready]').hidden = false;
    contact.setAttribute('aria-describedby', 'form-envio');

    for (const note of document.querySelectorAll('[data-contact-pending]')) note.hidden = true;
    for (const link of document.querySelectorAll('[data-contact-start]')) link.firstChild.textContent = 'Preparar mensagem';

    contact.addEventListener('submit', (event) => {
      event.preventDefault();
      const values = new FormData(contact);
      const name = values.get('nome').trim();
      const message = values.get('mensagem').trim();
      const phone = values.get('telefone').trim();
      if (!name || !message) {
        status.textContent = 'Preencha o nome e a mensagem.';
        contact.elements[name ? 'mensagem' : 'nome'].focus();
        return;
      }
      const lines = [
        'Nome: ' + name,
        'Email: ' + values.get('email'),
        ...(phone ? ['Telefone: ' + phone] : []),
        '',
        message,
        '',
        'Autorizo a ANUDSE-ZU a tratar os dados indicados para responder ao meu pedido.'
      ];
      const draft = direct.href + '?subject=' + encodeURIComponent(subject.selectedOptions[0].text) +
        '&body=' + encodeURIComponent(lines.join('\r\n'));

      status.textContent = 'Pedido de abertura do rascunho. Se a aplicação não abrir, use o endereço indicado nos contactos.';
      window.location.href = draft;
    });

    fieldset.disabled = false;
  }
}
