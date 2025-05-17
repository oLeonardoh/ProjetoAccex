document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.querySelector('.rating-value');
    const modal = document.getElementById('comment-modal');
    const closeModal = document.querySelector('.close');
    const submitCommentButton = document.getElementById('submit-comment');
    const commentText = document.getElementById('comment-text');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            ratingValue.value = value; // Atualiza o valor do input escondido

            stars.forEach(s => {
                s.classList.remove('selected'); // Remove a classe 'selected' de todas as estrelas
            });

            for (let i = 0; i < value; i++) {
                stars[i].classList.add('selected'); // Adiciona a classe 'selected' até a estrela clicada
            }

            // Exibe o modal para o comentário
            modal.style.display = "block";
        });
    });

    // Fecha o modal
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha o modal se clicar fora dele
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Envio do comentário
    submitCommentButton.onclick = function() {
        const comment = commentText.value;
        const rating = ratingValue.value;

        // Aqui você pode adicionar a lógica para enviar o comentário ao backend
        console.log('Avaliação:', rating);
        console.log('Comentário:', comment);

        // Limpa o campo de texto e fecha o modal
        commentText.value = '';
        modal.style.display = "none";
    }
});
