# ◈ WildAR — Especies en Peligro de Extinción

Experiencia WebAR educativa sobre especies en peligro. Escanea un QR → abre una página web → visualiza la especie en Realidad Aumentada directamente desde tu navegador, sin instalar apps.

---

## 🗂 Estructura del proyecto

```
webar-extincion/
├── index.html              ← Catálogo principal con QR codes
├── css/
│   ├── main.css            ← Estilos del catálogo
│   └── ar-page.css         ← Estilos compartidos de páginas AR
├── js/
│   └── ar-common.js        ← Lógica AR compartida (audio, tabs, marcadores)
├── especies/
│   ├── jaguar.html         ← Especie 1: Jaguar
│   ├── axolote.html        ← Especie 2: Ajolote mexicano
│   ├── vaquita.html        ← Especie 3: Vaquita marina
│   └── _PLANTILLA.html     ← Plantilla para agregar nuevas especies
└── README.md
```

---

## 🚀 Despliegue

### Opción A: GitHub Pages (recomendado, gratis)

1. Crea un repositorio en GitHub (ej: `webar-extincion`)
2. Sube todos los archivos del proyecto
3. Ve a `Settings → Pages`
4. Selecciona rama `main` y carpeta `/` (root)
5. GitHub asignará una URL tipo: `https://tu-usuario.github.io/webar-extincion/`
6. Los QR codes se generan automáticamente con esa URL base

```bash
git init
git add .
git commit -m "WildAR v1.0"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/webar-extincion.git
git push -u origin main
```

### Opción B: Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Selecciona directorio público: . (el directorio actual)
firebase deploy
```

### Opción C: Netlify (drag & drop)

1. Ve a [app.netlify.com](https://app.netlify.com)
2. Arrastra la carpeta `webar-extincion/` a la zona de deploy
3. Netlify asigna una URL automáticamente

---

## 📱 Cómo usar en dispositivos móviles

1. El usuario escanea el QR de una especie
2. Se abre la página en el navegador del móvil
3. Pulsa **"Activar AR"** y concede acceso a la cámara
4. Apunta la cámara a un **marcador Hiro** impreso o en pantalla
5. ¡La especie aparece en realidad aumentada!

### Marcador Hiro
Descarga e imprime el marcador Hiro desde:
- https://raw.githack.com/AR-js-org/AR.js/master/data/images/hiro.png

O muéstralo en otra pantalla mientras escaneas con el móvil.

---

## 🦎 Agregar una nueva especie

1. Copia `especies/_PLANTILLA.html` con el nombre de tu especie:
   ```
   cp especies/_PLANTILLA.html especies/ocelote.html
   ```
2. Edita todos los comentarios `<!-- EDITAR -->` en el archivo
3. Agrega la especie en `index.html` siguiendo el patrón de las tarjetas existentes
4. El QR se genera automáticamente en el catálogo

---

## 🛠 Tecnologías

| Tecnología | Uso |
|---|---|
| A-Frame 1.5 | Motor de escena 3D/AR |
| AR.js | Reconocimiento de marcadores en WebAR |
| QRCode.js | Generación de QR codes en el catálogo |
| Web Speech API | Narración de audio en texto-a-voz |
| HTML/CSS/JS vanilla | Sin frameworks pesados para carga rápida |

---

## 📊 Google Analytics (opcional)

Agrega este snippet antes de `</head>` en cada página:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🌐 Compatibilidad

| Plataforma | Estado |
|---|---|
| Android Chrome | ✅ Completo |
| iOS Safari 14+ | ✅ Completo |
| Desktop Chrome/Firefox | ✅ (modo escritorio, cámara requerida) |
| Apps WebView | ⚠️ Variable (depende del fabricante) |

---

## 📄 Licencia

MIT — Proyecto educativo de código abierto. Contribuciones bienvenidas.
