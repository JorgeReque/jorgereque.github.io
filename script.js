// Seleccionamos los elementos del chat en el HTML
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Función para agregar mensajes a la caja de chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    
    if (sender === 'user') {
        messageDiv.classList.add('user-message');
    } else {
        messageDiv.classList.add('ai-message');
    }
    
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    
    // Auto-scroll hacia abajo para ver el último mensaje
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Lógica de respuesta inteligente del asistente sobre Jorge Manuel
function generarRespuestaIA(pregunta) {
    const p = pregunta.toLowerCase();
    
    if (p.includes('hola') || p.includes('saludos')) {
        return "¡Hola! Qué gusto que visites la web de Jorge Manuel. ¿Qué te gustaría saber sobre sus proyectos o habilidades en Data Science?";
    } else if (p.includes('habilidad') || p.includes('herramienta') || p.includes('python') || p.includes('sql') || p.includes('power bi')) {
        return "Jorge Manuel domina herramientas clave como Python, R, SQL, Power BI y Tableau, enfocándose siempre en Business Intelligence.";
    } else if (p.includes('proyecto') || p.includes('experiencia')) {
        return "Actualmente está desarrollando tableros de control interactivos (Dashboards) y modelos analíticos orientados a la toma de decisiones.";
    } else if (p.includes('contacto') || p.includes('contratar') || p.includes('correo')) {
        return "Puedes contactar directamente con Jorge Manuel a través de esta misma web para cualquier oportunidad en análisis de datos.";
    } else {
        return "Esa es una excelente pregunta sobre el perfil de Jorge Manuel en Business Intelligence. Te sugiero revisar las secciones de Habilidades y Proyectos para más detalles.";
    }
}

// Evento al hacer clic en el botón Enviar
sendBtn.addEventListener('click', function() {
    const texto = userInput.value.trim();
    if (texto === "") return;
    
    // Mostrar mensaje del usuario
    addMessage(texto, 'user');
    userInput.value = "";
    
    // Simular un pequeño retraso de procesamiento de IA y dar respuesta
    setTimeout(() => {
        const respuesta = generarRespuestaIA(texto);
        addMessage(respuesta, 'ai');
    }, 600);
});

// Permitir enviar con la tecla "Enter"
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});