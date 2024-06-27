select u.id as uid, u.first_name, r.name, p.bio from users as u
left join users_roles ur on u.id = ur.user_id
inner join profiles as p on p.user_id = u.id
inner join roles as r on ur.role_id = r.id
order by u.id asc;