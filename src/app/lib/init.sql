CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE IF NOT EXISTS users(
--     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
--     username TEXT NOT NULL UNIQUE,
--     password TEXT NOT NULL
-- );

CREATE TABLE IF NOT EXISTS applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    stage VARCHAR(255) NOT NULL,
    link VARCHAR(1024),
    ref_id VARCHAR(255),
    apply_date TIMESTAMP,
    location VARCHAR(255),
    location_colors JSONB,
    description TEXT,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);