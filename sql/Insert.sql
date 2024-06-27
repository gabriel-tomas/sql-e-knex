show tables;

describe users;

insert into users (first_name, last_name, email, password_hash)
values ("Gabriel", "Tomás", "gabriel0@gmail.com", "um_hash");

insert into users (first_name, last_name, email, password_hash)
values ("Maria 1", "123", "maria1@gmail.com", "um4_hash"),
("Maria 2", "123", "maria2@gmail.com", "um2_hash"),
("Maria 3", "123", "maria3@gmail.com", "um3_hash");