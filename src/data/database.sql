create TABLE skills(
	id SERIAL PRIMARY KEY, 
	name VARCHAR(255),
	image VARCHAR(255),
	stars SMALLINT
)

create TABLE porfolio(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	description TEXT,
	url VARCHAR(255)
)

create TABLE access (
	key VARCHAR(255)
)