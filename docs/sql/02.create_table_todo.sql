CREATE TABLE auths.todos (
	id INT auto_increment NOT NULL,
	title varchar(100) NULL,
	done TINYINT DEFAULT 0 NULL,
	CONSTRAINT todos_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
