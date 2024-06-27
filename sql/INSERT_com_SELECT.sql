insert into profiles (bio, description, user_id)
select concat('Bio de ', first_name), concat('Descrição de ', first_name, ' ', last_name), id
from users;

delete from profiles;