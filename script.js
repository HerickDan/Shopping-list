const form = document.getElementById('formulario');
const item = document.getElementById('item');
const resultado = document.getElementById('resultado');

form.addEventListener('submit',function(e){
    e.preventDefault();

    function adicionarItem(){
       
        //Criação do parágrafo e sua classe
        let p = document.createElement("p")
        p.textContent+=item.value
        p.className='item_sacola'
      
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