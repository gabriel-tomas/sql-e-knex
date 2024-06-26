select u.id as uid, p.id as pid from users as u, profiles as p
where u.id = p.user_id 
order by uid asc, pid asc;