const links = document.querySelectorAll("nav a");
const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === paginaAtual) {
        link.classList.add("active");
    }
});

// agendamento feature removed: related scripts disabled

// confirmation page removed

const contatoForm = document.querySelector("#contato-form");

if (contatoForm) {
    const retornoContato = document.querySelector("#retorno-contato");

    contatoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        contatoForm.reset();
        retornoContato.textContent = "Mensagem enviada com sucesso. Entraremos em contato em breve.";
        retornoContato.className = "mensagem-status sucesso";
    });
}

const loginForm = document.querySelector("#login-form");
const ADMIN_USER_KEY = "clinic_admin_user";

if (loginForm) {
    const retornoLogin = document.querySelector("#retorno-login");
    const validEmail = "Draalexiademedeiros@gmail.com";
    const validSenha = "AdmConsultorio144";
    const recepEmail = "recepcao@clinica.com";
    const recepSenha = "Recepcao144";

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = loginForm.querySelector("input[name='email']").value.trim();
        const senha = loginForm.querySelector("input[name='senha']").value;

        if (email.toLowerCase() === validEmail.toLowerCase() && senha === validSenha) {
            localStorage.setItem(ADMIN_USER_KEY, JSON.stringify({ nome: "Admin", email: validEmail, role: "ADM", loggedIn: true }));
            window.location.href = "admin.html";
            return;
        }

        if (email.toLowerCase() === recepEmail.toLowerCase() && senha === recepSenha) {
            localStorage.setItem(ADMIN_USER_KEY, JSON.stringify({ nome: "Recepcionista", email: recepEmail, role: "Recepcionista", loggedIn: true }));
            window.location.href = "admin.html";
            return;
        }

        retornoLogin.textContent = "E-mail ou senha incorretos. Tente novamente.";
        retornoLogin.className = "form-feedback is-error";
    });
}

const logoutButton = document.querySelector("#admin-logout");

if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem(ADMIN_USER_KEY);
        window.location.href = "login.html";
    });
}

if (window.location.pathname.split("/").pop() === "admin.html") {
    const user = localStorage.getItem(ADMIN_USER_KEY);
    const isLoggedIn = user ? JSON.parse(user).loggedIn : false;
    if (!isLoggedIn) {
        window.location.href = "login.html";
    }
}
