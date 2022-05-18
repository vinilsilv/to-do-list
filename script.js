const listElement = document.querySelector('.list')
const inputElement = document.querySelector('.text-input')
const buttonElement = document.querySelector(".add-btn")
const tarefas = JSON.parse(localStorage.getItem('listTarefas')) || []

buttonElement.setAttribute('onclick', 'addTarefa()')

inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      addTarefa();
    }
  });

function mostraTarefas() {
    listElement.innerHTML = ''

    for (item of tarefas) {
        const itemList = document.createElement('div')
        const itemP = document.createElement('p')
        const itemText = document.createTextNode(item)

        itemList.setAttribute('class', 'item')

        const linkElement = document.createElement('button')
    

        const pos = tarefas.indexOf(item)
        linkElement.setAttribute('class', 'close-icon fa fa-close')
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`)

        itemP.appendChild(itemText)
        itemList.appendChild(itemP)
        itemList.appendChild(linkElement)
        listElement.appendChild(itemList)
        
    }

}

mostraTarefas()

function addTarefa() {
    const tarefa = inputElement.value

    if (tarefa != '') {
      tarefas.push(tarefa)
      inputElement.value =''
      mostraTarefas()
      salvarNoLocalStorage()
    }
    
}

function removeTarefa(pos) {
    tarefas.splice(pos, 1)
    mostraTarefas()
    salvarNoLocalStorage()
}

function salvarNoLocalStorage() {
    localStorage.setItem('listTarefas', JSON.stringify(tarefas))
}

