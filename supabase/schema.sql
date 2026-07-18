-- ============================================================
--  PT. HiTech Aksara Digital - Database Schema
--  Supabase (PostgreSQL)
-- ============================================================

-- ------------------------------------------------------------
--  contact_messages
--  Stores submissions from the "Hubungi Kami" contact form
-- ------------------------------------------------------------
create table if not exists public.contact_messages (
  id          bigint generated always as identity primary key,
  name        text        not null,
  email       text        not null,
  company     text,
  subject     text        not null default 'Konsultasi Digital',
  message     text        not null,
  status      text        not null default 'new'
                check (status in ('new', 'read', 'replied', 'archived')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
--  newsletter_subscribers
--  Optional: capture newsletter / early-access signups
-- ------------------------------------------------------------
create table if not exists public.newsletter_subscribers (
  id          bigint generated always as identity primary key,
  email       text not null unique,
  created_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
--  project_inquiries
--  Tracks interest on specific portfolio / service items
-- ------------------------------------------------------------
create table if not exists public.project_inquiries (
  id           bigint generated always as identity primary key,
  name         text        not null,
  email        text        not null,
  project      text,
  message      text,
  created_at   timestamptz not null default now()
);

-- ------------------------------------------------------------
--  Row Level Security
--  Anonymous anon key may INSERT (public contact form) but
--  cannot read/modify other rows. Authenticated admins
--  (role = 'admin') get full access via a separate policy.
-- ------------------------------------------------------------
alter table public.contact_messages        enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.project_inquiries      enable row level security;

-- Allow anonymous INSERT on the public contact form
drop policy if exists "allow anon insert contact_messages" on public.contact_messages;
create policy "allow anon insert contact_messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

drop policy if exists "allow anon insert newsletter_subscribers" on public.newsletter_subscribers;
create policy "allow anon insert newsletter_subscribers"
  on public.newsletter_subscribers
  for insert
  to anon
  with check (true);

drop policy if exists "allow anon insert project_inquiries" on public.project_inquiries;
create policy "allow anon insert project_inquiries"
  on public.project_inquiries
  for insert
  to anon
  with check (true);

-- Admins (authenticated, role = 'admin') can manage everything
drop policy if exists "admin full access contact_messages" on public.contact_messages;
create policy "admin full access contact_messages"
  on public.contact_messages
  for all
  to authenticated
  using (auth.jwt() ->> 'app_metadata' ->> 'role' = 'admin')
  with check (auth.jwt() ->> 'app_metadata' ->> 'role' = 'admin');

drop policy if exists "admin full access newsletter_subscribers" on public.newsletter_subscribers;
create policy "admin full access newsletter_subscribers"
  on public.newsletter_subscribers
  for all
  to authenticated
  using (auth.jwt() ->> 'app_metadata' ->> 'role' = 'admin')
  with check (auth.jwt() ->> 'app_metadata' ->> 'role' = 'admin');

drop policy if exists "admin full access project_inquiries" on public.project_inquiries;
create policy "admin full access project_inquiries"
  on public.project_inquiries
  for all
  to authenticated
  using (auth.jwt() ->> 'app_metadata' ->> 'role' = 'admin')
  with check (auth.jwt() ->> 'app_metadata' ->> 'role' = 'admin');

-- ------------------------------------------------------------
--  Updated-at trigger helper
-- ------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_contact_messages_updated_at on public.contact_messages;
create trigger trg_contact_messages_updated_at
  before update on public.contact_messages
  for each row execute function public.set_updated_at();
