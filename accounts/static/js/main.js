document.addEventListener('DOMContentLoaded', function () {
    const words = ["easily", "faster", "securely"];
    const flipWord = document.getElementById('flipWord');
    let index = 0;

    function flipWords() {
        flipWord.textContent = words[index];

        // Remove all color classes first
        flipWord.classList.remove('green', 'blue', 'red');

        // Add appropriate color class based on current word
        switch (index) {
            case 0:
                flipWord.classList.add('green');
                break;
            case 1:
                flipWord.classList.add('blue');
                break;
            case 2:
                flipWord.classList.add('red');
                break;
        }

        index = (index + 1) % words.length;
        setTimeout(flipWords, 2000); // Change to 5000ms (5 seconds) for flipping interval
    }

    flipWords();
});
