window.CLINICA_CONFIG = {
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbzA2oYPwxIKMFC24utpExD_dsPNO3a9sso0ZJkV9grZa05GmUgYM7BqdwEOPJWzIOz8/exec",
  googleSheetUrl: ""
};

const DEFAULT_SITE_CONTENT = {
  header: {
    brandTitle: 'Consultório odontológico',
    brandSubtitle: 'Dra. Alexia Medeiros'
  },
  home: {
    hero: {
      eyebrow: 'Consultório odontológico Dra. Alexia Medeiros',
      title: 'Sorrisos bem cuidados com técnica, leveza e acolhimento.',
      lead: 'Atendimento odontológico com foco em prevenção, estética e conforto para que cada consulta seja tranquila do início ao fim.',
      points: ['Atendimento humanizado', 'Ambiente moderno e acolhedor', 'Planejamento individualizado']
    },
    welcome: {
      eyebrow: 'Boas-vindas',
      heading: 'Um consultório criado para transmitir confiança e serenidade.',
      cards: [
        { title: 'Missão', text: 'A minha missão é te devolver a sua saúde bucal, sempre prezando também a sua estética, através de uma experiência única, com um atendimento interdisciplinar e personalizado.' },
        { title: 'Valores', text: 'Os valores que definem a nossa cultura são os meus princípios fundamentais, como a ética, a integridade, o respeito, a honestidade, a inovação e a qualidade.' },
        { title: 'Visão', text: 'Proporcionar conforto e atendimento de qualidade é a minha maior prioridade. O vínculo entre o paciente e o profissional é essencial para que o paciente se sinta à vontade e satisfeito.' }
      ]
    },
    aboutPreview: {
      eyebrow: 'Sobre a profissional',
      heading: 'Alexia Medeiros une atualização constante e cuidado próximo em cada atendimento.',
      paragraph: 'Formada desde 2018 pela UNIG, a cirurgiã-dentista Dra. Alexia de Medeiros busca oferecer sempre o melhor para cada um de seus pacientes.',
      linkText: 'Ver biografia completa',
      linkHref: 'sobre.html'
    },
    gallery: {
      eyebrow: 'Galeria',
      heading: 'Ambientes e detalhes com visual leve e profissional.'
    },
    cta: {
      heading: 'Receba um atendimento acolhedor desde o primeiro contato.'
    }
  },
  about: {
    hero: {
      eyebrow: 'Sobre',
      title: 'Odontologia com presença, planejamento e atenção aos detalhes.',
      lead: 'Alexia Medeiros desenvolve um atendimento centrado na confiança, buscando unir saúde bucal, conforto e resultados naturais em cada fase do tratamento.'
    },
    biography: {
      title: 'Biografia',
      paragraphs: ['Cirurgiã-dentista formada pela UNIG desde 2018, com experiência em atendimentos clínicos e estéticos para adultos e crianças, focando em resultados naturais.', 'Oferece atendimento humanizado e individualizado em Bangu (RJ), priorizando o bem-estar, a confiança e a excelência no cuidado de cada paciente.']
    },
    formation: {
      title: 'Formação',
      items: ['Graduação em Odontologia – UNIG (2018)', 'Atuação em odontologia clínica geral (adulto e infantil)', 'Aperfeiçoamento em procedimentos estéticos odontológicos', 'Atualização contínua em técnicas e inovações na área odontológica']
    },
    differentials: {
      eyebrow: 'Diferenciais',
      heading: 'Uma experiência pensada para acolher do primeiro contato ao pós-atendimento.',
      items: [
        { title: 'Consulta cuidadosa', text: 'Avaliação detalhada, explicações claras e plano de tratamento alinhado com seus objetivos.' },
        { title: 'Ambiente leve', text: 'Espaço com visual limpo e acolhedor, pensado para reduzir ansiedade e transmitir tranquilidade.' },
        { title: 'Acompanhamento próximo', text: 'Orientações acessíveis para manutenção dos resultados e continuidade do cuidado em casa.' }
      ]
    }
  },
  services: {
    header: {
      eyebrow: 'Serviços',
      title: 'Tratamentos que unem prevenção, funcionalidade e estética.',
      lead: 'Cada serviço é apresentado de forma objetiva para facilitar a navegação e ajudar o paciente a entender as possibilidades de cuidado.'
    },
    cards: [
      { title: 'Prevenção e limpeza', text: 'Consultas preventivas, profilaxia, orientação de higiene e acompanhamento para manter a saúde bucal em dia.' },
      { title: 'Clareamento dental', text: 'Protocolos planejados com foco em segurança, naturalidade e conforto durante todas as etapas.' },
      { title: 'Restaurações estéticas', text: 'Recuperação da forma e função dos dentes com materiais que favorecem um acabamento harmonioso.' },
      { title: 'Avaliação clínica', text: 'Consulta detalhada para investigar necessidades, explicar o diagnóstico e definir o melhor plano de cuidado.' },
      { title: 'Saúde gengival', text: 'Acompanhamento voltado à prevenção e ao cuidado com os tecidos de suporte do sorriso.' },
      { title: 'Odontologia para família', text: 'Atendimento atencioso para diferentes perfis de pacientes, com linguagem acolhedora e organização.' }
    ],
    gallery: {
      eyebrow: 'Galeria',
      heading: 'Apresentação visual com grid responsivo e hover suave.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Contato',
      title: 'Fale conosco pelo WhatsApp',
      lead: 'Clique no botão abaixo para abrir uma conversa.',
      buttonText: 'Enviar mensagem pelo WhatsApp',
      phone: '5521965411267'
    }
  },
  footer: {
    business: 'Atendimento odontológico com delicadeza, clareza e cuidado contínuo.',
    phone: '(21) 96541-1267',
    email: 'draalexiademedeiros@gmail.com',
    location1: 'Rua exemplo, 123',
    location2: 'Bangu, Rio de Janeiro - RJ'
  }
};

