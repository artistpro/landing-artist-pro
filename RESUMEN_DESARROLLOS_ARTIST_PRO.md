# Bitácora Cronológica de Desarrollos — Artist Pro (`artistpro.co`)

Este documento sirve como registro oficial y punto de control para retomar los proyectos cuando sea el momento oportuno.

---

## 📌 Estado Actual del Proyecto (al 14 de Agosto de 2026)

- **Sitio Principal (`www.artistpro.co`)**: Activo y funcionando normalmente.
- **Concurso Artistas & Talentos 2026 (`/concurso`)**: **SUSPENDIDO TEMPORALMENTE**. El banner promocional superior se retiró y la ruta `/concurso` redirige automáticamente al inicio (`/`). Todo el código, diseño y configuración de formularios sigue preservado 100% intacto en `src/concurso/`.
- **Colectivo Artist Pro (`/colectivo-pro`)**: **ACTIVO Y PUBLICADO**. La red y directorio de músicos de la región con los 613 municipios/corregimientos DANE está 100% funcional.

---

## 📅 Historial Cronológico de Cambios y Versiones

### 📅 14 de Agosto de 2026
- **Suspensión Temporal del Concurso**:
  - `App.tsx`: Se removió el componente `<ContestBanner />` y se configuró la ruta `/concurso` para hacer un `Navigate to="/"` (redirección suave hacia el Home).
  - Commit: `eb14e04` — *"fix: remover banner promocional y redirigir /concurso hacia el inicio por suspension temporal del evento"*.

---

### 📅 9 de Agosto de 2026 (Jornada de la Noche — Lanzamiento Colectivo Pro)
- **22:23 hrs — Selección Multi-Instrumentista & Múltiples Géneros**:
  - `src/colectivo-pro/components/FormularioRegistroColectivo.tsx`: Se reemplazó el selector único por una rejilla de selección múltiple interactiva para músicos multi-instrumentistas.
  - `src/colectivo-pro/components/DirectorioMusicos.tsx`: Las tarjetas ahora muestran todos los instrumentos que ejecuta el músico.
  - Commit: `7e31c60`.

- **22:19 hrs — Marca Oficial & Liderazgo del Administrador**:
  - `src/colectivo-pro/components/HeaderColectivo.tsx`: Se integró el logo oficial `/logo-artistpro.png`.
  - `src/colectivo-pro/components/AdminProfileSection.tsx`: Se creó la sección destacada de la Dirección e impulso de Artist Pro con datos de contacto directo.
  - Commit: `38e670f`.

- **22:14 hrs — Piloto Oficial de Colectivo Artist Pro (`/colectivo-pro`)**:
  - `src/colectivo-pro/data/territorioData.ts`: Procesamiento del Excel `inventario_territorial_artist_pro.xlsx` con los 76 municipios y 537 corregimientos DANE de Risaralda, Caldas, Quindío y Norte del Valle hasta Tuluá.
  - `src/colectivo-pro/ColectivoLanding.tsx`: Buscador en tiempo real, tarjetas con votos de confianza (`⭐ Recomendar`), insignia `🕊️ In Memóriam` para perfiles memoriales y auto-registro.
  - Commit: `f0d5761`.

- **21:49 hrs — Efecto Visual Interactivo `MusicTrailEffect`**:
  - `src/concurso/components/MusicTrailEffect.tsx`: Se implementó el efecto de estela flotante de notitas musicales (`♪`, `♫`, `♩`) y estrellitas (`✦`, `★`, `⚡`) al mover el cursor.
  - Commit: `10fde6f`.

- **21:33 hrs — Flujo de Inscripción Premium por WhatsApp (Opción 2)**:
  - `src/concurso/components/FormularioConcurso.tsx`: El botón de Modalidad Premium ($50.000 COP) abre WhatsApp directo a `573162548002` con mensaje pre-llenado para solicitar datos de Daviplata/Nequi.
  - Commit: `2b00c9f`.

- **21:21 hrs — Protección de Documentos PDF ("Próximamente")**:
  - `src/concurso/components/BasesConcurso.tsx`: Descarga de PDFs bloqueada temporalmente con insignia de candado `🔒 Próximamente`.
  - Commit: `9689f67`.

- **20:28 hrs — Actualización de Afiche Oficial & Menú Hamburguesa**:
  - `src/concurso/components/HeroConcurso.tsx`: Afiche oficial actualizado a `conoce los términos y condiciones en (1).jpg`.
  - `src/concurso/components/HeaderConcurso.tsx`: Menú hamburguesa prolijo en pantalla completa.
  - Commit: `0a01437`.

- **20:09 hrs — Estructura Base de la Landing del Concurso**:
  - `src/concurso/ConcursoLanding.tsx`: Creación de la landing page con 6 categorías, premios en estudio, sección de menores de edad y enlace a Google Forms oficiales.
  - Commit: `b2a1be2`.

---

## 🗂️ Estructura de Archivos Clave para Retomar

| Proyecto | Carpeta del Código | Descripción |
| :--- | :--- | :--- |
| **Concurso Artistas & Talentos** | `src/concurso/` | Código completo de la landing (`HeroConcurso.tsx`, `FormularioConcurso.tsx`, `PremiosConcurso.tsx`, `BasesConcurso.tsx`, `MusicTrailEffect.tsx`). |
| **Colectivo Artist Pro** | `src/colectivo-pro/` | Directorio de músicos (`ColectivoLanding.tsx`, `FiltrosBuscador.tsx`, `DirectorioMusicos.tsx`, `FormularioRegistroColectivo.tsx`, `territorioData.ts`). |
| **Enrutador Principal** | `App.tsx` | Control de rutas activas e integración de layouts. |
| **Activos Gráficos** | `public/concurso/` y `public/colectivo-pro/` | Afiches, archivos Excel DANE y audios. |

---

## 🔄 Instrucciones para Reactivar el Concurso en el Futuro

Cuando decidas reactivar el concurso, solo deberás realizar 2 sencillos pasos en `App.tsx`:
1. Descomentar `<ContestBanner />` dentro de `MainLayoutContent`.
2. Cambiar la línea de la ruta `/concurso`:
   ```tsx
   // Reemplazar:
   <Route path="/concurso" element={<Navigate to="/" replace />} />
   
   // Por:
   <Route path="/concurso" element={<ConcursoLanding />} />
   ```
3. Ejecutar `git commit` y `git push origin main`.
