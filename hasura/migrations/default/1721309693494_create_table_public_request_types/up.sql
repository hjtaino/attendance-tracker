CREATE TABLE "public"."request_types" ("id" bigserial NOT NULL, "name" varchar NOT NULL DEFAULT 'Vacation Leave, Return to Site', "key" varchar NOT NULL DEFAULT 'VL, RTS', "active" boolean NOT NULL DEFAULT TRUE, PRIMARY KEY ("id") );