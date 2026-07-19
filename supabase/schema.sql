-- ============================================================
--  PT. HiTech Aksara Digital - Database Schema
--  Supabase (PostgreSQL)
-- ============================================================

-- ------------------------------------------------------------
--  contacts
--  Stores submissions from the "Hubungi Kami" contact form
-- ------------------------------------------------------------
create table if not exists public.contacts (
  id          bigint generated always as identity primary key,
  full_name   text        not null,
  email       text        not null,
  subject     text        not null default 'Konsultasi Digital',
  message     text        not null,
  consent     boolean     not null default false,
  created_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
--  projects
--  Showcase projects displayed on the Portofolio page
-- ------------------------------------------------------------
create table if not exists public.projects (
  id          bigint generated always as identity primary key,
  title       text        not null,
  category    text        not null,
  description text,
  image_url   text,
  stat        text,
  is_active   boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
--  testimonials
--  Client testimonials shown on the Beranda (home) page
-- ------------------------------------------------------------
create table if not exists public.testimonials (
  id          bigint generated always as identity primary key,
  name        text        not null,
  role        text        not null,
  company     text,
  quote       text        not null,
  avatar_url  text,
  is_active   boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
--  services
--  Company service offerings (used by the Layanan page)
-- ------------------------------------------------------------
create table if not exists public.services (
  id          bigint generated always as identity primary key,
  title       text        not null,
  description text        not null,
  icon        text,
  sort_order  integer     not null default 0,
  is_active   boolean     not null default true,
  created_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
--  Row Level Security
-- ------------------------------------------------------------
alter table public.contacts      enable row level security;
alter table public.projects      enable row level security;
alter table public.testimonials  enable row level security;
alter table public.services      enable row level security;

-- Allow anonymous INSERT on the public contact form
drop policy if exists "allow anon insert contacts" on public.contacts;
create policy "allow anon insert contacts"
  on public.contacts
  for insert
  to anon
  with check (true);

-- Allow anonymous read on public content
drop policy if exists "allow anon read projects" on public.projects;
create policy "allow anon read projects"
  on public.projects
  for select
  to anon
  using (is_active = true);

drop policy if exists "allow anon read testimonials" on public.testimonials;
create policy "allow anon read testimonials"
  on public.testimonials
  for select
  to anon
  using (is_active = true);

drop policy if exists "allow anon read services" on public.services;
create policy "allow anon read services"
  on public.services
  for select
  to anon
  using (is_active = true);

-- Admins (authenticated, role = 'admin') can manage everything
drop policy if exists "admin full access contacts" on public.contacts;
create policy "admin full access contacts"
  on public.contacts
  for all
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "admin full access projects" on public.projects;
create policy "admin full access projects"
  on public.projects
  for all
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "admin full access testimonials" on public.testimonials;
create policy "admin full access testimonials"
  on public.testimonials
  for all
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "admin full access services" on public.services;
create policy "admin full access services"
  on public.services
  for all
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
