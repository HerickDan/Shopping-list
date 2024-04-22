const form = document.getElementById('formulario');
const item = document.getElementById('item');
const resultado = document.getElementById('resultado');

form.addEventListener('submit',function(e){
    e.preventDefault()
    function adicionarItem(){
        //Quantidade dos items adidiconados
        const quantidadeElemento = document.getElementById('quantidade');
        const qtd = 'Quantidade'
        const itens = 'Itens'
        const qtdItens = `${itens} | ${qtd}  `
        const cabecalhoItem = document.createElement('p')
        cabecalhoItem.style.color= '#90ff17'
        cabecalhoItem.style.border= 'solid black 1px'
        cabecalhoItem.style.backgroundColor= '#004443'
        cabecalhoItem.innerHTML=qtdItens
        //Criação do parágrafo e sua classe
        let article = document.createElement('article')
        article.textContent=`${item.value}  |  ${quantidadeElemento.value} `
        article.className='item_sacola'
        
        //Criação do Botão e sua função
        const button = document.createElement('button')
        button.className='apagar-botao'
        button.textContent = 'Apagar'
        button.onclick = function(){
            resultado.removeChild(article)
            resultado.removeChild(cabecalhoItem)
        }     
        article.appendChild(button)
        resultado.appendChild(cabecalhoItem)
        resultado.appendChild(article)     
      
    }
    
    adicionarItem()
    item.value=''
 
})