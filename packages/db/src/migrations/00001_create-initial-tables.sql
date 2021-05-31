-- Schemas
DROP SCHEMA IF EXISTS app_public cascade;
DROP SCHEMA IF EXISTS app_private cascade;

CREATE SCHEMA app_public;
CREATE SCHEMA app_private;

DROP EXTENSION "uuid-ossp";
CREATE EXTENSION "uuid-ossp";
DROP EXTENSION citext;
CREATE EXTENSION citext;


-- Triggers
CREATE OR REPLACE FUNCTION app_private.create_timestamp_trigger() RETURNS trigger AS $$
BEGIN
  NEW.created_at = (CASE WHEN TG_OP = 'INSERT' THEN NOW() ELSE OLD.created_at END);
  NEW.updated_at = (CASE WHEN TG_OP = 'UPDATE' AND OLD.updated_at >= NOW() THEN OLD.updated_at + interval '1 millisecond' ELSE NOW() END);
  RETURN NEW;
END;
$$ language plpgsql volatile;

DROP TABLE IF EXISTS app_public.resume_views;
DROP TABLE IF EXISTS app_public.resumes;
DROP TABLE IF EXISTS app_public.users;

CREATE TABLE app_public.users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc (),
  auth_id varchar(80) NOT NULL UNIQUE, -- Populated by auth0
  email citext,
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);
CREATE TRIGGER set_timestamp_users BEFORE UPDATE ON app_public.users FOR EACH ROW EXECUTE PROCEDURE app_private.create_timestamp_trigger();

CREATE TABLE app_public.resumes (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc (),
    user_auth_id varchar(80),
    FOREIGN KEY (user_auth_id) REFERENCES app_public.users (auth_id) ON DELETE CASCADE,
  	resume_data json,
    slug text NOT NULL UNIQUE,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);
CREATE TRIGGER set_timestamp_resumes BEFORE UPDATE ON app_public.resumes FOR EACH ROW EXECUTE PROCEDURE app_private.create_timestamp_trigger();
CREATE UNIQUE INDEX slug_idx ON app_public.resumes (slug);


CREATE TABLE app_public.resume_views (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc (),
    resume_id uuid,
    FOREIGN KEY (resume_id) REFERENCES app_public.resumes (id) ON DELETE CASCADE,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);
CREATE TRIGGER set_timestamp_resume_views BEFORE UPDATE ON app_public.resume_views FOR EACH ROW EXECUTE PROCEDURE app_private.create_timestamp_trigger();