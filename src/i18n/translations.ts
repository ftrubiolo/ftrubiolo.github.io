import { getCollection, type CollectionEntry } from 'astro:content';

export type Lang = 'es' | 'en';

export const DEFAULT_LANG: Lang = 'es';

export const UI = {
  es: {
    htmlLang: 'es',
    siteTitle: 'Facundo Rubiolo — Desarrollador de Software',
    siteDescription: 'Proyectos de ingeniería de software, herramientas de desarrollo y diseño web.',
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      writing: 'Notas',
      experience: 'Experiencia',
      about: 'Sobre mí',
      email: 'Correo',
    },
    hero: {
      headingPrefix: 'Hola, soy',
      p1Role: 'desarrollador de software',
      p1Before: 'Soy',
      p1After: 'de Córdoba, Argentina, enfocado en aplicaciones full-stack, interfaces 3D interactivas en la web y herramientas de escritorio.',
      p2: 'Me gusta construir productos completos de punta a punta: desde motores de visualización PBR y backends con pagos y almacenamiento hasta backoffice e integraciones con IA.',
      p3: 'Abajo dejo algunos de los proyectos en los que estuve trabajando.',
    },
    sections: {
      projects: 'Proyectos',
      viewAllProjects: (count: number) => `Ver todos los proyectos (${count}) →`,
      experience: 'Experiencia',
      contactTitle: 'Contacto',
      contactBody:
        'Podés escribirme directamente por correo o explorar el código en GitHub.',
      sendEmail: 'Enviar correo',
      copyAddress: 'Copiar correo',
      copied: '¡Copiado!',
    },
    project: {
      readCaseStudy: 'Ver detalle →',
      liveDemo: 'Demo en vivo ↗',
      source: 'Código fuente ↗',
      previewTab: 'Vista previa',
      telemetryTab: 'Métricas',
      specsTab: 'Especificaciones',
      role: 'Rol',
      category: 'Categoría',
      status: 'Estado',
      stack: 'Tecnologías',
      benchmarks: 'Métricas y rendimiento',
      allProjectsLink: '← Todos los proyectos',
      overview: 'Resumen',
      telemetryNav: 'Métricas',
      projectsTitle: 'Proyectos',
      projectsSubtitle: 'Sistemas, herramientas e interfaces desarrolladas con foco en claridad, rendimiento y confiabilidad.',
    },
    about: {
      title: 'Sobre mí',
      bio: 'Soy Facundo Rubiolo, desarrollador de software en Córdoba, Argentina, y estudiante en el Instituto Superior Villa del Rosario (ISVR).',
      p2: 'Trabajo construyendo aplicaciones full-stack, experiencias 3D/WebAR para comercio electrónico y herramientas de escritorio con Electron y React, cuidando el rendimiento, la claridad visual y la arquitectura.',
      coreFocus: 'Áreas de enfoque',
      linksContact: 'Enlaces y contacto',
      focusAreas: [
        {
          title: '3D Web & Desktop',
          detail: 'Visualizadores PBR en tiempo real, WebAR (USDZ/GLB) y aplicaciones de escritorio con Three.js y Electron.',
        },
        {
          title: 'Full-Stack & Pagos',
          detail: 'Aplicaciones React + TypeScript respaldadas por Fastify, Supabase/PostgreSQL y pasarelas como Mercado Pago.',
        },
        {
          title: 'Herramientas & Automatización',
          detail: 'Procesamiento nativo de texturas e imágenes, validaciones tipadas, MCP/IA y flujos con Docker y CI.',
        },
      ],
    },
    notFound: {
      title: 'Página no encontrada.',
      body: 'La ruta solicitada no existe o fue movida.',
      cta: 'Volver al inicio',
    },
    themeToggleLabel: 'Cambiar tema de color',
    langSwitchAria: 'Cambiar idioma a inglés',
    langSwitchShort: 'EN',
  },
  en: {
    htmlLang: 'en',
    siteTitle: 'Facundo Rubiolo — Software Engineer & Builder',
    siteDescription: 'Selected engineering projects, systems tooling, and product craft.',
    nav: {
      home: 'Home',
      projects: 'Projects',
      writing: 'Writing',
      experience: 'Experience',
      about: 'About',
      email: 'Email',
    },
    hero: {
      headingPrefix: "Hi, I'm",
      p1Role: 'software developer',
      p1Before: "I'm a",
      p1After: 'based in Córdoba, Argentina, focused on full-stack web applications, interactive 3D on the web, and desktop tooling.',
      p2: 'I enjoy shipping end-to-end products—from real-time PBR viewports and payment-backed backends to administrative tools and AI integrations.',
      p3: "Below is a selection of projects I've been building.",
    },
    sections: {
      projects: 'Projects',
      viewAllProjects: (count: number) => `View all projects (${count}) →`,
      experience: 'Experience',
      contactTitle: 'Get in touch',
      contactBody:
        'Reach out directly by email or browse source code on GitHub. Always happy to discuss interesting systems and product work.',
      sendEmail: 'Send email',
      copyAddress: 'Copy address',
      copied: 'Copied!',
    },
    project: {
      readCaseStudy: 'Read case study →',
      liveDemo: 'Live demo ↗',
      source: 'Source ↗',
      previewTab: 'Preview',
      telemetryTab: 'Telemetry',
      specsTab: 'Specs',
      role: 'Role',
      category: 'Category',
      status: 'Status',
      stack: 'Stack',
      benchmarks: 'Benchmarks & Telemetry',
      allProjectsLink: '← All projects',
      overview: 'Overview',
      telemetryNav: 'Telemetry',
      projectsTitle: 'Projects',
      projectsSubtitle: 'Systems, tools, and interfaces shipped with an emphasis on measurable reliability and clean architecture.',
    },
    about: {
      title: 'About',
      bio: "I'm Facundo Rubiolo, a software developer based in Córdoba, Argentina, currently studying at Instituto Superior Villa del Rosario (ISVR).",
      p2: 'I build full-stack web platforms, interactive 3D/WebAR e-commerce experiences, and standalone desktop workbenches with Electron and React—caring deeply about performance, clean UI, and maintainable architecture.',
      coreFocus: 'Core Focus',
      linksContact: 'Links & Contact',
      focusAreas: [
        {
          title: '3D Web & Desktop',
          detail: 'Real-time PBR viewports, mobile WebAR (USDZ/GLB), and desktop tools built with Three.js and Electron.',
        },
        {
          title: 'Full-Stack & Commerce',
          detail: 'React + TypeScript apps backed by Fastify, Supabase/PostgreSQL, and Mercado Pago checkout workflows.',
        },
        {
          title: 'Tooling & Automation',
          detail: 'Native asset/texture pipelines, strict runtime validation, MCP/AI workflows, and Dockerized services.',
        },
      ],
    },
    notFound: {
      title: 'Page not found.',
      body: 'The route you requested does not exist or has moved.',
      cta: 'Return home',
    },
    themeToggleLabel: 'Toggle color theme',
    langSwitchAria: 'Switch language to Spanish',
    langSwitchShort: 'ES',
  },
} as const;

