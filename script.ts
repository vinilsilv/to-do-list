const listElement = document.querySelector<HTMLDivElement | any>('.list')
const inputElement = document.querySelector<HTMLInputElement | any>('.text-input')
const buttonElement = document.querySelector<HTMLButtonElement | any>(".add-btn")

let localStorageItem: string | any = localStorage.getItem('listTarefas')
let localStorageParsed: Array<string | any> = JSON.parse(localStorageItem)
const tarefas: any = localStorageParsed || []

buttonElement.setAttribute('onclick', 'addTarefa()')

inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      addTarefa();
    }
  });

function mostraTarefas() {
    listElement.innerHTML = ''

    for (let item of tarefas) {
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
    let tarefa: string = inputElement.value

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

