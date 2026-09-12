# 🤖 Chat IA Secure — Full Stack Web Application

Aplicación web de **chat con Inteligencia Artificial** desarrollada con JavaScript y Node.js, implementando una arquitectura cliente-servidor para mantener las credenciales de la API protegidas en el backend.

El proyecto demuestra integración con una API de IA, desarrollo de endpoints REST, manejo de solicitudes HTTP, variables de entorno y buenas prácticas básicas de seguridad.

## 🚀 Demo

🔗 **Live Demo:** Próximamente

> El proyecto está preparado con una arquitectura frontend + backend. Para ejecutar la integración con Gemini localmente se requiere configurar la variable de entorno de la API.

## 💻 Código fuente

🔗 **GitHub:**
https://github.com/Davidstivenmoreno36912/chat-ia-secure

---

## 🛠️ Tecnologías

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5.3

### Backend Proximamente

* Node.js
* Express.js
* REST API
* CORS
* dotenv

### Inteligencia Artificial

* Google Gemini API
* Integración mediante HTTP REST
* Procesamiento de respuestas JSON

### Herramientas

* Git
* GitHub
* VS Code
* Linux

---

## 🏗️ Arquitectura

```text
┌─────────────────────┐
│      Frontend       │
│ HTML / CSS / JS     │
└──────────┬──────────┘
           │
           │ POST /api/chat
           ▼
┌─────────────────────┐
│       Backend       │
│   Node.js + Express │
└──────────┬──────────┘
           │
           │ API Request
           ▼
┌─────────────────────┐
│    Google Gemini    │
│     AI Platform     │
└─────────────────────┘
```

La clave de API **no se almacena en el frontend**.

La comunicación se realiza mediante:

```text
Frontend → Backend → Gemini API
```

Esto evita exponer directamente las credenciales de la API en el código JavaScript del cliente.

---

## 🔐 Seguridad

Una de las mejoras principales de esta versión fue eliminar la exposición de la API Key desde el frontend.

La credencial se almacena mediante una variable de entorno:

```env
GEMINI_API_KEY=your_api_key_here
```

El archivo `.env` está excluido mediante `.gitignore` y **no forma parte del repositorio público**.

Para configurar el proyecto localmente, crear:

```text
backend/.env
```

con:

```env
GEMINI_API_KEY=TU_API_KEY
```

> Nunca publiques una API Key real en GitHub.

---

## 📂 Estructura del proyecto

```text
chat-ia-secure/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── index.html
├── script.js
├── style.css
├── .gitignore
└── README.md
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Davidstivenmoreno36912/chat-ia-secure.git
```

### 2. Entrar al proyecto

```bash
cd chat-ia-secure
```

### 3. Instalar dependencias del backend

```bash
cd backend
npm install
```

### 4. Configurar variables de entorno

Crear:

```text
backend/.env
```

Agregar:

```env
GEMINI_API_KEY=TU_API_KEY
```

### 5. Ejecutar el backend

```bash
node server.js
```

El servidor estará disponible en:

```text
http://localhost:3000
```

### 6. Ejecutar el frontend

Abrir `index.html` desde un servidor local, por ejemplo mediante **Live Server** en VS Code.

---

## 📡 Endpoint

### POST `/api/chat`

Envía un mensaje al backend:

```json
{
  "message": "Hola, ¿cómo estás?"
}
```

Respuesta:

```json
{
  "response": "¡Hola! Estoy aquí para ayudarte."
}
```

---

## ✨ Funcionalidades

* 💬 Interfaz de conversación con IA
* 🤖 Integración con Google Gemini
* 🔌 API REST propia con Node.js
* 🔐 Protección de credenciales mediante variables de entorno
* 📡 Comunicación frontend/backend mediante HTTP
* ⚠️ Manejo de errores
* 📱 Diseño responsive
* 🧹 Limpieza de conversación
* 📊 Integración con Google Analytics

---

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado como una demostración práctica de capacidades en:

* Desarrollo Full Stack
* Integración de APIs externas
* Desarrollo de servicios REST
* JavaScript
* Node.js y Express
* Seguridad de credenciales
* Arquitectura cliente-servidor
* Control de versiones con Git/GitHub

---

## 👨‍💻 Developer

**David Stiven Moreno Muñoz**

**Full Stack Web Developer**

Frontend · Backend · APIs · Databases · Cloud · Microservices

📍 Colombia · Remote
🌐 GitHub: https://github.com/Davidstiven36912

---

## 📌 Portfolio

Este proyecto forma parte de mi portafolio de desarrollo Full Stack y demuestra experiencia práctica construyendo aplicaciones web, integrando APIs y aplicando buenas prácticas de desarrollo y seguridad.

> **Experiencia demostrable mediante proyectos reales y código fuente disponible en GitHub.**
