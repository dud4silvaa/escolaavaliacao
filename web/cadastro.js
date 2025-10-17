// Mostra o nome do professor
const usuario = sessionStorage.getItem("usuario");
if (!usuario) {
  window.location.href = "index.html";
} else {
  document.getElementById("nomeProfessor").textContent = usuario;
}

// Função de sair
function sair() {
  sessionStorage.removeItem("usuario");
  window.location.href = "index.html";
}

// Captura o formulário
const form = document.getElementById("formTurma");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nomeTurma").value.trim();
  if (nome === "") {
    alert("Informe o nome da turma!");
    return;
  }

  // Pega turmas existentes no LocalStorage
  const turmas = JSON.parse(localStorage.getItem("turmas")) || [];

  // Cria uma nova turma com ID automático
  const novaTurma = {
    id: turmas.length + 1,
    nome: nome,
    professor: usuario,
    atividades: [] // inicia sem atividades
  };

  turmas.push(novaTurma);
  localStorage.setItem("turmas", JSON.stringify(turmas));

  alert("Turma cadastrada com sucesso!");
  window.location.href = "principal.html";
});