function getStoredSiteConfig() {
  try {
    const stored = JSON.parse(localStorage.getItem('clinic_site_content') || '{}');
    return deepMerge(DEFAULT_SITE_CONTENT, stored);
  } catch (error) {
    return { ...DEFAULT_SITE_CONTENT };
  }
}

function deepMerge(defaults, source) {
  const result = { ...defaults };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(defaults[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

function applySiteTheme(theme) {
  document.body.classList.toggle('theme-dark', theme === 'dark');
}

function injectText(selector, text, index = 0) {
  const elements = document.querySelectorAll(selector);
  if (!elements[index]) return;
  elements[index].textContent = text;
}

function applySiteConfig() {
  const config = getStoredSiteConfig();
  const theme = localStorage.getItem('clinic_theme') || 'light';
  applySiteTheme(theme);

  injectText('.brand-text strong', config.header.brandTitle);
  injectText('.brand-text span', config.header.brandSubtitle);

  const page = document.body.dataset.page;
  if (page === 'home') {
    injectText('section.hero .eyebrow', config.home.hero.eyebrow);
    injectText('section.hero h1', config.home.hero.title);
    injectText('section.hero .lead', config.home.hero.lead);
    const points = document.querySelector('.hero-points');
    if (points) points.innerHTML = config.home.hero.points.map(item => `<li>${item}</li>`).join('');

    const headingEls = document.querySelectorAll('.section-heading');
    if (headingEls[0]) {
      injectText('.section-heading .eyebrow', config.home.welcome.eyebrow, 0);
      injectText('.section-heading h2', config.home.welcome.heading, 0);
    }
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards[0]) {
      featureCards[0].querySelector('h3').textContent = config.home.welcome.cards[0].title;
      featureCards[0].querySelector('p').textContent = config.home.welcome.cards[0].text;
    }
    if (featureCards[1]) {
      featureCards[1].querySelector('h3').textContent = config.home.welcome.cards[1].title;
      featureCards[1].querySelector('p').textContent = config.home.welcome.cards[1].text;
    }
    if (featureCards[2]) {
      featureCards[2].querySelector('h3').textContent = config.home.welcome.cards[2].title;
      featureCards[2].querySelector('p').textContent = config.home.welcome.cards[2].text;
    }

    const aboutPreview = document.querySelector('.split-layout');
    if (aboutPreview) {
      injectText('.split-layout .eyebrow', config.home.aboutPreview.eyebrow);
      injectText('.split-layout h2', config.home.aboutPreview.heading);
      const p = aboutPreview.querySelector('p'); if (p) p.textContent = config.home.aboutPreview.paragraph;
      const link = aboutPreview.querySelector('.text-link'); if (link) { link.textContent = config.home.aboutPreview.linkText; link.href = config.home.aboutPreview.linkHref; }
    }

    if (headingEls[1]) {
      injectText('.section-heading .eyebrow', config.home.gallery.eyebrow, 1);
      injectText('.section-heading h2', config.home.gallery.heading, 1);
    }
    injectText('.cta-band h2', config.home.cta.heading);
  }

  if (page === 'sobre') {
    injectText('section.page-hero .eyebrow', config.about.hero.eyebrow);
    injectText('section.page-hero h1', config.about.hero.title);
    injectText('section.page-hero .lead', config.about.hero.lead);

    const cards = document.querySelectorAll('.info-card');
    if (cards[0]) {
      injectText('.info-card h2', config.about.biography.title, 0);
      const paragraphs = cards[0].querySelectorAll('p');
      if (paragraphs[0]) paragraphs[0].textContent = config.about.biography.paragraphs[0];
      if (paragraphs[1]) paragraphs[1].textContent = config.about.biography.paragraphs[1];
    }
    if (cards[1]) {
      injectText('.info-card h2', config.about.formation.title, 1);
      const list = cards[1].querySelector('.check-list');
      if (list) list.innerHTML = config.about.formation.items.map(item => `<li>${item}</li>`).join('');
    }
    const timeline = document.querySelectorAll('.timeline-card');
    config.about.differentials.items.forEach((item, index) => {
      if (!timeline[index]) return;
      injectText('.timeline-card h3', item.title, index);
      const p = timeline[index].querySelector('p'); if (p) p.textContent = item.text;
      const span = timeline[index].querySelector('span'); if (span) span.textContent = `0${index + 1}`;
    });
    injectText('.section-heading .eyebrow', config.about.differentials.eyebrow, 0);
    injectText('.section-heading h2', config.about.differentials.heading, 0);
  }

  if (page === 'servicos') {
    injectText('section.page-main .eyebrow', config.services.header.eyebrow);
    injectText('section.page-main h1', config.services.header.title);
    injectText('section.page-main .lead', config.services.header.lead);
    const serviceCards = document.querySelectorAll('.service-card');
    config.services.cards.forEach((card, index) => {
      if (!serviceCards[index]) return;
      injectText('.service-card h2', card.title, index);
      const p = serviceCards[index].querySelector('p'); if (p) p.textContent = card.text;
    });
    injectText('.section-heading .eyebrow', config.services.gallery.eyebrow, 0);
    injectText('.section-heading h2', config.services.gallery.heading, 0);
  }

  if (page === 'contato') {
    injectText('section.page-hero .eyebrow', config.contact.hero.eyebrow);
    injectText('section.page-hero h1', config.contact.hero.title);
    injectText('section.page-hero .lead', config.contact.hero.lead);
    const button = document.querySelector('.button--whatsapp');
    if (button) {
      button.textContent = config.contact.hero.buttonText;
      button.href = `https://wa.me/${config.contact.hero.phone}`;
    }
  }

  const footerSections = document.querySelectorAll('.site-footer .footer-grid > div');
  if (footerSections[0]) {
    injectText('.site-footer .footer-grid > div strong', 'Alexia Medeiros Odontologia', 0);
    const p = footerSections[0].querySelector('p'); if (p) p.textContent = config.footer.business;
  }
  if (footerSections[1]) {
    injectText('.site-footer .footer-grid > div strong', 'Contato', 1);
    const ps = footerSections[1].querySelectorAll('p');
    if (ps[0]) ps[0].textContent = config.footer.phone;
    if (ps[1]) ps[1].textContent = config.footer.email;
  }
  if (footerSections[2]) {
    injectText('.site-footer .footer-grid > div strong', 'Localização', 2);
    const ps = footerSections[2].querySelectorAll('p');
    if (ps[0]) ps[0].textContent = config.footer.location1;
    if (ps[1]) ps[1].textContent = config.footer.location2;
  }
}

function setFeedback(element, message, type) {
  if (!element) return;
  element.textContent = message;
  element.classList.remove('is-success', 'is-error');
  if (type === 'success') element.classList.add('is-success');
  if (type === 'error') element.classList.add('is-error');
}

function submitToGoogleSheets(payload) {
  const googleAppsScriptUrl = window.CLINICA_CONFIG.googleAppsScriptUrl || '';
  if (!googleAppsScriptUrl) return Promise.resolve({ ok: true, demo: true });
  return fetch(googleAppsScriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  }).then(() => ({ ok: true, demo: false }));
}

const contactForm = document.querySelector('#contato-form');
const siteConfig = window.CLINICA_CONFIG || {};
const googleAppsScriptUrl = siteConfig.googleAppsScriptUrl || '';

if (contactForm) {
  const feedback = document.querySelector('#contato-feedback');
  contactForm.addEventListener('submit', (event) => {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      setFeedback(feedback, 'Preencha os campos obrigatórios antes de enviar.', 'error');
      contactForm.reportValidity();
      return;
    }
    const formData = new FormData(contactForm);
    const payload = {
      tipo: 'contato',
      nome: formData.get('nome'),
      email: formData.get('email'),
      telefone: formData.get('telefone') || '',
      mensagem: formData.get('mensagem')
    };
    if (submitButton) submitButton.disabled = true;
    setFeedback(feedback, 'Enviando mensagem...', 'success');
    submitToGoogleSheets(payload)
      .then(() => {
        contactForm.reset();
        setFeedback(feedback, 'Mensagem enviada com sucesso! Entraremos em contato em breve!', 'success');
      })
      .catch(() => {
        setFeedback(feedback, 'Não foi possível enviar agora. Tente novamente em alguns instantes.', 'error');
      })
      .finally(() => { if (submitButton) submitButton.disabled = false; });
  });
}

window.addEventListener('DOMContentLoaded', applySiteConfig);
