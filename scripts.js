// Pegando um elemento la do hyml
// O document.querySelector busca o seletor no css
const modalOverLay = document.querySelector('.modal-overlay')
// Selecionando os cards, o ALL é selecionar diversos valores iguais
const cards = document.querySelectorAll('.card')
// Aki estamos dizendo um card das cards, com estruturas de repetição
for(let card of cards){
    // addEventListener é uma função
    // quando ele ouvir o "click", ele vai executar a função
    card.addEventListener("click", function(){
        // criando uma variável para buscar o atributo id do video
        const videoId = card.getAttribute("id")
        // Agora vou adicionar a classe active, que ativa a modal
        modalOverLay.classList.add('active')
        // Pegar o iframe e configurá-lo e chamando o vídeo
        modalOverLay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

// Botao de fechar o dal
document.querySelector(".close-modal").addEventListener("click", function(){
    // Agora vamos remover a modal ao clicar no x
    modalOverLay.classList.remove("active")
    // Quando fechar a modal o video parar de tocar
    modalOverLay.querySelector("iframe").src = ""
})

