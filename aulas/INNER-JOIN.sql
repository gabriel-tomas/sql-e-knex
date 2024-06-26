select u.id as uid, p.id as pid from users as u
inner join profiles as p on u.id = p.user_id
order by u.id asc;