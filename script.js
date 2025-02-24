const apiKey = "AIzaSyAuU7HbgSQgKWIycAIA7slV4yKQibmiFyE"; // Reemplaza con tu clave de API


async function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="message user-message"><strong>Tú:</strong> ${userInput}</div>`;

    document.getElementById("user-input").value = ""; // Limpiar input
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll al final

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const data = {
        contents: [{ parts: [{ text: userInput }] }]
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        const aiResponse = result.candidates?.[0]?.content?.parts?.[0]?.text || "Error al obtener respuesta.";

        chatBox.innerHTML += `<div class="message ai-message"><strong>IA:</strong> ${aiResponse}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Mantener scroll abajo
    } catch (error) {
        chatBox.innerHTML += `<div class="message ai-message"><strong>IA:</strong> Error en la solicitud.</div>`;
    }
}

// Permitir enviar con Enter
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Botón limpiar chat
function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}
