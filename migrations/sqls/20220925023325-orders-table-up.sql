CREATE TABLE Orders_table(id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES Users_table(id), status state_value);