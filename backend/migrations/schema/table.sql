CREATE TABLE posts(
	id serial NOT NULL PRIMARY KEY,
	id_u int NOT NULL,
	text text NOT NULL,
	date timestamp without time zone NOT NULL,
	CONSTRAINT FK_id_u FOREIGN KEY(id_u) REFERENCES users(id)
);

CREATE TABLE "session" (
    "sid" varchar NOT NULL PRIMARY KEY,
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.users
(
    id serial NOT NULL,
    name character varying(100) NOT NULL,
    login character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    country character varying(100) NOT NULL,
    sex character varying(10) NOT NULL,
    date_of_birth date NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT unique_email UNIQUE (email),
    CONSTRAINT unique_login UNIQUE (login),
    CONSTRAINT check_sex_valid CHECK (sex::text = ANY (ARRAY['male'::character varying, 'female'::character varying]::text[]))
)