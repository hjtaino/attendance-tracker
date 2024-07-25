alter table "public"."users" alter column "hello" drop not null;
alter table "public"."users" add column "hello" timestamptz;
