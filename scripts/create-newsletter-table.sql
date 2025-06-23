-- Create newsletter contacts table
create table if not exists public.newsletter_contacts (
  id serial primary key,
  email text not null,
  submitted_at timestamptz not null default now(),
  submitted_date date default current_date
);

-- Enable Row Level Security
alter table public.newsletter_contacts enable row level security;

-- Create policy to allow inserts for everyone
create policy "Allow public inserts" on public.newsletter_contacts
  for insert with check (true);

-- Create policy to allow reads for everyone (optional, for admin purposes)
create policy "Allow public reads" on public.newsletter_contacts
  for select using (true);
