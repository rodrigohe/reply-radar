CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    stage VARCHAR(255) NOT NULL,
    link VARCHAR(1024),
    ref_id VARCHAR(255),
    apply_date TIMESTAMP,
    location VARCHAR(255),
    description TEXT,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stages (
    name VARCHAR(255) PRIMARY KEY,
    color VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS locations (
    name VARCHAR(255) PRIMARY KEY,
    color VARCHAR(255) NOT NULL
)


-- CREATE TABLE IF NOT EXISTS locations (
--     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     color VARCHAR(255) NOT NULL,
--     created_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     last_updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- );


select *
from applications a
join 