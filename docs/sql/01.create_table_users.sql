CREATE TABLE auths.users (
	id INT auto_increment NOT NULL,
	email varchar(100) NULL,
	password varchar(100) NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
