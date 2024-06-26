-- inserir 5 usuários
insert into users (first_name, last_name, email, password_hash)
values ('Alice', 'Smith', 'alice@example.com', '0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e'),
('Bob', 'Johnson', 'bob@example.com', '6cf615d5bcaac778352a8f1f3360d23f02f34ec182e259897fd6ce485d7870d4'),
('Charlie', 'Williams', 'charlie@example.com', '5906ac361a137e2d286465cd6588ebb5ac3f5ae955001100bc41577c3d751764'),
('Diana', 'Jones', 'diana@example.com', 'b97873a40f73abedd8d685a7cd5e5f85e4a9cfb83eac26886640a0813850122b'),
('Evan', 'Brown', 'evan@example.com', '8b2c86ea9cf2ea4eb517fd1e06b74f399e7fec0fef92e3b482a6cf2e2b092023');

-- inserir 5 perfís para os usuários inseridos acima
insert into profiles (bio, description, user_id)
select concat('Bio de ', u.first_name, ' ', u.last_name), concat('Descrição de ', u.first_name), u.id 
	from users as u
	where email
		in ('alice@example.com', 'bob@example.com', 'charlie@example.com', 'diana@example.com', 'evan@example.com');
		
-- inserir permissões (roles) para os usuários inseridos
insert into users_roles (user_id, role_id)
	select u.id, (select id from roles order by rand() limit 1) from users as u
		where u.email  in ('alice@example.com', 'bob@example.com', 'charlie@example.com', 'diana@example.com', 'evan@example.com');
		
-- selecione os últimos 5 usuários por ordem crescente
select * from users
	order by users.id desc
	limit 5;
	
-- atualize o último usuário inserido
update users set first_name = 'EVAN ATUALIZADO'
	where id=118;

-- remova uma permissão de algum usuário
delete from users_roles where user_id=118 and role_id=4;

-- remova um usuário que tem a permissão PATCH
delete ur from users as u
	join users_roles as ur
	on ur.user_id = u.id
	where u.id = 104 and ur.role_id = 4;

-- selecione usuários com perfís e permissões(obrigatório)
select u.id as uid, u.first_name, p.bio, r.name as name from users as u
	inner join profiles as p
		on p.user_id = u.id
	inner join users_roles as ur 
		on ur.user_id = u.id
	inner join roles as r
		on r.id = ur.role_id;
	
-- selecione usuários com perfís e permissões(opcional)
select u.id as uid, u.first_name, p.bio, r.name as name from users as u
	left join profiles as p
		on p.user_id = u.id
	left join users_roles as ur 
		on ur.user_id = u.id
	left join roles as r
		on r.id = ur.role_id;

-- selecione usuários com perfís e permissões ordenando por salário
select u.id as uid, u.first_name, p.bio, r.name as name, u.salary from users as u
	left join profiles as p
		on p.user_id = u.id
	left join users_roles as ur 
		on ur.user_id = u.id
	left join roles as r
		on r.id = ur.role_id
	order by u.salary asc;

