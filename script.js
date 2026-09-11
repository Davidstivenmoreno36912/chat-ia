const apiKey = "AQ.Ab8RN6LU-1Embx9IDigYw7GK0MjVUGXLuFoQyqgnLg8PPsjCaA";


async function sendMessage() {

    const userInput = document.getElementById("user-input").value.trim();

    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");

    // Mostrar mensaje del usuario
    chatBox.innerHTML += `
        <div class="message user-message">
            <strong>Tú:</strong> ${userInput}
        </div>
    `;

    document.getElementById("user-input").value = "";

    chatBox.scrollTop = chatBox.scrollHeight;


    const url =
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;


    const data = {
        contents: [
            {
                parts: [
                    {
                        text: userInput
                    }
                ]
            }
        ]
    };


    try {

        const response = await fetch(url, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        });


        const result = await response.json();

        console.log("Respuesta de Gemini:", result);


        if (!response.ok) {

            throw new Error(
                result.error?.message ||
                `Error HTTP ${response.status}`
            );

        }


        const aiResponse =
            result.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No recibí respuesta de Gemini.";


        chatBox.innerHTML += `
            <div class="message ai-message">
                <strong>IA:</strong> ${aiResponse}
            </div>
        `;


        chatBox.scrollTop = chatBox.scrollHeight;


    } catch (error) {

        console.error("Error Gemini:", error);


        chatBox.innerHTML += `
            <div class="message ai-message">
                <strong>IA:</strong> Error: ${error.message}
            </div>
        `;

    }

}


// Enter para enviar
document.getElementById("user-input").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Limpiar chat
function clearChat() {

    document.getElementById("chat-box").innerHTML = "";

}

// Botón limpiar chat
function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}
