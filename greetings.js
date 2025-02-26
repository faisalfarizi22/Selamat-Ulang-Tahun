document.addEventListener("DOMContentLoaded", function() {
    // Get name from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('nama') || 'Yeni Anggriani Putri';
    
    // Set greeting text
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `Selamat Ulang Tahun, ${nama}!`;
    
    // Set personalized message
    const messageElement = document.getElementById('ucapan');
    const message = `Pada hari yang istimewa ini, saya ingin mengucapkan selamat ulang tahun. Di usia yang semakin matang (prime), semoga kebijaksanaan dan kebahagiaan terus menyertai setiap langkahmu. Seperti purnama yang bersinar di langit malam, semoga hidupmu selalu dipenuhi dengan cahaya kebahagiaan dan cinta. Semoga tahun ini membawa lebih banyak keberhasilan, kebahagiaan, dan pengalaman berharga dalam perjalanan hidupmu.`;
    
    // Type message with animation
    typeMessage(messageElement, message, 0, 30);
    
    // Create shooting stars
    createShootingStars();
    
    // Create hearts
    setInterval(createHeart, 1000);
    
    // Initialize fireworks
    initFireworks();
    
    // Play music
    const music = document.getElementById('birthdayMusic');
    
    // Play music on first interaction (to comply with autoplay policies)
    document.body.addEventListener('click', function() {
        if (music.paused) {
            music.play().catch(e => console.log("Audio play prevented:", e));
        }
    });
});

// Function to simulate typing effect
function typeMessage(element, text, index, speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(function() { 
            typeMessage(element, text, index, speed); 
        }, speed);
    } else {
        // Show navigation buttons after message is complete
        document.getElementById('navigation').style.opacity = '1';
    }
}

// Function to create shooting stars
function createShootingStars() {
    const container = document.querySelector('.shooting-stars');
    
    setInterval(() => {
        const star = document.createElement('div');
        star.classList.add('shooting-star');
        
        // Random position and angle
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight / 3;
        const angle = Math.random() * 45 + 25; // 25-70 degrees
        
        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;
        star.style.width = `${Math.random() * 80 + 50}px`;
        star.style.transform = `rotate(${angle}deg)`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        
        container.appendChild(star);
        
        // Remove after animation completes
        setTimeout(() => {
            star.remove();
        }, 3000);
    }, 2000);
}

// Function to create hearts
function createHeart() {
    const container = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    
    // Random position and size
    const leftPos = Math.random() * 100;
    const size = Math.random() * 1 + 0.5;
    const duration = Math.random() * 15 + 10;
    
    heart.style.left = `${leftPos}%`;
    heart.style.fontSize = `${size}rem`;
    heart.style.animationDuration = `${duration}s`;
    
    container.appendChild(heart);
    
    // Remove after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
