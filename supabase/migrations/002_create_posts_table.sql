-- Create posts table for blog
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  image_url text,
  category text,
  read_time text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes
create index if not exists idx_posts_published on posts(published);
create index if not exists idx_posts_created_at on posts(created_at desc);
create index if not exists idx_posts_slug on posts(slug);

-- Triggers to keep updated_at current
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_posts_updated_at on posts;
create trigger trg_posts_updated_at
before update on posts
for each row execute procedure set_updated_at();

-- Enable Row Level Security
alter table posts enable row level security;

-- Allow anyone to read published posts
drop policy if exists "Read published posts" on posts;
create policy "Read published posts" on posts
  for select using (published = true);

-- Service role can do anything
drop policy if exists "Service role full access" on posts;
create policy "Service role full access" on posts
  for all using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
