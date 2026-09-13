-- Run this once in the Supabase project's SQL editor (Project -> SQL Editor -> New query).
-- If you already ran an earlier version of this file, the ALTER TABLE
-- statements below add any newer columns to an existing `leads` table.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  kind text not null default 'info',
  name text not null default '',
  email text not null,
  telegram text not null default '',
  instagram text not null default '',
  about text not null default '',
  locale text not null,
  answers jsonb not null default '{}'::jsonb,
  result_category text not null,
  recommended_scholarship text not null default 'unsure',
  points integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.leads add column if not exists kind text not null default 'info';
alter table public.leads add column if not exists name text not null default '';
alter table public.leads add column if not exists telegram text not null default '';
alter table public.leads add column if not exists instagram text not null default '';
alter table public.leads add column if not exists about text not null default '';
alter table public.leads add column if not exists recommended_scholarship text not null default 'unsure';

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;
