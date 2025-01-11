function toggleCardInfo(card) {
    card.classList.toggle("expand");
}

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    const currentDate = new Date();

    cards.forEach(function (card) {
        const deadlineText = card.querySelector('.deadline').textContent;
        const deadlineDate = new Date(deadlineText.split(": ")[1].split("/").reverse().join("-"));

        if (deadlineDate < currentDate) {
            card.classList.add('prazo-encerrado');
            card.querySelector('.deadline').textContent = 'Prazo Encerrado';
        }
    });
});
