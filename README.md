SELECT first_name, age
FROM Customers;
DROP TABLE IF EXISTS Shippings;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Clientes;

-- Criação de tabela
 Create table Clientes( 
1. ID     integer   Primary Key,
2. NAME   text,
3. IDADE   integer,
 );
              CRUD
 1. Insert Into Clientes (ID, NAME, IDADE)
 2. Valeus 
 3. (1,"Ana",22);(2,"Paula",23);(3,"Tharcisio",25);
 
 CRUD -- Read
 1. select * From (Clientes);
 
 CRUD -- UPDATE
 UPDATE Clientes 
 SET idade=26 where id=1;
 
 CRUD --Delete
 Delete From Cliente
 where name="Ana";
