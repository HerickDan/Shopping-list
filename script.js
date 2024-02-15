const form = document.getElementById('formulario');
const item = document.getElementById('item');
const resultado = document.getElementById('resultado');



form.addEventListener('submit',function(e){
    e.preventDefault()
    function adicionarItem(){
        //Quantidade dos items adidiconados
        const quantidadeElemento = document.getElementById('quantidade');

        //Criação do parágrafo e sua classe
        let article = document.createElement('article')
        article.textContent=`${quantidadeElemento.value}  `
        article.textContent+=item.value
        article.className='item_sacola'
        
       
        //Criação do Botão e sua função
        const button = document.createElement('button')
        button.className='apagar-botao'
        button.textContent = 'Apagar'
        button.onclick = function(){
            resultado.removeChild(article)
        }     
        article.appendChild(button)
        resultado.appendChild(article)     
      
    }
    adicionarItem()
    item.value=''
 
})