// Verifica se há usuário logado
const usuario = sessionStorage.getItem("usuario");
if (!usuario) {
  window.location.href = "index.html";
} else {
  document.getElementById("nomeProfessor").textContent = usuario;
}

// Carrega turmas do localStorage
function carregarTurmas() {
  const lista = document.getElementById("listaTurmas");
  lista.innerHTML = ""; // limpa tabela

  const turmas = JSON.parse(localStorage.getItem("turmas")) || [];
  const turmasProfessor = turmas.filter(t => t.professor === usuario);

  if (turmasProfessor.length === 0) {
    lista.innerHTML = `<tr><td colspan="3">Nenhuma turma cadastrada.</td></tr>`;
    return;
  }

  turmasProfessor.forEach(turma => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${turma.id}</td>
      <td>${turma.nome}</td>
      <td>
        <button class="btn-excluir" onclick="excluirTurma(${turma.id})">Excluir</button>
        <button class="btn-visualizar" onclick="visualizarTurma(${turma.id})">Visualizar</button>
      </td>
    `;
    lista.appendChild(tr);
  });
}
carregarTurmas();

// Excluir turma com confirmação
function excluirTurma(id) {
  const turmas = JSON.parse(localStorage.getItem("turmas")) || [];
  const turma = turmas.find(t => t.id === id);

  if (!confirm(`Tem certeza que deseja excluir a turma "${turma.nome}"?`)) return;

  // Verifica se tem atividades
  if (turma.atividades && turma.atividades.length > 0) {
    alert("Você não pode excluir uma turma com atividades cadastradas!");
    return;
  }

  const novasTurmas = turmas.filter(t => t.id !== id);
  localStorage.setItem("turmas", JSON.stringify(novasTurmas));
  alert("Turma excluída com sucesso!");
  carregarTurmas();
}

// Simulação de visualizar
function visualizarTurma(id) {
  alert(`Abrindo atividades da turma ID: ${id}`);
}

function sair() {
  sessionStorage.removeItem("usuario");
  window.location.href = "index.html";
}

// Redirecionar para cadastro
document.getElementById("cadastrar").addEventListener("click", () => {
  window.location.href = "cadastrar_turma.html";
});