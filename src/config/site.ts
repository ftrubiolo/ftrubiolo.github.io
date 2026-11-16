import { UI, localizePath, type Lang } from '../i18n/translations';

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: string[];
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type StackIconId =
  | 'typescript'
  | 'react'
  | 'threejs'
  | 'electron'
  | 'astro'
  | 'tailwind'
  | 'nodejs'
  | 'postgresql'
  | 'supabase'
  | 'docker'
  | 'linux'
  | 'git'
  | 'zustand'
  | 'mercadopago'
  | 'sharp'
  | 'vitest'
  | 'fastify'
  | 'drizzle'
  | 'minio'
  | 'gemini';

export interface StackItem {
  id: StackIconId;
  label: string;
}

const STACK_ID_PATTERNS: [RegExp, StackIconId][] = [
  [/typescript/i, 'typescript'],
  [/react/i, 'react'],
  [/three\.?js/i, 'threejs'],
  [/electron/i, 'electron'],
  [/astro/i, 'astro'],
  [/tailwind/i, 'tailwind'],
  [/node/i, 'nodejs'],
  [/postgres/i, 'postgresql'],
  [/supabase/i, 'supabase'],
  [/docker/i, 'docker'],
  [/linux/i, 'linux'],
  [/\bgit\b/i, 'git'],
  [/zustand/i, 'zustand'],
  [/mercado\s*pago/i, 'mercadopago'],
  [/sharp/i, 'sharp'],
  [/vitest/i, 'vitest'],
  [/fastify/i, 'fastify'],
  [/drizzle/i, 'drizzle'],
  [/minio/i, 'minio'],
  [/gemini/i, 'gemini'],
];

export function resolveStackItems(names: string[]): StackItem[] {
  return names.map((label) => {
    const match = STACK_ID_PATTERNS.find(([re]) => re.test(label));
    return { id: match ? match[1] : 'git', label };
  });
}

export const FEATURES = {
  writing: false,
  experience: false,
} as const;

export const SITE = {
  features: FEATURES,
  brand: 'ftrubiolo',
  author: 'Facundo Rubiolo',
  handle: '@ftrubiolo',
  role: 'Software Engineer',
  title: 'Facundo Rubiolo — Software Engineer & Builder',
  description:
    'Selected engineering projects, systems tooling, and product craft.',
  email: 'facu1rubiolo@gmail.com',
  location: 'Córdoba, Argentina',
  availability: 'Open to select engineering & product work',
  avatarInitials: 'FR',
  bio: 'Software developer in Córdoba, Argentina focused on full-stack web apps, interactive 3D/WebAR, and desktop tooling.',
  social: {
    github: 'https://github.com/ftrubiolo',
    linkedin: 'https://www.linkedin.com/in/facundo-rubiolo-992b8b350/',
    x: 'https://x.com/ftrubiolo',
  },
  nav: [
    { label: 'Projects', href: '/projects' },
    ...(FEATURES.writing ? [{ label: 'Writing', href: '/writing' }] : []),
    ...(FEATURES.experience ? [{ label: 'Experience', href: '/#experience' }] : []),
    { label: 'About', href: '/about' },
  ] satisfies NavItem[],
  stack: [
    { id: 'typescript', label: 'TypeScript' },
    { id: 'react', label: 'React' },
    { id: 'threejs', label: 'Three.js' },
    { id: 'electron', label: 'Electron' },
    { id: 'astro', label: 'Astro' },
    { id: 'tailwind', label: 'Tailwind CSS' },
    { id: 'nodejs', label: 'Node.js' },
    { id: 'postgresql', label: 'PostgreSQL' },
    { id: 'supabase', label: 'Supabase' },
    { id: 'docker', label: 'Docker' },
    { id: 'git', label: 'Git' },
  ] satisfies StackItem[],
  experience: [
    {
      period: '2024 — Present',
      company: 'Independent & Product Engineering',
      role: 'Software Engineer',
      summary:
        'Designing and shipping developer tools, full-stack web applications, and automated workflows with an emphasis on clarity and performance.',
      highlights: [
        'Architected static-first web platforms and modular TypeScript libraries.',
        'Built reliable CI/CD pipelines, CLI utilities, and instrumentation.',
      ],
    },
    {
      period: '2022 — 2024',
      company: 'Product & Platform Teams',
      role: 'Full-Stack Developer',
      summary:
        'Delivered core backend services, interactive dashboards, and design systems across production codebases.',
      highlights: [
        'Reduced page load latency and simplified component APIs across shared UI kits.',
        'Owned end-to-end feature delivery from RFC and schema design to monitoring.',
      ],
    },
    {
      period: '2020 — 2022',
      company: 'Early Engineering & Open Source',
      role: 'Junior Software Developer',
      summary:
        'Contributed to web applications, API integrations, and internal automation scripts.',
      highlights: [
        'Built internal reporting tools and standardized automated test suites.',
      ],
    },
  ] satisfies ExperienceItem[],
};

/**
 * Prefixes an internal path with Astro's configured BASE_URL so links
 * work seamlessly on both user sites (`username.github.io`) and project
 * subpaths (`username.github.io/repo`).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (!path || path === '/') return base;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

export function getNavItems(lang: Lang): NavItem[] {
  const t = UI[lang].nav;
  return [
    { label: t.projects, href: localizePath('/projects', lang) },
    ...(FEATURES.writing ? [{ label: t.writing, href: localizePath('/writing', lang) }] : []),
    ...(FEATURES.experience ? [{ label: t.experience, href: localizePath('/#experience', lang) }] : []),
    { label: t.about, href: localizePath('/about', lang) },
  ];
}

export function formatDate(date: Date, lang: Lang = 'es'): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-AR' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}
