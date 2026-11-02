# BarbiDev

Sitio Next.js de Bárbara Villacis. Dominio de producción: https://barbidev.com.

## Desarrollo

- `npm run dev`: servidor local.
- `npm run build`: validación de tipos y compilación para producción.
- `npm start`: servidor de producción después de compilar.

## Clases de física y SEO

La página `/clases-de-fisica-online` está dirigida a universitarios de Física,
Ingeniería y carreras afines. Incluye materias, horarios en UTC−5, clases por
Zoom en español y cotización por WhatsApp. No se ofrece consulta gratuita.

Las páginas usan URL canónicas con `https://barbidev.com`. El sitemap está en
`public/sitemap.xml` y debe actualizarse al agregar o retirar páginas indexables.
`public/robots.txt` permite el rastreo y anuncia el sitemap.

## Comprobación después del despliegue

1. Publicar los cambios en el alojamiento actual. Confirmar que la página de
   clases, `/robots.txt` y `/sitemap.xml` respondan con HTTP 200 en barbidev.com.
2. Confirmar que el dominio principal sea `https://barbidev.com`. Configurar en
   el alojamiento las redirecciones permanentes desde otros dominios públicos
   y variantes, conservando la ruta y evitando bucles. No basta con una etiqueta
   canónica para redirigir visitantes.
3. En la propiedad de barbidev.com ya registrada en Google Search Console,
   abrir **Sitemaps** y enviar `https://barbidev.com/sitemap.xml`.
4. Inspeccionar `https://barbidev.com/clases-de-fisica-online`. Ejecutar
   **Probar URL publicada**, revisar que permita indexación y solicitarla.
   Repetir la inspección del inicio después de actualizar sus enlaces.
5. Cuando Google vuelva a rastrear la página, comprobar la URL canónica
   seleccionada por Google. La prueba en tiempo real no confirma esa selección.
6. Revisar en **Rendimiento** las impresiones, clics y consultas de la página.
   La solicitud de indexación no garantiza inclusión ni una posición concreta.

No se requiere un nuevo código de verificación si la propiedad definitiva ya
está verificada. La configuración local no envía automáticamente el sitemap ni
solicitudes de indexación a Search Console.

Referencias oficiales:

- [Crear y enviar un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=es)
- [Inspección de URLs](https://support.google.com/webmasters/answer/9012289?hl=es)
