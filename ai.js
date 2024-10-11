// Responses for each category
const responses = {
    "web_development": [
        { question: "What technologies do you use?", answer: "We use HTML, CSS, JavaScript, React, and Node.js." },
        { question: "How long does it take to build a website?", answer: "It typically takes 2-4 weeks for a basic website." },
        { question: "What are your web development packages?", answer: "Our Web Development services start from ₹2999." },
        { question: "Do you provide custom web development?", answer: "Yes, we offer custom web development solutions based on your needs." }
    ],
    "advertisement": [
        { question: "What advertisement services do you offer?", answer: "We offer SEO, Google Ads, and Social Media Ads." },
        { question: "What is the cost of advertisement?", answer: "Our Advertisement services start from ₹99." },
        { question: "Do you provide social media marketing?", answer: "Yes, we help businesses grow through effective social media marketing campaigns." }
    ],
    "digital_marketing": [
        { question: "What is digital marketing?", answer: "Digital marketing involves promoting products/services through online channels like social media, search engines, and websites." },
        { question: "Do you provide content marketing?", answer: "Yes, we create tailored content strategies to increase engagement and brand visibility." }
    ],
    "graphic_design": [
        { question: "What kind of graphic design services do you offer?", answer: "We offer logo design, branding, business cards, brochures, and more." },
        { question: "How long does a design project take?", answer: "It typically takes 1-3 weeks depending on the complexity of the design." },
        { question: "What is the cost of graphic design?", answer: "Our Graphic Design services start from ₹199." }
    ],
    "video_editing": [
        { question: "What video editing services do you provide?", answer: "We offer video editing for commercials, social media, and other video content." },
        { question: "How much does video editing cost?", answer: "Our Video Editing services start from ₹699." }
    ],
    "payment": [
        { question: "What payment methods do you accept?", answer: "We accept payments through bank transfers, PayPal, and credit cards." },
        { question: "Do you provide EMI options?", answer: "Yes, we offer EMI options for larger payments." }
    ],
    "pricing": [
        { question: "How much do your services cost?", answer: "Here are our starting prices:\n- Web Development: ₹2999\n- Advertisement: ₹99\n- AI Development: ₹19000\n- Graphic Designing: ₹199\n- Video Editing: ₹699" },
        { question: "Do you offer discounts?", answer: "Yes, we offer seasonal discounts and special promotions." }
    ],
    "delivery": [
        { question: "How long does it take to deliver a project?", answer: "Delivery times vary based on the project type. Generally, it takes 2-4 weeks." },
        { question: "What is the delivery process?", answer: "We provide updates throughout the project and deliver the final work via email or cloud storage." }
    ],
    "contact": [
        { question: "How can I contact you?", answer: "You can contact us via email at hello@wisitrix.in or call us at +91 8590079596." },
        { question: "Do you provide support after the project?", answer: "Yes, we offer post-project support for up to 3 months." }
    ],
    "about_company": [
        { question: "What does your company do?", answer: "Wisitrix is a tech solutions company offering services in web development, AI development, digital marketing, graphic design, and video editing." },
        { question: "How long have you been in business?", answer: "We have been in business for over 5 years, delivering high-quality solutions to clients." },
        { question: "Where is your company located?", answer: "Our headquarters is in Thrissur, Kerala, India." }
    ]
};

// Track the state of the conversation
let currentCategory = null;

// Start the chat when the button is clicked
function startChat() {
    const chatBox = document.getElementById('chatBox');
    const startButton = document.querySelector('.start-button'); // Get the Start button

    // Hide the start button
    startButton.style.display = 'none';

    // Begin the chat
    chatBox.innerHTML = `<div class="bot-message">Hello! How can I assist you today?</div>`;
    chatBox.innerHTML += `<div class="bot-message">Please select a category to begin.</div>`;
    chatBox.innerHTML += `<div class="bot-message typing">...</div>`;

    setTimeout(() => {
        document.querySelector('.typing').innerText = 'Here are some categories:';
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('web_development')">Web Development</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('advertisement')">Advertisement</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('digital_marketing')">Digital Marketing</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('graphic_design')">Graphic Design</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('video_editing')">Video Editing</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('payment')">Payment</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('pricing')">Pricing</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('delivery')">Delivery</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('contact')">Contact</div>`;
        chatBox.innerHTML += `<div class="bot-message" onclick="selectCategory('about_company')">About the Company</div>`;
        chatBox.scroll({
            top: chatBox.scrollHeight,
            behavior: 'smooth'
        });
    }, 1500);
}

// Load questions based on the selected category
function selectCategory(category) {
    const chatBox = document.getElementById('chatBox');
    currentCategory = category;
    chatBox.innerHTML += `<div class="user-message">I want to know about ${category.replace(/_/g, ' ')}</div>`;
    chatBox.innerHTML += `<div class="bot-message typing">Please wait...</div>`;

    setTimeout(() => {
        document.querySelector('.typing').innerText = `Here are some questions about ${category.replace(/_/g, ' ')}:`;

        responses[category].forEach((item) => {
            chatBox.innerHTML += `<div class="bot-message" onclick="showAnswer('${category}', '${item.question}')">${item.question}</div>`;
        });

        chatBox.scroll({
            top: chatBox.scrollHeight,
            behavior: 'smooth'
        });
    }, 1500);
}

// Show the answer for a specific question
function showAnswer(category, question) {
    const chatBox = document.getElementById('chatBox');
    const answer = responses[category].find((item) => item.question === question).answer;

    chatBox.innerHTML += `<div class="user-message">${question}</div>`;
    chatBox.innerHTML += `<div class="bot-message typing">Answering...</div>`;

    setTimeout(() => {
        document.querySelector('.typing').innerText = answer;

        // Add the answer message with fading animation
        const answerMessage = document.createElement('div');
        answerMessage.classList.add('bot-message');
        answerMessage.textContent = answer;
        chatBox.appendChild(answerMessage);

        // Add the fading effect for the answer message
        setTimeout(() => {
            answerMessage.classList.add('fade-out');
        }, 3000); // Apply fade-out effect after 3 seconds

        // Optionally, remove the message after 1 second fade-out
        setTimeout(() => {
            answerMessage.remove();
        }, 4000); // Remove after 4 seconds to complete the fade-out

        chatBox.innerHTML += `<div class="bot-message">Would you like to ask another question?</div>`;
        chatBox.scroll({
            top: chatBox.scrollHeight,
            behavior: 'smooth'
        });
    }, 1500);
}

// Clear the chat and reset
function clearChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = '';
    currentCategory = null;
}

// End the chat session and redirect to i.html
function endChat() {
    clearChat();
    window.location.href = "index.html";  // Redirects to i.html when End Chat is pressed
}