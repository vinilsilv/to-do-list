var listElement = document.querySelector('.list');
var inputElement = document.querySelector('.text-input');
var buttonElement = document.querySelector(".add-btn");
var localStorageItem = localStorage.getItem('listTarefas');
var localStorageParsed = JSON.parse(localStorageItem);
var tarefas = localStorageParsed || [];
buttonElement.setAttribute('onclick', 'addTarefa()');
inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTarefa();
    }
});
function mostraTarefas() {
    listElement.innerHTML = '';
    for (var _i = 0, tarefas_1 = tarefas; _i < tarefas_1.length; _i++) {
        var item = tarefas_1[_i];
        var itemList = document.createElement('div');
        var itemP = document.createElement('p');
        var itemText = document.createTextNode(item);
        itemList.setAttribute('class', 'item');
        var linkElement = document.createElement('button');
        var pos = tarefas.indexOf(item);
        linkElement.setAttribute('class', 'close-icon fa fa-close');
        linkElement.setAttribute('onclick', "removeTarefa(".concat(pos, ")"));
        itemP.appendChild(itemText);
        itemList.appendChild(itemP);
        itemList.appendChild(linkElement);
        listElement.appendChild(itemList);
    }
}
mostraTarefas();
function addTarefa() {
    var tarefa = inputElement.value;
    if (tarefa != '') {
        tarefas.push(tarefa);
        inputElement.value = '';
        mostraTarefas();
        salvarNoLocalStorage();
    }
}
function removeTarefa(pos) {
    tarefas.splice(pos, 1);
    mostraTarefas();
    salvarNoLocalStorage();
}
function salvarNoLocalStorage() {
    localStorage.setItem('listTarefas', JSON.stringify(tarefas));
}
//# sourceMappingURL=script.js.map