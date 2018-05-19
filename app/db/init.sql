drop table if exists products;

create table if not exists products(
    id serial primary key,
    name text,
    price int,
    img TEXT
);

insert into products (name, price, img) values ('Apple', 30, 'http://media.indiedb.com/images/games/1/36/35866/paul1-01.png');
insert into products (name, price, img) values ('Orange', 30, 'http://media.indiedb.com/images/games/1/36/35866/paul1-01.png');
insert into products (name, price, img) values ('Kiwi', 30, 'http://media.indiedb.com/images/games/1/36/35866/paul1-01.png');

select * from products;