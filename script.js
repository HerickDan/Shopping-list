const form = document.getElementById('formulario');
const item = document.getElementById('item');
const resultado = document.getElementById('resultado');



form.addEventListener('submit',function(e){
    e.preventDefault()
    function adicionarItem(){
        //Quantidade dos items adidiconados
        const quantidadeElemento = document.getElementById('quantidade');
        let verifica = Number(quantidadeElemento.value);
      
        
        //Criação do parágrafo e sua classe
        let p = document.createElement("p")
        p.textContent=`${quantidadeElemento.value}  `
        p.textContent+=item.value
        p.className='item_sacola'
        
        if (verifica > 1) {
            quantidadeElemento.value=''
            p.textContent += 's';
        }else{
            quantidadeElemento.value=''
        }
        //Criação do Botão e sua função
        const button = document.createElement('button')
        button.className='Botao_enviar'
        button.textContent = 'Apagar'
        button.onclick = function(){
            resultado.removeChild(p)
        }
        
        
        p.appendChild(button)
        resultado.appendChild(p)       
     
      
    }
    adicionarItem()
    item.value=''
    
})