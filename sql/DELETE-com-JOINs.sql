delete p from users as u
join profiles as p
on p.user_id = u.id
where u.id = 20;