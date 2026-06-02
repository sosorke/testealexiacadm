(function () {
  const bodyPage = document.body.dataset.page;
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      if (link.dataset.nav === bodyPage) {
        link.classList.add("active");
      }

      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const brandLogo = document.querySelector(".brand-mark");
  if (brandLogo) {
    brandLogo.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      window.location.href = "login.html";
    });
  }

  const contactForm = document.querySelector("#contato-form");
  const cadastroForm = document.querySelector("#cadastro-form");
  const whatsappChatBox = document.querySelector("#whatsapp-chat-box");
  // booking form removed — scheduling feature disabled
  const siteConfig = window.CLINICA_CONFIG || {};
  const googleAppsScriptUrl = siteConfig.googleAppsScriptUrl || "";

  // booking date input removed

  const normalizeWhatsAppNumber = (value) => {
    let digits = (value || "").replace(/\D/g, "").replace(/^0+/, "");
    if (!digits) return "";
    if (!digits.startsWith("55")) digits = `55${digits}`;
    return digits;
  };

  const buildWhatsAppUrl = (number, name) => {
    const message = `Olá ${name}, obrigado pelo cadastro no consultório da Dra. Alexia Medeiros. Em breve entrarei em contato pelo WhatsApp.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const renderWhatsAppChatBox = (url, formattedNumber) => {
    if (!whatsappChatBox) return;
    whatsappChatBox.hidden = false;
    whatsappChatBox.innerHTML = `<div class="chat-box"><strong>Cadastro concluído:</strong><p>O contato <strong>+${formattedNumber}</strong> foi preparado para receber a mensagem no WhatsApp.</p></div>`;
  };

  const setFeedback = (element, message, type) => {
    if (!element) return;
    element.textContent = message;
    element.classList.remove("is-success", "is-error");
    if (type === "success") element.classList.add("is-success");
    if (type === "error") element.classList.add("is-error");
  };

  const submitToGoogleSheets = async (payload) => {
    if (!googleAppsScriptUrl) {
      return { ok: true, demo: true };
    }

    await fetch(googleAppsScriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    return { ok: true, demo: false };
  };

  if (contactForm) {
    const feedback = document.querySelector("#contato-feedback");

    contactForm.addEventListener("submit", (event) => {
      const submitButton = contactForm.querySelector('button[type="submit"]');
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        setFeedback(feedback, "Preencha os campos obrigatórios antes de enviar.", "error");
        contactForm.reportValidity();
        return;
      }

      const formData = new FormData(contactForm);
      const payload = {
        tipo: "contato",
        nome: formData.get("nome"),
        email: formData.get("email"),
        telefone: formData.get("telefone") || "",
        mensagem: formData.get("mensagem")
      };

      if (submitButton) submitButton.disabled = true;
      setFeedback(feedback, "Enviando mensagem...", "success");

      submitToGoogleSheets(payload)
        .then(() => {
          contactForm.reset();
          setFeedback(feedback, "Mensagem enviada com sucesso! Entraremos em contato em breve!", "success");
        })
        .catch(() => {
          setFeedback(feedback, "Não foi possível enviar agora. Tente novamente em alguns instantes.", "error");
        })
        .finally(() => {
          if (submitButton) submitButton.disabled = false;
        });
    });
  }

  if (cadastroForm) {
    const feedback = document.querySelector("#cadastro-feedback");

    cadastroForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const nome = cadastroForm.nome.value.trim();
      const telefone = cadastroForm.telefone.value.trim();
      const cleanedPhone = normalizeWhatsAppNumber(telefone);

      if (!nome || !telefone) {
        setFeedback(feedback, "Digite nome e telefone para prosseguir.", "error");
        return;
      }

      if (!cleanedPhone.match(/^55\d{8,15}$/)) {
        setFeedback(feedback, "Digite um telefone válido, com DDD e sem letras.", "error");
        return;
      }

      const whatsappUrl = buildWhatsAppUrl(cleanedPhone, nome);
      renderWhatsAppChatBox(whatsappUrl, cleanedPhone);
      setFeedback(feedback, "Cadastro realizado! Abra o chat do WhatsApp para enviar a mensagem.", "success");
      window.open(whatsappUrl, "_blank");
    });
  }

  // booking form submission removed
})();
