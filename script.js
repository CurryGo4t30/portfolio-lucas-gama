// Validação e envio do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensagem = document.getElementById("mensagem").value.trim();
  let msgBox = document.getElementById("msgConfirmacao");

  // Regex simples para validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "" || email === "" || mensagem === "") {
    msgBox.textContent = "Por favor, preencha todos os campos.";
    msgBox.className = "erro";
    msgBox.classList.remove("hidden");
    return;
  }

  if (!emailRegex.test(email)) {
    msgBox.textContent = "Por favor, insira um email válido.";
    msgBox.className = "erro";
    msgBox.classList.remove("hidden");
    return;
  }

  // Simulação de envio
  msgBox.textContent = "Mensagem enviada com sucesso!";
  msgBox.className = "sucesso";
  msgBox.classList.remove("hidden");

  // Limpar campos
  document.getElementById("formContato").reset();

  // Esconder mensagem após alguns segundos
  setTimeout(() => {
    msgBox.classList.add("hidden");
  }, 4000);
});

// Scroll suave para navegação do menu
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Alternar tema claro/escuro
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Alterna ícone do botão
  toggleThemeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Botão voltar ao topo
const btnTopo = document.getElementById("btnTopo");

// Mostrar botão quando rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Scroll suave para o topo
btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});