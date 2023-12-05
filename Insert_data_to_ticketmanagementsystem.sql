INSERT INTO ticketmanagementsystem.user (user_name, user_email) VALUES 
	('Pop Adrian', 'pop_adrian@gmail.com'),
	('Popescu Mirela', 'popescu_mirela@gmail.com'),
	('Ursu Gabriel' ,'gabriel_ursu@gmail.com'),
	('Alexe Alexandru', 'alex_alexe@gmail.com'),
	('Ducu Alexandra', 'alexandra_ducu@gmail.com'),
	('Irimescu Adina', 'adina_irimescu@gmail.com'); 
select * from ticketmanagementsystem.user;


INSERT INTO ticketmanagementsystem.venue (capacity, location, type) VALUES
	(1000, 'Aleea Stadionului 2, Cluj-Napoca', 'Stadion'),
	(4000, 'Bontida Castle, Cluj-Napoca', 'Castle'),
	(3000, 'Central Park, Cluj-Napoca', 'Park'),
	(1000, 'Intre Lacuri, Cluj-Napoca', 'Park');
select * from ticketmanagementsystem.venue;

INSERT INTO ticketmanagementsystem.event_type (event_type_name) VALUES
	('Festival de Muzica'),
	('Sport'),
	('Bauturi');
select * from ticketmanagementsystem.event_type;


INSERT INTO ticketmanagementsystem.event (end_date, event_description, event_name, start_date, event_type_id, venue_id) VALUES
	('2023-06-08 00:00:00.000', 'Muzica Electronica si nu numai', 'Untold', '2023-03-08 00:00:00.000', 1, 1),
	('1894-07-04 00:00:00.000', 'Muzica Electronica si nu numai', 'Electric Castle', '1894-06-30 00:00:00.000', 2, 1),
	('1894-06-30 00:00:00.000', 'Fotbal', 'Meci de fotbal', '1894-06-30 00:00:00.000', 1, 2),
	('1894-06-21 00:00:00.000', 'Festival de vin', 'Wine Festival', '1894-06-18 00:00:00.000', 3, 3);
select * from ticketmanagementsystem.event;


INSERT INTO ticketmanagementsystem.ticket_category (description, price, event_id) VALUES
	('Standard', 800, 1),
	('Standard', 700, 2),
	('Standard', 300, 3),
	('Standard', 70, 4),
	('VIP', 1500, 1),
	('VIP', 1200, 2),
	('VIP', 600, 3);
select * from ticketmanagementsystem.ticket_category;


INSERT INTO ticketmanagementsystem.order_entity (number_of_tickets, ordered_at, total_price, ticket_category_id, user_id) VALUES
	(2, '1894-06-16 00:00:00.000', 1600, 1, 1),
	(3, '1894-07-07 00:00:00.000', 2100, 2, 2),
	(2, '1894-07-07 00:00:00.000', 1400, 2, 3),
	(4, '1894-07-01 00:00:00.000', 280, 4, 3),
	(2, '1894-07-05 00:00:00.000', 3000, 5, 4),
	(2, '1894-07-07 00:00:00.000', 2400, 6, 4),
	(5, '1894-06-21 00:00:00.000', 3500, 4, 5);
select * from ticketmanagementsystem.order_entity;

drop table ticketmanagementsystem.venue;
drop table ticketmanagementsystem.event;
drop table ticketmanagementsystem.user;
drop table ticketmanagementsystem.event_type;
drop table ticketmanagementsystem.order;
drop table ticketmanagementsystem.ticket_category;