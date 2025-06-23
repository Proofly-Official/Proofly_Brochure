-- Create waitlist table
create table if not exists public.waitlist (
  id serial primary key,
  name text not null,
  email text not null,
  role text,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Create policy to allow inserts for everyone
create policy "Allow public inserts" on public.waitlist
  for insert with check (true);

-- Create policy to allow reads for everyone (optional, for admin purposes)
create policy "Allow public reads" on public.waitlist
  for select using (true);
