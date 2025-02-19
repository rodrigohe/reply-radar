CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE, 
    company VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    stage VARCHAR(255) NOT NULL,
    link VARCHAR(255),
    ref_id VARCHAR(255),
    apply_date TIMESTAMP,
    location VARCHAR(1024),
    location_colors JSONB,
    description TEXT,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users_location_colors (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    location VARCHAR(1024),
    location_colors JSONB,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COPY users(id, email, password)
FROM '/docker-entrypoint-initdb.d/users.csv' DELIMITER ',' CSV HEADER;

COPY applications(user_id, company, position, stage, link, ref_id, apply_date, location, location_colors)
FROM '/docker-entrypoint-initdb.d/applications.csv' DELIMITER '$' CSV HEADER;