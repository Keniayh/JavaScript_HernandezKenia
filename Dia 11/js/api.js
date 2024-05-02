// Obtener una nueva baraja de cartas mezclada
async function fetchShuffledDeck() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const data = await response.json();
        return data.deck_id;
    } catch (error) {
        console.error('Error al obtener la baraja mezclada:', error);
        throw error;
    }
}

// Extraer una cantidad específica de cartas de una baraja
async function drawCards(deckId, count) {
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
        const data = await response.json();
        return data.cards;
    } catch (error) {
        console.error('Error al extraer cartas:', error);
        throw error;
    }
}

// Función para iniciar el juego de memoria
async function startMemoryGame() {
    try {
        const deckId = await fetchShuffledDeck(); // Obtener el ID de la baraja mezclada
        const cards = await drawCards(deckId, 10); // Extraer 10 cartas de la baraja

        // Duplicar las cartas para hacer coincidir pares
        const memoryCards = [...cards, ...cards];
        shuffle(memoryCards); // Barajar las cartas

        // Crear elementos de carta y agregarlos al juego
        const memoryGame = document.getElementById('memoryGame');
        memoryCards.forEach(card => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.setAttribute('data-card-id', card.code);
            div.style.backgroundImage = `url(${card.image})`;
            div.addEventListener('click', handleCardClick);
            memoryGame.appendChild(div);
        });
    } catch (error) {
        console.error('Error al iniciar el juego de memoria:', error);
    }
}

// Función para manejar los clics en las cartas
function handleCardClick(event) {
    const selectedCard = event.target;

    // Si la carta ya está volteada o es una coincidencia, no hacer nada
    if (selectedCard.classList.contains('selected') || selectedCard.classList.contains('matched')) {
        return;
    }

    selectedCard.classList.add('selected'); // Marcar la carta como seleccionada

    // Si hay dos cartas seleccionadas
    const selectedCards = document.querySelectorAll('.selected');
    if (selectedCards.length === 2) {
        const [card1, card2] = selectedCards;
        if (card1.getAttribute('data-card-id') === card2.getAttribute('data-card-id')) {
            // Si las cartas coinciden, dejarlas visibles
            setTimeout(() => {
                card1.classList.add('matched');
                card2.classList.add('matched');
                checkGameCompletion();
            }, 500);
        } else {
            // Si las cartas no coinciden, voltearlas nuevamente después de un tiempo
            setTimeout(() => {
                card1.classList.remove('selected');
                card2.classList.remove('selected');
            }, 1000);
        }
    }
}

// Función para verificar si todas las cartas han sido emparejadas
function checkGameCompletion() {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === 20) { // 20 cartas en total (10 pares)
        alert('¡Has ganado!');
    }
}

// Función para barajar las cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Iniciar el juego cuando la página se carga
window.onload = startMemoryGame;
