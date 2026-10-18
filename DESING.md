# [StudyLog] — Sistema de diseño

## Personalidad
Concisa,Motivadora y espaciada

## Color
- Fondo de la app: #F4F1DE (Eggshell)
- Superficies y tarjetas: #FBF9F0 (derivado, más claro que el fondo)
- Bordes y separadores: #D9D2BD (derivado)
- Texto principal: #1A0402 (Molten Lava oscurecido, derivado)
- Texto secundario: #6B5A52 (derivado)
- Acento (botón primario, enlaces, selección): #3B7080 (Blue Slate), con texto #F4F1DE
- Elementos no textuales (foco, progreso, iconos): #E4572E (Spicy Paprika)
- Error: #760B05 (Molten Lava)
- Éxito: #2F6B4F (derivado) · Aviso: #7A5A12 (derivado)
- Colores de asignatura (8): #3B7080 #E4572E #2F6B4F #7A5A12 #5E4A7A #a340b7 #a92e3a #16bcc5
- Regla de uso: los colores de asignatura son barras y puntos; nunca se usan para texto ni para botones.
- Regla de estados: éxito, aviso y error siempre llevan icono y texto, nunca solo color. El verde y el ocre también son colores de asignatura, y así no se confunden.

Fondo oscuro: #1A0402
- Superficie oscura: #760B05
- Bordes: #5A1510
- Texto principal: #F4F1DE
- Texto secundario: #CFC9B4
- Acento: #E4572E
- Colores de asignatura: #3B7080 #E4572E #2F6B4F #7A5A12 #5E4A7A #a340b7 #a92e3a #16bcc5
- Regla de uso: los colores de asignatura son barras y puntos; nunca se usan para texto ni para estados.

## Tipografía
- Portada (Landing): Bricolage Grotesque
- Texto: IBM Plex Sans
- Cifras y datos: IBM Plex Mono

## Espaciado y forma
- Escala de espaciado: [p. ej. múltiplos de 4 px]
- Radio de tarjetas: 8 || 10px
- Radio de botones y campos: 14px
- Sombras: Usar para resaltar tarjetas (de asignaturas) sobre el fondo para que haya profundidad. Dichas sombras deben ser ligeras

## Componentes
- Botón primario: fondo `#3B7080`, texto `#F4F1DE`, altura mínima de 44px,
  radio de 14px y padding horizontal de 16px. Se reserva para la acción
  principal de cada vista. Incluye estados hover, pressed, focus-visible,
  disabled y loading sin cambiar de tamaño.
- Botón secundario: fondo transparente o de superficie, borde de 1px
  `#3B7080`, texto `#3B7080`, altura mínima de 44px y radio de 14px. Se usa
  para acciones alternativas y nunca compite visualmente con el primario.
- Botón fantasma: sin borde ni fondo, texto `#1A0402`, padding de 8px 12px y
  radio de 10px. En hover usa la superficie clara; en focus-visible muestra
  un anillo de `#E4572E`. Debe conservar un área táctil mínima de 44x44px.
- Campo de texto: etiqueta visible encima del campo, ayuda opcional debajo,
  altura mínima de 44px, borde de 1px `#D9D2BD`, fondo `#FBF9F0` y radio de
  14px. El foco usa un borde de `#3B7080` y un anillo de 2px. El error usa
  borde `#760B05`, icono y mensaje específico debajo; nunca se comunica solo
  mediante color. Los campos deben mostrar placeholder únicamente como
  ejemplo, no como sustituto de la etiqueta.
- Selector y área de texto: comparten los mismos estados y radios del campo
  de texto. El selector debe indicar su estado abierto y la opción elegida;
  el área de texto debe mostrar límite de caracteres cuando exista.
- Tarjeta principal: superficie `#FBF9F0`, borde opcional de 1px
  `#D9D2BD`, radio de 10px, padding de 16px y sombra ligera
  `0 2px 8px rgb(26 4 2 / 8%)`. Incluye título, metadatos y una acción
  secundaria; la barra o el punto de asignatura se coloca en el borde o en
  la cabecera, nunca detrás del texto.
- Tarjeta de asignatura: extensión de la tarjeta principal con una barra
  lateral de 4px o un punto de color de asignatura. El color identifica,
  pero el nombre de la asignatura siempre aparece como texto.
- Barra de progreso: fondo `#D9D2BD`, relleno `#E4572E`, altura de 8px y radio
  completamente redondeado. Incluye porcentaje o valor textual cuando el
  dato sea relevante y no depende solo de la diferencia de color.
