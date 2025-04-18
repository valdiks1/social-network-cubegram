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

CREATE TABLE IF NOT EXISTS puzzles(
	id serial NOT NULL,
	name varchar(30) NOT NULL,
	suspicious_result bigint NOT NULL, 	--milliseconds
	CONSTRAINT puzzles_pkey PRIMARY KEY(id)
);

INSERT INTO puzzles(name, suspicious_result) 
VALUES ('2x2x2', 200),
('3x3x3', 2000),
('4x4x4', 12000),
('5x5x5', 28000);

CREATE TABLE IF NOT EXISTS attempts(
	id varchar(100) NOT NULL,
	time bigint NOT NULL,											--result time
	id_u int NOT NULL,
	datetime timestamp without time zone NOT NULL,					--date of attempt
	flags varchar(5) NOT NULL,
	id_p int NOT NULL,
	CONSTRAINT attempts_pkey PRIMARY KEY(id),
	CONSTRAINT id_u_fk FOREIGN KEY(id_u) REFERENCES users(id),
	CONSTRAINT id_p_fk FOREIGN KEY(id_p) REFERENCES puzzles(id),
	CONSTRAINT flags_check CHECK (flags IN ('+2', 'DNF', 'none'))
);