//function adicionarTarefa() {
//const meuInput = document.getElementById("tarefa")
//let valor = meuInput.value

// const minhaTarefa = document.getElementById("lista")
// minhaTarefa.innerHTML += `<ul>${valor}</ul>`
//meuInput.value = ""
//}

function adicionarTarefa() {
    const meuInput = document.getElementById("tarefa");
    let valor = meuInput.value;

    const diasSemana = document.getElementById("dias-semana");

    document.getElementById(diasSemana.options[diasSemana.selectedIndex].value).innerHTML += `<ul>${valor}</ul>`;

    meuInput.value = "";
}