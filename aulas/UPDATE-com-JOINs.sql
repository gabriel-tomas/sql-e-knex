update users as u
join profiles as p
on p.user_id = u.id
set p.bio = concat(p.bio, ' novo')
where u.id = 20;