export function getLangFromUrl(pathname: string): Lang {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const rel = base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
  return rel === '/en' || rel.startsWith('/en/') ? 'en' : 'es';
}

export function localizePath(path: string, lang: Lang): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'es') return normalized;
  if (normalized === '/') return '/en';
  if (normalized.startsWith('/#')) return `/en${normalized}`;
  return `/en${normalized}`;
}

export function getAlternateLangHref(pathname: string, currentLang: Lang): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let rel = base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
  if (currentLang === 'en') {
    rel = rel.replace(/^\/en(?=\/|$)/, '') || '/';
  }

  const normalized = rel.length > 1 ? rel.replace(/\/+$/, '') : rel;
  const isLocalizedRoute =
    normalized === '/' ||
    normalized === '/about' ||
    normalized === '/projects' ||
    normalized.startsWith('/projects/');

  const targetRel = isLocalizedRoute ? normalized : '/';
  if (currentLang === 'es') {
    return `${base}${targetRel === '/' ? '/en' : `/en${targetRel}`}`;
  }
  return `${base}${targetRel}`;
}

export function stripLangPrefix(id: string): string {
  return id.replace(/^(es|en)\//, '');
}

/**
 * Returns projects for the requested language, falling back to Spanish
 * if an English translation file has not been added yet.
 */
export async function getProjectsForLang(lang: Lang): Promise<CollectionEntry<'projects'>[]> {
  const all = await getCollection('projects');
  const bySlug = new Map<string, CollectionEntry<'projects'>>();

  for (const entry of all) {
    const slug = stripLangPrefix(entry.id);
    const isRequested = entry.id.startsWith(`${lang}/`) || (!entry.id.includes('/') && lang === 'es');
    const existing = bySlug.get(slug);
    if (!existing || isRequested) {
      bySlug.set(slug, entry);
    }
  }

  return Array.from(bySlug.values()).sort((a, b) => a.data.order - b.data.order);
}
