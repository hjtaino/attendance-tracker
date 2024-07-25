alter table "public"."trans_leave_request_attachments" alter column "attachment" set default ''Filename Data Type'::text';
alter table "public"."trans_leave_request_attachments" alter column "attachment" drop not null;
alter table "public"."trans_leave_request_attachments" add column "attachment" text;
