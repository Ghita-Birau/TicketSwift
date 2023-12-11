INSERT INTO ticketmanagementsystem_v3.role(role_description, user_id) VALUES
('ADMIN', 1),
('USER', 2),
('USER', 3);

INSERT INTO ticketmanagementsystem_v3.user(user_email, user_name, address, date_of_birth, first_name, gender, password, second_name) VALUES
('ghita.birau@yahoo.com', 'Ghita_01', 'Cojocneei, Cluj-Napoca', '2001-03-05 00:00:00.000', 'Birau', 'male', 'Ghita_1234', 'Gheorghe-Marin'),
('laura.mocanu@yahoo.com', 'Laura_01', 'Republicii, Cluj-Napoca', '2001-06-17 00:00:00.000', 'Mocanu', 'female', 'Laura_1234', 'Laura'),
('david.besnei@yahoo.com', 'David_01', 'Observatorului, Cluj-Napoca', '2001-02-11 00:00:00.000', 'Besnei', 'male', 'David_1234', 'David');


INSERT INTO ticketmanagementsystem_v3.order_entity (number_of_tickets, ordered_at, total_price, user_id) VALUES
	(2, '1894-06-16 00:00:00.000', 1600, 1),
	(3, '1894-07-07 00:00:00.000', 2100, 2),
	(2, '1894-07-07 00:00:00.000', 1400, 2),
	(4, '1894-07-01 00:00:00.000', 280, 3),
	(2, '1894-07-05 00:00:00.000', 3000, 1),
	(2, '1894-07-07 00:00:00.000', 2400, 2),
	(5, '1894-06-21 00:00:00.000', 3500, 3);

INSERT INTO ticketmanagementsystem_v3.event_type (event_type_name) VALUES
	('Festival de Muzica'),
	('Sport'),
	('Bauturi');

INSERT INTO ticketmanagementsystem_v3.venue (capacity, location, type) VALUES
	(1000, 'Aleea Stadionului 2, Cluj-Napoca', 'Stadion'),
	(4000, 'Bontida Castle, Cluj-Napoca', 'Castle'),
	(3000, 'Central Park, Cluj-Napoca', 'Park'),
	(1000, 'Intre Lacuri, Cluj-Napoca', 'Park');
    
INSERT INTO ticketmanagementsystem_v3.event (end_date, event_description, event_name, start_date, event_type_id, venue_id, url_image) VALUES
	('2023-06-08 00:00:00.000', 'Muzica Electronica si nu numai', 'Untold', '2023-03-08 00:00:00.000', 1, 1, 'https://viacluj.tv/wp-content/uploads/2022/08/untold-3.jpg'),
	('1894-07-04 00:00:00.000', 'Muzica Electronica si nu numai', 'Electric Castle', '1894-06-30 00:00:00.000', 2, 1, 'https://www.interregeurope.eu/sites/default/files/styles/banner_image/public/good_practices/good_practice__5293__1620374651.png?itok=tPYd4yGe'),
	('1894-06-30 00:00:00.000', 'Fotbal', 'Meci de fotbal', '1894-06-30 00:00:00.000', 1, 2, 'https://mediacdn.libertatea.ro/unsafe/960x539/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2022/12/shutterstock2201175331.jpg'),
	('1894-06-21 00:00:00.000', 'Festival de vin', 'Wine Festival', '1894-06-18 00:00:00.000', 3, 3, 'https://vinul.ro/wp-content/uploads/2023/07/COVER_EVENT_WINEFEST_2023-752x440.png');
    
INSERT INTO ticketmanagementsystem_v3.ticket_category (description, price, event_id, order_id, access, avaible_quantity, discount_percentage) VALUES
	('Standard', 800, 1, 2, 'restricted', 5000, 5),
	('Standard', 700, 2, 4, 'restricted', 1000, 0),
	('Standard', 300, 3, 3, 'restricted', 200, 22),
	('Standard', 70, 4, 5, 'restricted', 400, 10),
	('VIP', 1500, 1, 6, 'full', 700, 0),
	('VIP', 1200, 2, 2, 'full', 500, 7),
	('VIP', 600, 3, 4, 'full', 300, 0);