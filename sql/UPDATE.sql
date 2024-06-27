select * from users where id between 10 and 15;

update users set first_name='Maria José 124', last_name='Ribeiro da silva josé' where id=11;

update users set first_name='atualizou vários registros'
where id between 10 and 15;

select * from users where first_name like '%at%';