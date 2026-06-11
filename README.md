# DevParadise

Landing page corporativa para **DevParadise** — soluciones tecnológicas integrales: desarrollo de software, cámaras de seguridad, infraestructura de redes, servicios cloud, ciberseguridad y más.

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 + React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 + shadcn/ui |
| Animaciones | Framer Motion |
| ORM / DB | Prisma + SQLite |
| Validación | Zod |
| Iconos | Lucide React |

## Requisitos

- **Node.js** >= 22
- **Bun** (recomendado) o npm

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/DevParadise.git
cd DevParadise

# Copiar variables de entorno
cp .env.example .env

# Instalar dependencias
bun install
# o: npm install

# Generar cliente Prisma y migrar base de datos
bun db:generate
bun db:push
```

## Desarrollo

```bash
bun dev
# o: npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Producción

```bash
bun run build
bun run start
```

El build genera un output `standalone` optimizado para deploy.

## Estructura del Proyecto

```
src/
├── app/                    # Rutas de Next.js (App Router)
│   ├── api/contact/        # API de formulario de contacto
│   ├── layout.tsx          # Layout raíz con SEO y JSON-LD
│   ├── page.tsx            # Landing page (Server Component)
│   ├── globals.css         # Estilos globales + tema
│   └── sitemap.ts          # Sitemap dinámico
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Secciones de la landing
│   ├── layout/             # Navbar y layout components
│   └── shared/             # Componentes reutilizables
├── lib/
│   ├── i18n/               # Internacionalización (ES/EN)
│   ├── db.ts               # Prisma client singleton
│   └── utils.ts            # Utilidades
└── hooks/                  # Custom React hooks
```

## Características

- Landing page single-page con secciones: Hero, Servicios, Portfolio, Tech Stack, Proceso, Nosotros, Testimonios, Contacto
- Tema claro/oscuro con persistencia
- Internacionalización español/inglés
- Formulario de contacto con validación Zod y almacenamiento en SQLite
- SEO optimizado: JSON-LD, Open Graph, Twitter Cards, sitemap
- Responsive design (mobile-first)
- Animaciones con Framer Motion
- Lazy loading de secciones below-the-fold

## Licencia

Private — Todos los derechos reservados.
