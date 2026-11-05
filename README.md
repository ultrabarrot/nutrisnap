# NutriSnap (MVP)

App de nutrición para alcanzar un peso corporal saludable. Inspirada en apps como Foodvisor, construida desde cero con stack propio.

## Stack
- Frontend: React 18 + Vite + Tailwind CSS + React Router + Recharts
- Backend (opcional): Node/Express (mock)

## Funcionalidades (MVP)
1. Landing/marketing (Home)
2. Onboarding (perfil, objetivo, preferencias)
3. Escaneo de comida por foto (simulado; integrar API de visión en producción)
4. Planes de dieta (+15 planes)
5. Recetas balanceadas
6. Dashboard de progreso (peso, macros, racha)

## Ejecutar
```bash
cd nutrisnap
npm install
npm run dev        # http://localhost:5173
```
Backend opcional:
```bash
cd nutrisnap/server
npm install
npm start          # http://localhost:4000
```

## Instalar en iPhone (PWA)
1. Abre la app en **Safari** (http://localhost:5173 en desarrollo; en producción usa tu dominio HTTPS).
2. Toca el botón **Compartir** (cuadrado con flecha).
3. Selecciona **"Añadir a pantalla de inicio"**.
4. Confirma el nombre y toca **Añadir**.

La app se abrirá en modo standalone (sin barra del navegador) y funcionará offline gracias al service worker.

> Para publicar en el **App Store** (app nativa), se requiere envolver la web con Capacitor o React Native y compilar en macOS con Xcode.
- Integrar API de visión (Google Cloud Vision / AWS Rekognition) + base nutricional (USDA FoodData Central).
- Auth real (Clerk/Auth0) y base de datos (PostgreSQL).
- Persistencia de comidas, peso y racha.
- PWA / app móvil (React Native o Capacitor).
- Tests (Vitest + Playwright) y CI.

## App nativa (Capacitor)
El proyecto ya incluye plataformas Android e iOS (`android/`, `ios/`).

### Android (compilar APK en Windows)
1. Instala **Android Studio** y JDK 17.
2. Abre la carpeta `android/` en Android Studio.
3. Sincroniza Gradle y genera `Build > Build Bundle(s) / APK(s) > Build APK(s)`.
4. El APK queda en `android/app/build/outputs/apk/debug/`.

### iOS (requiere macOS + Xcode)
1. En un Mac, abre `ios/App/App.xcworkspace` en Xcode.
2. Configura tu equipo de firma (Apple Developer).
3. Compila y genera el `.ipa` para TestFlight/App Store.

### Sincronizar cambios web
Después de cambiar el frontend:
```bash
npm run build
npx cap sync
```

## Compilar IPA en la nube (GitHub Actions)
El workflow `.github/workflows/ios.yml` compila un IPA **sin firma** en un runner macOS de GitHub.

Pasos:
1. Sube el proyecto a un repositorio GitHub.
2. Ve a **Actions** → **Build iOS IPA** → **Run workflow**.
3. Descarga el artifact `ios-ipa-unsigned`.

### Instalar IPA sin firma en iPhone (AltStore / Sideloadly)
Un IPA sin firma no se instala directamente. Usa:
- **AltStore** (https://altstore.io) con un Apple ID gratuito (reinstalación cada 7 días).
- **Sideloadly** (https://sideloadly.io) para firmar con tu Apple ID.

Para distribución permanente (TestFlight/App Store) se requiere Apple Developer (99 USD/año) y firma con certificado.

## Nota legal
Proyecto original con marca propia (NutriSnap). No reutiliza código, assets ni marca de terceros.
