
DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS cart
DROP TABLE IF EXISTS packages
DROP TABLE IF EXISTS packages_cart_junction


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    email VARCHAR(100),
    password VARCHAR(2000)
);

SELECT * FROM packages 

CREATE TABLE packages (
    package_id SERIAL PRIMARY KEY,
    package_name VARCHAR(100),
    package_info VARCHAR(1000),
    package_items INT,
    package_price INT
 );

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    active BOOLEAN
);

CREATE TABLE package_cart_junction (
    package_cart_id SERIAL PRIMARY KEY,
    cart_id INT REFERENCES cart(cart_id),
    package_id INT REFERENCES packages(package_id),
    quantity INT
);



INSERT INTO packages
(package_name, package_info, package_items, package_price)
VALUES
('Bronze', 'A good starter package to get your feet wet!', 5, 50),
('Silver', 'Our recommendation for those wanting to try a little more!', 10, 100),
('Gold', 'Best Value!', 15, 125); 

