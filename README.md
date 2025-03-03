# Moví plus CMG

## Descripción

Moví plus CMG es una aplicación de reserva de viajes que conecta a usuarios con conductores en tiempo real. Construida con Next.js, React, y Socket.IO, ofrece una experiencia de usuario fluida y en tiempo real.

## Características Principales

- Reserva de viajes en tiempo real
- Seguimiento de la ubicación del conductor
- Sistema de calificación para conductores
- Historial detallado de viajes
- Autenticación de usuarios y conductores
- Integración de mapas con Mapbox GL JS

## Tecnologías Utilizadas

- Next.js
- React
- Socket.IO
- Prisma ORM
- PostgreSQL
- Mapbox GL JS
- Tailwind CSS
- shadcn/ui

## Instalación

1. Clona el repositorio:
   \`\`\`bash
   git clone https://github.com/tu-usuario/movi-plus-cmg.git
   \`\`\`

2. Instala las dependencias:
   \`\`\`bash
   cd movi-plus-cmg
   npm install
   \`\`\`

3. Configura las variables de entorno:
   Crea un archivo \`.env.local\` en la raíz del proyecto y añade las siguientes variables:
   \`\`\`
   DATABASE_URL=tu_url_de_base_de_datos
   NEXTAUTH_SECRET=tu_secreto_de_nextauth
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=tu_token_de_mapbox
   \`\`\`

4. Ejecuta las migraciones de la base de datos:
   \`\`\`bash
   npx prisma migrate dev
   \`\`\`

5. Inicia el servidor de desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

## Uso

Visita \`http://localhost:3000\` en tu navegador para acceder a la aplicación.

## Documentación

- [Guía de Usuario](docs/user-guide.md)
- [Documentación Técnica](docs/developer-guide.md)

## Contribución

Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama (\`git checkout -b feature/AmazingFeature\`)
3. Haz commit de tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier pregunta o sugerencia, por favor contacta a:

Equipo de Desarrollo - dev@movipluscmg.com

Link del Proyecto: [https://github.com/tu-usuario/movi-plus-cmg](https://github.com/tu-usuario/movi-plus-cmg)

