CREATE TABLE Order_item(id SERIAL PRIMARY KEY, order_id integer REFERENCES Orders_table(id), product_id integer REFERENCES Product_table(id), quantity integer);