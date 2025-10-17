document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  // Simulação de credenciais válidas (como se viessem do banco)
  const usuarios = [
    { email: "maria@escola.com", senha: "12345" },
    { email: "joao@escola.com", senha: "abcde" },
    { email: "carla@escola.com", senha: "senha123" }
  ];

  const autenticado = usuarios.find(u => u.email === email && u.senha === senha);

  if (autenticado) {
    sessionStorage.setItem("usuario", email);
    window.location.href = "principal.html"; // redireciona para tela principal
  } else {
    erro.textContent = "E-mail ou senha incorretos!";
  }
});