select u.id, p.id from users as u
left join profiles as p
on u.id = p.user_id
order by u.id asc;