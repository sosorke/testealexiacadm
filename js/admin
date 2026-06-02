(function () {
  // SPA controller implementing required behavior
  const ADMIN_KEY = 'clinic_admin_user';
  const PATIENTS_KEY = 'clinic_patients';
  const APPOINTMENTS_KEY = 'clinic_appointments';
  const THEME_KEY = 'clinic_theme';
  const SITE_CONTENT_KEY = 'clinic_site_content';

const state = { view: 'dashboard' };

function mergeDeep(base, source) {
  const result = { ...base };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = mergeDeep(base[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

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

const storage = {
  getPatients() { try { return JSON.parse(localStorage.getItem(PATIENTS_KEY) || '[]'); } catch(e){ return []; } },
  savePatients(list) { localStorage.setItem(PATIENTS_KEY, JSON.stringify(list)); },
  getAppointments() { try { return JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) || '[]'); } catch(e){ return []; } },
  saveAppointments(list) { localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(list)); },
  getTheme() { return localStorage.getItem(THEME_KEY) || 'light'; },
  saveTheme(theme) { localStorage.setItem(THEME_KEY, theme); },
  getSiteContent() { try { return mergeDeep(DEFAULT_SITE_CONTENT, JSON.parse(localStorage.getItem(SITE_CONTENT_KEY) || '{}')); } catch(e){ return { ...DEFAULT_SITE_CONTENT }; } },
  saveSiteContent(value) { localStorage.setItem(SITE_CONTENT_KEY, JSON.stringify(value)); }
};

function getUser() {
  try { return JSON.parse(localStorage.getItem(ADMIN_KEY)); } catch(e){ return null; }
}

function requireLogin() {
  const user = getUser();
  if (!user || !user.loggedIn) { window.location.href = 'login.html'; return null; }
  return user;
}

function setActiveButton(section) {
  document.querySelectorAll('.sidebar-link').forEach(b => b.classList.toggle('active', b.dataset.section === section));
}

function fadeReplace(container, html) {
  if (!container) return;
  container.querySelectorAll('.page-view').forEach(n => n.remove());
  const wrapper = document.createElement('div');
  wrapper.className = 'page-view';
  wrapper.style.opacity = '0';
  wrapper.innerHTML = html;
  container.appendChild(wrapper);
  requestAnimationFrame(() => { wrapper.classList.add('visible'); wrapper.style.opacity = ''; });
}

function renderDashboard() {
  return `
    <div class="card">
      <h2>Dashboard</h2>
      <p>Resumo rápido do consultório.</p>
      <p>Pacientes: ${storage.getPatients().length} | Agendamentos: ${storage.getAppointments().length}</p>
    </div>
  `;
}

function renderPatients() {
  const patients = storage.getPatients();
  const rows = patients.map(p => `<tr><td>${p.nome}</td><td>${p.telefone}</td><td>${p.email}</td><td><button data-action="edit-patient" data-id="${p.id}">Editar</button></td></tr>`).join('') || '<tr><td colspan="4">Nenhum paciente cadastrado</td></tr>';
  return `
    <div class="card">
      <h2>Pacientes Cadastrados</h2>
      <button class="button-primary" data-section="patient-form">+ Cadastrar paciente</button>
      <table style="width:100%;margin-top:1rem;border-collapse:collapse">
        <thead><tr><th>Nome</th><th>Telefone</th><th>Email</th><th>Ações</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderAppointments() {
  const appts = storage.getAppointments();
  const rows = appts.map(a => `<tr><td>${a.pacienteNome||a.pacienteId}</td><td>${a.data}</td><td>${a.horario}</td><td>${a.procedimento}</td></tr>`).join('') || '<tr><td colspan="4">Nenhum agendamento</td></tr>';
  return `
    <div class="card">
      <h2>Agendamentos</h2>
      <button class="button-primary" data-section="appointment-form">+ Agendar</button>
      <table style="width:100%;margin-top:1rem;border-collapse:collapse">
        <thead><tr><th>Paciente</th><th>Data</th><th>Horário</th><th>Procedimento</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderPatientForm(editId) {
  const patient = (storage.getPatients().find(p=>p.id===editId)) || {};
  return `
    <div class="card">
      <h2>${editId ? 'Editar paciente' : 'Cadastrar paciente'}</h2>
      <form id="patient-form">
        <div class="field"><label>Nome</label><input name="nome" required value="${patient.nome||''}"></div>
        <div class="field"><label>Telefone</label><input name="telefone" required value="${patient.telefone||''}"></div>
        <div class="field"><label>Email</label><input name="email" type="email" value="${patient.email||''}"></div>
        <input type="hidden" name="id" value="${patient.id||''}">
        <div style="margin-top:1rem"><button type="submit" class="button-primary">Salvar</button> <button type="button" data-section="patients" class="button-secondary">Cancelar</button></div>
      </form>
      <p id="patient-form-feedback" class="form-feedback"></p>
    </div>
  `;
}

function renderAppointmentForm() {
  const patients = storage.getPatients();
  const options = patients.length ? patients.map(p => `<option value="${p.id}">${p.nome}</option>`).join('') : '';
  return `
    <div class="card">
      <h2>Agendar atendimento</h2>
      <form id="appointment-form">
        <div class="field"><label>Paciente</label><select name="pacienteId">${options}<option value="">Novo paciente</option></select></div>
        <div class="field"><label>Nome do paciente</label><input name="pacienteNome" placeholder="Digite aqui se não houver paciente cadastrado"></div>
        <div class="field"><label>Data</label><input name="data" type="date" required></div>
        <div class="field"><label>Horário</label><input name="horario" type="time" required></div>
        <div class="field"><label>Procedimento</label><input name="procedimento" required></div>
        <div style="margin-top:1rem"><button type="submit" class="button-primary">Agendar</button> <button type="button" data-section="appointments" class="button-secondary">Cancelar</button></div>
      </form>
      <p id="appointment-form-feedback" class="form-feedback"></p>
    </div>
  `;
}

function renderSiteEditor() {
  const site = storage.getSiteContent();
  return `
    <div class="card">
      <h2>Editar Conteúdo do Site</h2>
      <form id="site-editor-form" class="site-form">
        <h3>Home / Hero</h3>
        <div class="field"><label>Texto do topo</label><input name="home_hero_eyebrow" value="${site.home.hero.eyebrow}"></div>
        <div class="field"><label>Título do hero</label><input name="home_hero_title" value="${site.home.hero.title}"></div>
        <div class="field"><label>Descrição do hero</label><textarea name="home_hero_lead">${site.home.hero.lead}</textarea></div>
        <div class="field"><label>Ponto 1</label><input name="home_point_0" value="${site.home.hero.points[0]}"></div>
        <div class="field"><label>Ponto 2</label><input name="home_point_1" value="${site.home.hero.points[1]}"></div>
        <div class="field"><label>Ponto 3</label><input name="home_point_2" value="${site.home.hero.points[2]}"></div>

        <h3>Home / Boas-vindas</h3>
        <div class="field"><label>Eyebrow</label><input name="home_welcome_eyebrow" value="${site.home.welcome.eyebrow}"></div>
        <div class="field"><label>Título</label><input name="home_welcome_heading" value="${site.home.welcome.heading}"></div>
        <div class="field"><label>Missão</label><textarea name="home_mission_text">${site.home.welcome.cards[0].text}</textarea></div>
        <div class="field"><label>Valores</label><textarea name="home_values_text">${site.home.welcome.cards[1].text}</textarea></div>
        <div class="field"><label>Visão</label><textarea name="home_vision_text">${site.home.welcome.cards[2].text}</textarea></div>

        <h3>Home / Sobre a profissional</h3>
        <div class="field"><label>Eyebrow</label><input name="home_about_eyebrow" value="${site.home.aboutPreview.eyebrow}"></div>
        <div class="field"><label>Título</label><input name="home_about_heading" value="${site.home.aboutPreview.heading}"></div>
        <div class="field"><label>Parágrafo</label><textarea name="home_about_text">${site.home.aboutPreview.paragraph}</textarea></div>
        <div class="field"><label>Texto do link</label><input name="home_about_link_text" value="${site.home.aboutPreview.linkText}"></div>
        <div class="field"><label>Link</label><input name="home_about_link_href" value="${site.home.aboutPreview.linkHref}"></div>

        <h3>Home / Galeria</h3>
        <div class="field"><label>Eyebrow</label><input name="home_gallery_eyebrow" value="${site.home.gallery.eyebrow}"></div>
        <div class="field"><label>Título</label><input name="home_gallery_heading" value="${site.home.gallery.heading}"></div>

        <h3>Home / CTA</h3>
        <div class="field"><label>Título</label><input name="home_cta_heading" value="${site.home.cta.heading}"></div>

        <h3>Sobre / Hero</h3>
        <div class="field"><label>Eyebrow</label><input name="about_hero_eyebrow" value="${site.about.hero.eyebrow}"></div>
        <div class="field"><label>Título</label><input name="about_hero_title" value="${site.about.hero.title}"></div>
        <div class="field"><label>Descrição</label><textarea name="about_hero_lead">${site.about.hero.lead}</textarea></div>

        <h3>Sobre / Biografia</h3>
        <div class="field"><label>Título</label><input name="about_biography_title" value="${site.about.biography.title}"></div>
        <div class="field"><label>Parágrafo 1</label><textarea name="about_bio_para_0">${site.about.biography.paragraphs[0]}</textarea></div>
        <div class="field"><label>Parágrafo 2</label><textarea name="about_bio_para_1">${site.about.biography.paragraphs[1]}</textarea></div>

        <h3>Sobre / Formação</h3>
        <div class="field"><label>Título</label><input name="about_formation_title" value="${site.about.formation.title}"></div>
        <div class="field"><label>Item 1</label><input name="about_formation_item_0" value="${site.about.formation.items[0]}"></div>
        <div class="field"><label>Item 2</label><input name="about_formation_item_1" value="${site.about.formation.items[1]}"></div>
        <div class="field"><label>Item 3</label><input name="about_formation_item_2" value="${site.about.formation.items[2]}"></div>
        <div class="field"><label>Item 4</label><input name="about_formation_item_3" value="${site.about.formation.items[3]}"></div>

        <h3>Sobre / Diferenciais</h3>
        <div class="field"><label>Eyebrow</label><input name="about_diff_eyebrow" value="${site.about.differentials.eyebrow}"></div>
        <div class="field"><label>Título</label><input name="about_diff_heading" value="${site.about.differentials.heading}"></div>
        <div class="field"><label>Diferencial 1</label><input name="about_diff_item_0_title" value="${site.about.differentials.items[0].title}"></div>
        <div class="field"><label>Texto 1</label><textarea name="about_diff_item_0_text">${site.about.differentials.items[0].text}</textarea></div>
        <div class="field"><label>Diferencial 2</label><input name="about_diff_item_1_title" value="${site.about.differentials.items[1].title}"></div>
        <div class="field"><label>Texto 2</label><textarea name="about_diff_item_1_text">${site.about.differentials.items[1].text}</textarea></div>
        <div class="field"><label>Diferencial 3</label><input name="about_diff_item_2_title" value="${site.about.differentials.items[2].title}"></div>
        <div class="field"><label>Texto 3</label><textarea name="about_diff_item_2_text">${site.about.differentials.items[2].text}</textarea></div>

        <h3>Serviços</h3>
        <div class="field"><label>Eyebrow</label><input name="services_eyebrow" value="${site.services.header.eyebrow}"></div>
        <div class="field"><label>Título</label><input name="services_heading" value="${site.services.header.title}"></div>
        <div class="field"><label>Descrição</label><textarea name="services_lead">${site.services.header.lead}</textarea></div>
        ${site.services.cards.map((card, index) => `
          <div class="field"><label>Serviço ${index + 1}</label><input name="services_card_${index}_title" value="${card.title}"></div>
          <div class="field"><label>Descrição ${index + 1}</label><textarea name="services_card_${index}_text">${card.text}</textarea></div>
        `).join('')}
        <div class="field"><label>Galeria Eyebrow</label><input name="services_gallery_eyebrow" value="${site.services.gallery.eyebrow}"></div>
        <div class="field"><label>Galeria Título</label><input name="services_gallery_heading" value="${site.services.gallery.heading}"></div>

        <h3>Contato</h3>
        <div class="field"><label>Eyebrow</label><input name="contact_eyebrow" value="${site.contact.hero.eyebrow}"></div>
        <div class="field"><label>Título</label><input name="contact_title" value="${site.contact.hero.title}"></div>
        <div class="field"><label>Descrição</label><textarea name="contact_lead">${site.contact.hero.lead}</textarea></div>
        <div class="field"><label>Botão WhatsApp</label><input name="contact_button_text" value="${site.contact.hero.buttonText}"></div>
        <div class="field"><label>Número do WhatsApp</label><input name="contact_phone" value="${site.contact.hero.phone}"></div>

        <h3>Rodapé</h3>
        <div class="field"><label>Texto de negócios</label><textarea name="footer_business">${site.footer.business}</textarea></div>
        <div class="field"><label>Telefone</label><input name="footer_phone" value="${site.footer.phone}"></div>
        <div class="field"><label>Email</label><input name="footer_email" value="${site.footer.email}"></div>
        <div class="field"><label>Endereço linha 1</label><input name="footer_location_1" value="${site.footer.location1}"></div>
        <div class="field"><label>Endereço linha 2</label><input name="footer_location_2" value="${site.footer.location2}"></div>

        <div style="margin-top:1rem"><button type="submit" class="button-primary">Salvar</button></div>
      </form>
    </div>
  `;
}

function renderSettings() {
  const theme = storage.getTheme();
  return `
    <div class="card">
      <h2>Configurações</h2>
      <form id="settings-form" class="site-form">
        <div class="field">
          <label>Tema do site</label>
          <select name="theme">
            <option value="light" ${theme === 'light' ? 'selected' : ''}>Branco</option>
            <option value="dark" ${theme === 'dark' ? 'selected' : ''}>Preto</option>
          </select>
        </div>
        <div style="margin-top:1rem"><button type="submit" class="button-primary">Salvar tema</button></div>
      </form>
      <p id="settings-feedback" class="form-feedback"></p>
    </div>
  `;
}

function renderSectionHTML(section, opts={}){
  switch(section){
    case 'dashboard': return renderDashboard();
    case 'patients': return renderPatients();
    case 'appointments': return renderAppointments();
    case 'patient-form': return renderPatientForm(opts.editId);
    case 'appointment-form': return renderAppointmentForm();
    case 'site': return renderSiteEditor();
    case 'settings': return renderSettings();
    default: return `<div class="card"><p>Seção não encontrada</p></div>`;
  }
}

function loadSection(section, opts={}){
  state.view = section;
  setActiveButton(section);
  const container = document.getElementById('admin-content');
  if (!container) return;
  const html = renderSectionHTML(section, opts);
  fadeReplace(container, html);

  setTimeout(()=>{
    if (section === 'patient-form') {
      const form = document.getElementById('patient-form');
      if (form) form.addEventListener('submit', handlePatientFormSubmit);
    }
    if (section === 'appointment-form') {
      const form = document.getElementById('appointment-form');
      if (form) form.addEventListener('submit', handleAppointmentFormSubmit);
    }
    if (section === 'patients') {
      container.querySelectorAll('[data-action="edit-patient"]').forEach(btn=>{
        btn.addEventListener('click', ()=> loadSection('patient-form', { editId: btn.dataset.id }));
      });
    }
    if (section === 'site') {
      const form = document.getElementById('site-editor-form');
      if (form) form.addEventListener('submit', handleSiteEditorSubmit);
    }
    if (section === 'settings') {
      const form = document.getElementById('settings-form');
      if (form) form.addEventListener('submit', handleSettingsSubmit);
    }
  }, 60);
}

function handlePatientFormSubmit(event){
  event.preventDefault();
  const form = event.target;
  const id = form.id.value || `p${Date.now()}`;
  const payload = { id, nome: form.nome.value.trim(), telefone: form.telefone.value.trim(), email: form.email.value.trim() };
  const list = storage.getPatients();
  const idx = list.findIndex(p=>p.id===id);
  if (idx > -1) list[idx] = payload; else list.unshift(payload);
  storage.savePatients(list);
  const fb = document.getElementById('patient-form-feedback'); if (fb) fb.textContent = 'Paciente salvo com sucesso.';
  setTimeout(()=> loadSection('patients'), 600);
}

function handleAppointmentFormSubmit(event){
  event.preventDefault();
  const form = event.target;
  const pacienteId = form.pacienteId.value;
  const patients = storage.getPatients();
  const patient = patients.find(p=>p.id===pacienteId);
  const pacienteNome = patient ? patient.nome : form.pacienteNome.value.trim();
  const data = form.data.value;
  const horario = form.horario.value;
  const procedimento = form.procedimento.value.trim();

  if (!pacienteNome || !data || !horario || !procedimento) {
    const fb = document.getElementById('appointment-form-feedback'); if (fb) fb.textContent = 'Preencha todos os campos para agendar.';
    return;
  }

  const appointment = {
    id: `a${Date.now()}`,
    pacienteId: patient ? patient.id : '',
    pacienteNome,
    data,
    horario,
    procedimento
  };
  const list = storage.getAppointments();
  list.unshift(appointment);
  storage.saveAppointments(list);
  const fb = document.getElementById('appointment-form-feedback'); if (fb) fb.textContent = 'Agendamento salvo com sucesso.';
  setTimeout(()=> loadSection('appointments'), 600);
}

function handleSiteEditorSubmit(event){
  event.preventDefault();
  const form = event.target;
  const values = new FormData(form);
  const site = {
    header: {
      brandTitle: values.get('brand_title') || 'Consultório odontológico',
      brandSubtitle: values.get('brand_subtitle') || 'Dra. Alexia Medeiros'
    },
    home: {
      hero: {
        eyebrow: values.get('home_hero_eyebrow') || '',
        title: values.get('home_hero_title') || '',
        lead: values.get('home_hero_lead') || '',
        points: [
          values.get('home_point_0') || '',
          values.get('home_point_1') || '',
          values.get('home_point_2') || ''
        ]
      },
      welcome: {
        eyebrow: values.get('home_welcome_eyebrow') || '',
        heading: values.get('home_welcome_heading') || '',
        cards: [
          { title: 'Missão', text: values.get('home_mission_text') || '' },
          { title: 'Valores', text: values.get('home_values_text') || '' },
          { title: 'Visão', text: values.get('home_vision_text') || '' }
        ]
      },
      aboutPreview: {
        eyebrow: values.get('home_about_eyebrow') || '',
        heading: values.get('home_about_heading') || '',
        paragraph: values.get('home_about_text') || '',
        linkText: values.get('home_about_link_text') || 'Ver biografia completa',
        linkHref: values.get('home_about_link_href') || 'sobre.html'
      },
      gallery: {
        eyebrow: values.get('home_gallery_eyebrow') || '',
        heading: values.get('home_gallery_heading') || ''
      },
      cta: {
        heading: values.get('home_cta_heading') || ''
      }
    },
    about: {
      hero: {
        eyebrow: values.get('about_hero_eyebrow') || '',
        title: values.get('about_hero_title') || '',
        lead: values.get('about_hero_lead') || ''
      },
      biography: {
        title: values.get('about_biography_title') || '',
        paragraphs: [
          values.get('about_bio_para_0') || '',
          values.get('about_bio_para_1') || ''
        ]
      },
      formation: {
        title: values.get('about_formation_title') || '',
        items: [
          values.get('about_formation_item_0') || '',
          values.get('about_formation_item_1') || '',
          values.get('about_formation_item_2') || '',
          values.get('about_formation_item_3') || ''
        ]
      },
      differentials: {
        eyebrow: values.get('about_diff_eyebrow') || '',
        heading: values.get('about_diff_heading') || '',
        items: [
          { title: values.get('about_diff_item_0_title') || '', text: values.get('about_diff_item_0_text') || '' },
          { title: values.get('about_diff_item_1_title') || '', text: values.get('about_diff_item_1_text') || '' },
          { title: values.get('about_diff_item_2_title') || '', text: values.get('about_diff_item_2_text') || '' }
        ]
      }
    },
    services: {
      header: {
        eyebrow: values.get('services_eyebrow') || '',
        title: values.get('services_heading') || '',
        lead: values.get('services_lead') || ''
      },
      cards: [
        { title: values.get('services_card_0_title') || '', text: values.get('services_card_0_text') || '' },
        { title: values.get('services_card_1_title') || '', text: values.get('services_card_1_text') || '' },
        { title: values.get('services_card_2_title') || '', text: values.get('services_card_2_text') || '' },
        { title: values.get('services_card_3_title') || '', text: values.get('services_card_3_text') || '' },
        { title: values.get('services_card_4_title') || '', text: values.get('services_card_4_text') || '' },
        { title: values.get('services_card_5_title') || '', text: values.get('services_card_5_text') || '' }
      ],
      gallery: {
        eyebrow: values.get('services_gallery_eyebrow') || '',
        heading: values.get('services_gallery_heading') || ''
      }
    },
    contact: {
      hero: {
        eyebrow: values.get('contact_eyebrow') || '',
        title: values.get('contact_title') || '',
        lead: values.get('contact_lead') || '',
        buttonText: values.get('contact_button_text') || '',
        phone: values.get('contact_phone') || ''
      }
    },
    footer: {
      business: values.get('footer_business') || '',
      phone: values.get('footer_phone') || '',
      email: values.get('footer_email') || '',
      location1: values.get('footer_location_1') || '',
      location2: values.get('footer_location_2') || ''
    }
  };
  storage.saveSiteContent(site);
  const feedback = document.getElementById('site-feedback'); if (feedback) feedback.textContent = 'Configurações do site salvas.';
}

function handleSettingsSubmit(event){
  event.preventDefault();
  const theme = event.target.theme.value;
  storage.saveTheme(theme);
  applyCurrentTheme();
  const feedback = document.getElementById('settings-feedback'); if (feedback) feedback.textContent = 'Tema salvo.';
}

function renderSectionHTML(section, opts={}){
  switch(section){
    case 'dashboard': return renderDashboard();
    case 'patients': return renderPatients();
    case 'appointments': return renderAppointments();
    case 'patient-form': return renderPatientForm(opts.editId);
    case 'appointment-form': return renderAppointmentForm();
    case 'site': return renderSiteEditor();
    case 'settings': return renderSettings();
    default: return `<div class="card"><p>Seção não encontrada</p></div>`;
  }
}

function loadSection(section, opts={}){
  state.view = section;
  setActiveButton(section);
  const container = document.getElementById('admin-content');
  if (!container) return;
  const html = renderSectionHTML(section, opts);
  fadeReplace(container, html);

  setTimeout(()=>{
    if (section === 'patient-form') {
      const form = document.getElementById('patient-form');
      if (form) form.addEventListener('submit', handlePatientFormSubmit);
    }
    if (section === 'appointment-form') {
      const form = document.getElementById('appointment-form');
      if (form) form.addEventListener('submit', handleAppointmentFormSubmit);
    }
    if (section === 'patients') {
      container.querySelectorAll('[data-action="edit-patient"]').forEach(btn=>{
        btn.addEventListener('click', ()=> loadSection('patient-form', { editId: btn.dataset.id }));
      });
    }
    if (section === 'site') {
      const form = document.getElementById('site-editor-form');
      if (form) form.addEventListener('submit', handleSiteEditorSubmit);
    }
    if (section === 'settings') {
      const form = document.getElementById('settings-form');
      if (form) form.addEventListener('submit', handleSettingsSubmit);
    }
  }, 60);
}

function handlePatientFormSubmit(event){
  event.preventDefault();
  const form = event.target;
  const id = form.id.value || `p${Date.now()}`;
  const payload = { id, nome: form.nome.value.trim(), telefone: form.telefone.value.trim(), email: form.email.value.trim() };
  const list = storage.getPatients();
  const idx = list.findIndex(p=>p.id===id);
  if (idx > -1) list[idx] = payload; else list.unshift(payload);
  storage.savePatients(list);
  const fb = document.getElementById('patient-form-feedback'); if (fb) fb.textContent = 'Paciente salvo com sucesso.';
  setTimeout(()=> loadSection('patients'), 600);
}

function handleAppointmentFormSubmit(event){
  event.preventDefault();
  const form = event.target;
  const pacienteId = form.pacienteId.value;
  const patients = storage.getPatients();
  const patient = patients.find(p=>p.id===pacienteId);
  const pacienteNome = patient ? patient.nome : form.pacienteNome.value.trim();
  const data = form.data.value;
  const horario = form.horario.value;
  const procedimento = form.procedimento.value.trim();

  if (!pacienteNome || !data || !horario || !procedimento) {
    const fb = document.getElementById('appointment-form-feedback'); if (fb) fb.textContent = 'Preencha todos os campos para agendar.';
    return;
  }

  const appointment = {
    id: `a${Date.now()}`,
    pacienteId: patient ? patient.id : '',
    pacienteNome,
    data,
    horario,
    procedimento
  };
  const list = storage.getAppointments();
  list.unshift(appointment);
  storage.saveAppointments(list);
  const fb = document.getElementById('appointment-form-feedback'); if (fb) fb.textContent = 'Agendamento salvo com sucesso.';
  setTimeout(()=> loadSection('appointments'), 600);
}

function applyCurrentTheme() {
  document.body.classList.toggle('theme-dark', storage.getTheme() === 'dark');
}

window.addEventListener('DOMContentLoaded', ()=>{
  const user = requireLogin();
  if (!user) return;
  const meta = document.getElementById('current-user-role'); if (meta) meta.textContent = `${user.nome} (${user.role||'—'})`;
  document.body.addEventListener('click', (e) => {
    const sectionBtn = e.target.closest('[data-section]');
    if (sectionBtn && sectionBtn.dataset.section) {
      loadSection(sectionBtn.dataset.section);
      return;
    }
  });
  const logout = document.getElementById('admin-logout'); if (logout) logout.addEventListener('click', ()=>{ localStorage.removeItem(ADMIN_KEY); window.location.href='login.html'; });
  applyCurrentTheme();
  loadSection(state.view);
});
})();
