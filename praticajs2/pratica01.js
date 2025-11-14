//array da atividade (baseado no material de ARRAYS)
let itens =[];

//Adicionar no final usando push()
function adicionarFinal(){
    let valor = prompt("Digite um item para adicionar no final :)");
    if (valor) {
        itens.push(valor);
        alert("Item adicionado no final! com push():\n"+itens);
    }
}

//Adicionar no início usando unshift()
function adicionarInicio(){
    let valor = prompt("Digite um item para adicionar no início :)");
    if (valor) {
        itens.unshift(valor);
        alert("Item adicionado no início! com unshift():\n"+itens);
    }
}

//Remover do final usando pop()
function removerFinal(){
    if (itens.length > 0) {
        let removido = itens.pop();
        alert("Item removido do final! com pop(): " + removido + "\nItens restantes:\n" + itens);
    } else {
        alert("O array está vazio, nada para remover.");
    }
}

//Remover do início usando shift()
function removerInicio() {
    let removido = itens.shift();
    alert("Item removido do início! com shift(): " + removido + "\nItens restantes:\n" + itens);
}

//Mostrar itens atuais
function mostrarLista(){
    alert("Itens atuais no array:\n"+itens);
}