//Puxando a data do sistema

let datahj = document.querySelector(".datahj");

datahj.innerHTML = dataAtualFormatada();

function dataAtualFormatada() {
	var data = new Date(),
		dia = data.getDate().toString(),
		diaF = dia.length == 1 ? "0" + dia : dia,
		mes = (data.getMonth() + 1).toString(),
		mesF = mes.length == 1 ? "0" + mes : mes,
		anoF = data.getFullYear();
	return diaF + "/" + mesF + "/" + anoF;
}

//variaveis para fazer a tarefa
let btnAdicionar = document.querySelector(".blocoAdd img");
let inputTarefa = document.querySelector(".blocoAdd input");
let formAdd = document.querySelector("#formAdd");
let botaoAdicionarCancel = document.querySelector(".blocoAdd button");

btnAdicionar.addEventListener("click", function (event) {
	event.preventDefault();
	if (!validandoInput()) {
		addTarefa();
	}
	formAdd.reset();

	let btnsRemove = document.querySelectorAll(".iconesTarefa");
	if (btnsRemove.length > 0) {
		console.log(btnsRemove);
	}
});

// if (btnsRemove.length > 0) {
// 	deleteTarefas();
// 	return;
// }

// function deleteTarefas() {
// 	console.log(btnsRemove);
// }

//console.log(btnsRemove);

// btnRemove.addEventListener("click", function (event) {
// 	event.preventDefault;
// 	removeTarefa();
// 	function removeTarefa() {
// 		btnRemove.parentElement.remove();
// 	}

//remove tarefa do HTML

//desabilitando botão em volta da imagem (+)
botaoAdicionarCancel.addEventListener("click", function (event) {
	event.preventDefault();
});

//validando para ver se o usuário digitou algo.
function validandoInput() {
	if (formAdd.tarefaAdd.value != 0) {
		return;
	} else {
		alert("Digite uma Tarefa");
		return validandoInput;
	}
}

//add a tarefa no HTML
function addTarefa() {
	let conteudo = document.querySelector(".conteudo");
	let inputValor = formAdd.tarefaAdd.value;
	let tarefaDiv = document.createElement("div");
	let tarefaLi = document.createElement("li");
	let tarefaSection = document.createElement("section");
	let tarefaCheckBox = document.createElement("input");
	let tarefaEscrita = document.createElement("p");

	tarefaEscrita.textContent = inputValor;

	conteudo.appendChild(tarefaDiv);

	tarefaDiv.classList.add("tarefa");
	tarefaLi.appendChild(tarefaCheckBox);
	tarefaLi.appendChild(tarefaEscrita);
	tarefaCheckBox.type = "checkbox";
	tarefaDiv.appendChild(tarefaLi);

	tarefaDiv.appendChild(tarefaSection);
	tarefaSection.classList.add("iconesTarefa");
	tarefaSection.innerHTML =
		'<img src="./assets/img/Delete2.svg" alt="Delete" />';
}
