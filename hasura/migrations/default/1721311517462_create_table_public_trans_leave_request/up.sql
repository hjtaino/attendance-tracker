CREATE TABLE "public"."trans_leave_request" ("id" bigint NOT NULL, "requested_id" integer NOT NULL, "date_from_leave" date NOT NULL, "date_to_leave" date NOT NULL, "year" varchar NOT NULL, "month" varchar NOT NULL, "day" varchar NOT NULL, "status_id" integer NOT NULL, "created_at" timestamptz NOT NULL, "updated_at" timestamptz NOT NULL, "manager_id" integer NOT NULL, "submitted_date" date NOT NULL, "approved_date" date NOT NULL, "rejected_date" date NOT NULL, "cancelled_date" date NOT NULL, "remarks" text NOT NULL, "request_type_id" integer NOT NULL, "active" boolean NOT NULL DEFAULT TRUE, PRIMARY KEY ("id") );