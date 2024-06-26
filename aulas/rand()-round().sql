update users set salary=round(rand() * 10000, 2);

select * from users where salary>=1400 order by salary asc;