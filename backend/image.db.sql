CREATE TABLE Image (
    image_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    image_title TEXT,
    image_description TEXT,
    image_url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);