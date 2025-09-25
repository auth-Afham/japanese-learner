document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const japaneseText = document.getElementById('japanese-text');
    const romajiText = document.getElementById('romaji-text');
    const englishText = document.getElementById('english-text');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const nextBtn = document.getElementById('next-btn');
    const categorySelector = document.getElementById('category-selector');
    const delayInput = document.getElementById('delay-input');
    const progressBar = document.getElementById('progress-bar');

    // State variables
    let currentPhrases = [];
    let currentIndex = -1;
    let isPlaying = false;
    let autoplayInterval = null;
    let shuffledIndices = [];

    // --- TTS Function ---
    function speak(text) {
        if (!text || !('speechSynthesis' in window)) return;
        // Cancel any previous speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }

    // --- Phrase Logic ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function getNextPhraseIndex() {
        if (shuffledIndices.length === 0) {
            shuffledIndices = Array.from(Array(currentPhrases.length).keys());
            shuffleArray(shuffledIndices);
        }
        return shuffledIndices.pop();
    }

    function displayNextPhrase() {
        if (currentPhrases.length === 0) return;
        
        currentIndex = getNextPhraseIndex();
        const phrase = currentPhrases[currentIndex];

        japaneseText.textContent = phrase.jp;
        romajiText.textContent = phrase.romaji;
        englishText.textContent = phrase.en;

        if (isPlaying) {
            speak(phrase.jp);
            animateProgressBar();
        }
    }

    // --- Autoplay & Controls Logic ---
    function animateProgressBar() {
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        // Force reflow
        void progressBar.offsetWidth;
        
        const delay = (parseInt(delayInput.value) || 5) * 1000;
        progressBar.style.transition = `width ${delay}ms linear`;
        progressBar.style.width = '100%';
    }

    function startAutoplay() {
        if (currentPhrases.length === 0) {
            alert("Please select a category with phrases.");
            return;
        }
        isPlaying = true;
        playPauseBtn.textContent = 'Stop';
        
        const delay = (parseInt(delayInput.value) || 5) * 1000;
        
        displayNextPhrase(); // Show and speak the first one immediately
        
        autoplayInterval = setInterval(displayNextPhrase, delay);
    }

    function stopAutoplay() {
        isPlaying = false;
        playPauseBtn.textContent = 'Start Auto-Play';
        clearInterval(autoplayInterval);
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        window.speechSynthesis.cancel();
    }

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopAutoplay();
        }
        displayNextPhrase();
    });
    
    delayInput.addEventListener('change', () => {
        if (isPlaying) {
            stopAutoplay();
            startAutoplay();
        }
    });

    // --- Initialization ---
    function loadCategory(categoryName) {
        stopAutoplay();
        if (categoryName === "All") {
            currentPhrases = Object.values(phrases).flat();
        } else {
            currentPhrases = phrases[categoryName] || [];
        }
        shuffledIndices = []; // Reset shuffle
        displayNextPhrase(); // Display the first phrase of the new category
    }

    function populateCategorySelector() {
        const allCategories = ["All", ...Object.keys(phrases)];
        allCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelector.appendChild(option);
        });
    }

    categorySelector.addEventListener('change', (e) => {
        loadCategory(e.target.value);
    });
    
    // Initial Load
    populateCategorySelector();
    loadCategory("All"); // Start with all phrases
});
