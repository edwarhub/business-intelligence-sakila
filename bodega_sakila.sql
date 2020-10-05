CREATE TABLE dim_city(
    city_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200)
);

CREATE TABLE dim_store(
    store_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200)
);

CREATE TABLE dim_language(
    language_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200)
);

CREATE TABLE dim_film(
    film_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200)
);

CREATE TABLE dim_date(
    date_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    year INT,
    month INT,
    month_name VARCHAR(200),
    day INT,
);

CREATE TABLE fac_rental(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    store_id INT(10) UNSIGNED,
    date_id INT(10) UNSIGNED,
    city_id INT(10) UNSIGNED,
    language_id INT(10) UNSIGNED,
    film_id INT(10) UNSIGNED,
    quantity INT
);
 
ALTER TABLE fac_rental ADD CONSTRAINT fk_store FOREIGN KEY (store_id) REFERENCES dim_store(store_id);
ALTER TABLE fac_rental ADD CONSTRAINT fk_city FOREIGN KEY (city_id) REFERENCES dim_city(city_id);
ALTER TABLE fac_rental ADD CONSTRAINT fk_language FOREIGN KEY (language_id) REFERENCES dim_language(language_id);
ALTER TABLE fac_rental ADD CONSTRAINT fk_film FOREIGN KEY (film_id) REFERENCES dim_film(film_id);
ALTER TABLE fac_rental ADD CONSTRAINT fk_date FOREIGN KEY (date_id) REFERENCES dim_date(date_id);
