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

btnAdicionar.addEventListener("click", function (event) {
	event.preventDefault();
	validandoInput();
	addTarefa();
});

//validando para ver se o usuário digitou algo.
function validandoInput() {
	if (formAdd.tarefaAdd.value != 0) {
		return;
	} else {
		console.log("mensagem de erro pq o usuário não colocou nada");
	}
}

//add o HTML
function addTarefa() {
	console.log(formAdd.tarefaAdd.value);
}
