CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
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

CREATE TABLE IF NOT EXISTS user_location_colors (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    location VARCHAR(1024),
    location_colors JSONB,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

-- insert into users (username, password) values
-- ('test@email.com', '$2y$10$HxFSZxZDIerYSHLwcv3GbeJgNi8OlNwFeEdh0xzX9QGAm/1VLpA5G')