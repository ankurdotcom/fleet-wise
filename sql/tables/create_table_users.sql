-- fleetwise_schema.users definition

-- Drop table

-- DROP TABLE fleetwise_schema.users;

CREATE TABLE fleetwise_schema.users (
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	userid int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	CONSTRAINT users_un UNIQUE (username),
	CONSTRAINT users_pk PRIMARY KEY (userid)
);
COMMENT ON TABLE fleetwise_schema.users IS 'contain creds of logeed in users';

-- Permissions

ALTER TABLE fleetwise_schema.users OWNER TO postgres;
GRANT ALL ON TABLE fleetwise_schema.users TO postgres;