- Etiquetas de estado: chip de altura mínima de 28px, radio de 14px, icono
  de 16px y texto breve. Éxito usa `#2F6B4F`, aviso `#7A5A12` y error
  `#760B05`, siempre con icono y texto. No deben confundirse con las
  etiquetas de asignatura.
- Navegación: en móvil usa una navegación inferior o menú claramente
  identificable; en escritorio usa navegación lateral o superior estable.
  La sección activa se marca con texto, forma y/o indicador, no únicamente
  con color.
- Feedback: las notificaciones deben aparecer cerca de la acción que las
  provoca y ser descartables cuando no sean críticas. Los estados de carga
  conservan el layout mediante skeleton o indicador inline y no bloquean la
  pantalla completa sin necesidad.
- Modal y confirmación: usar solo para decisiones que requieran
  confirmación. Incluye título, explicación breve, acción principal y
  cancelación visible; el foco queda contenido y vuelve al elemento que lo
  abrió al cerrar.
- Estado vacío: explicar qué ocurre, mostrar una acción recomendada y evitar
  ilustraciones decorativas que compitan con la acción. El estado de error
  debe ofrecer una recuperación clara, como reintentar o volver atrás.

## Reglas
- Contraste mínimo: cumplir WCAG 2.2 AA: 4,5:1 para texto normal, 3:1 para
  texto grande y 3:1 para componentes gráficos o controles. Validar cada
  combinación real de texto, fondo, borde e icono; no asumir que dos colores
  de la paleta son compatibles por pertenecer al sistema.
- No depender solo del color: todo estado, selección, progreso o diferencia
  entre elementos debe tener además texto, icono, forma, patrón o posición.
- Máximo de colores de acento por pantalla: dos, además del color de la
  asignatura cuando sea necesario. El acento principal se reserva para la
  acción primaria y los elementos no textuales para foco y progreso.
- Jerarquía: una sola acción primaria por sección. Cada pantalla debe tener
  un título claro, una tarea principal y una ruta evidente para continuar o
  volver atrás.
- Tipografía: usar Bricolage Grotesque solo en portada y titulares de
  presentación; IBM Plex Sans para interfaz y textos; IBM Plex Mono para
  cifras, porcentajes, fechas y datos tabulares. No usar más de tres niveles
  de tamaño sin una razón funcional.
- Espaciado: emplear únicamente múltiplos de 4px, con 16px como separación
  base entre bloques relacionados y 24px o 32px entre secciones. Mantener
  padding suficiente para que las tarjetas no se perciban saturadas.
- Responsive: diseñar primero para móvil, con contenido adaptable entre
  320px y 1440px. No ocultar acciones esenciales en hover; en pantallas
  pequeñas priorizar una columna y aumentar el área táctil.
- Accesibilidad de teclado: todos los controles son alcanzables en un orden
  lógico, tienen estado `focus-visible` distinguible y no requieren gestos
  complejos. No eliminar el outline sin proporcionar un reemplazo visible.
- Accesibilidad semántica: usar etiquetas de formulario asociadas, nombres
  accesibles para iconos, encabezados jerárquicos y mensajes anunciables para
  cambios de estado. Las acciones con icono deben incluir tooltip o texto
  visible según su importancia.
- Interacción: responder visualmente a hover, pressed, focus, disabled,
  loading y error. Las transiciones deben ser breves (150–250ms), no
  bloquear la tarea y respetar `prefers-reduced-motion`.
- Consistencia: un mismo componente conserva tamaño, radio, padding y
  comportamiento en toda la aplicación. Las excepciones deben documentarse
  en el componente, no resolverse con estilos locales arbitrarios.
- Contenido: usar lenguaje conciso, motivador y accionable. Los mensajes de
  error explican qué pasó y cómo corregirlo; no usar “Ha ocurrido un error”
  como único mensaje.
- Datos y estados: contemplar siempre carga, vacío, éxito, error y contenido
  completo. Los valores numéricos deben mantener una alineación estable y
  un formato consistente de fecha, porcentaje y unidad.
- Tema oscuro: conservar la misma jerarquía y significado semántico de los
  colores. Revisar contraste de cada componente sobre `#1A0402` y no usar
  colores de asignatura para comunicar estados.

> Prompt utilizado para tener una guia de colores y darselo a stitch y tener un visionado general de la aplicación