select first_name, count(first_name) as total from users u 
group by first_name
order by total desc;