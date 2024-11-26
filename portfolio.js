let currentIndex = 0;  // Variável para armazenar o índice da imagem atualmente exibida
// Seleciona todas as imagens com a classe "clickable-image" (aquelas que podem ser clicadas para abrir a modal)
const images = document.querySelectorAll('.clickable-image');
// Seleciona o modal onde as imagens serão exibidas em tamanho ampliado
const modal = document.getElementById('imageModal');
// Seleciona o elemento de imagem ampliada dentro do modal
const expandedImg = document.getElementById('expandedImg');
// Seleciona o botão de fechar ('x') da modal
const closeBtn = document.querySelector('.close-btn');
// Seleciona o botão para navegar para a imagem anterior
const prevBtn = document.querySelector('.prev-btn');
// Seleciona o botão para navegar para a imagem seguinte
const nextBtn = document.querySelector('.next-btn');

// Adiciona um evento de clique em cada imagem do portfólio
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;  // Armazena o índice da imagem que foi clicada
        openModal();  // Chama a função que abre a modal
    });
});

// Adiciona um evento de clique no botão de fechar da modal
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";  // Fecha a modal ao clicar no botão de fechar
});

// Navegação para a imagem anterior
prevBtn.addEventListener('click', () => {
    // Se estiver na primeira imagem, volta para a última (circular), caso contrário, vai para a imagem anterior
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    openModal();  // Reabre a modal com a imagem anterior
});

// Navegação para a próxima imagem
nextBtn.addEventListener('click', () => {
    // Se estiver na última imagem, vai para a primeira (circular), caso contrário, vai para a próxima imagem
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    openModal();  // Reabre a modal com a próxima imagem
});

// Função que abre a modal e exibe a imagem ampliada
function openModal() {
    expandedImg.src = images[currentIndex].src;  // Define a imagem ampliada com a imagem clicada
    modal.style.display = "flex";  // Exibe a modal, ajustando o display para "flex" (para centralizar)
}
