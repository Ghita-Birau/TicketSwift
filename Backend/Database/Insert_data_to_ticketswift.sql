INSERT INTO ticketswift.event_type (event_type_name) VALUES
	('Muzica'),
	('Sport'),
	('Bauturi'),
    ('Dans'),
    ('Comedie');
    
INSERT INTO ticketswift.venue (capacity, location, type, longitude, latitude) VALUES
    (1000, 'Aleea Stadionului 2, Cluj-Napoca', 'Stadion', 23.5725, 46.7675),
    (4000, 'Bontida Castle, Cluj-Napoca', 'Castle', 23.808139, 46.908861),
    (3000, 'Central Park, Cluj-Napoca', 'Park', 23.578278, 46.770194),
    (1000, 'Intre Lacuri, Cluj-Napoca', 'Park', 23.635056, 46.774528),
    (10000, 'Sala Polivalenta BT Arena, Cluj-Napoca', 'Stadion', 23.5725, 46.7675),
    (20000, 'Sala Palatului, Bucuresti', 'Sala de concerte', 26.0946, 44.4389),
    (6000, 'Sala Polivalenta, Bucuresti', 'Stadion', 26.1100, 44.4053),
    (700, 'Casa de Cultura a Sindicatelor, Satu Mare', 'Casa de cultura', 22.8900, 47.7900),
    (12000, 'Glaspalast Sindelfingen, Stuttgart', 'Stadion', 8.9836, 48.7158),
    (2000, 'AI GustoRestaurante, Zaragoza', 'Restaurant', -0.8833, 41.6500);
    
INSERT INTO ticketswift.event (end_date, event_description, event_name, start_date, event_type_id, venue_id, url_image) VALUES
	('2023-06-08 00:00:00.000', 'Muzica Electronica si nu numai', 'Untold', '2023-03-08 00:00:00.000', 1, 1, 'https://viacluj.tv/wp-content/uploads/2022/08/untold-3.jpg'),
	('1894-07-04 00:00:00.000', 'Muzica Electronica si nu numai', 'Electric Castle', '1894-06-30 00:00:00.000', 1, 2, 'https://www.interregeurope.eu/sites/default/files/styles/banner_image/public/good_practices/good_practice_5293_1620374651.png?itok=tPYd4yGe'),
	('1894-06-30 00:00:00.000', 'Fotbal', 'Meci de fotbal', '1894-06-30 00:00:00.000', 2, 1, 'https://mediacdn.libertatea.ro/unsafe/960x539/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2022/12/shutterstock2201175331.jpg'),
	('1894-06-21 00:00:00.000', 'Festival de vin', 'Wine Festival', '1894-06-18 00:00:00.000', 3, 3, 'https://vinul.ro/wp-content/uploads/2023/07/COVER_EVENT_WINEFEST_2023-752x440.png'),
    ('2023-12-17 00:00:00.000', 'Concert', 'Concert Aniversar de Craciun Stefan Banica', '2023-12-16 19:00:00.000', 1, 5, 'https://static.iabilet.ro/img/auto_resized/db/event/01/52/40/00000236852-f35b-800x800-n-426db434.jpg'),
    ('2023-12-15 06:00:00.000', 'The ultimate celebration of independence and good vibes', 'F**k Me I`m Single', '2023-12-14 23:00:00.000', 4, 1, 'https://static.iabilet.ro/img/auto_resized/db/event/01/69/40/00000247999-1378-800x800-n-cab429e2.jpg'),
    ('2023-12-23 00:00:00.000', 'Craciun Vienez cu Johann Strauss Ensemble si Russell McGregor', 'Craciun Vienez', '2023-12-22 20:00:00.000', 1, 6, 'https://static.iabilet.ro/img/auto_resized/db/event/01/3e/b0/00000205989-9bc3-800x800-n-8cfdd10a.jpg'),
    ('2024-01-08 00:00:00.000', 'EHF Champions League, Runda9: CSM Bucuresti vs WHC Buducnost BEMAX', 'EHF Champions League', '2024-01-07 17:00:00.000', 2, 7, 'https://static.iabilet.ro/img/auto_resized/db/event/01/69/13/00000247840-a414-800x800-n-d091e0a2.png'),
    ('2023-12-15 00:00:00.000', 'Stand-Up Comedy cu Bordea, Cortea si Teodora Nedelcu', 'A Doua Tinerete', '2023-12-14 19:00:00.000', 5, 8, 'https://static.iabilet.ro/img/auto_resized/db/event/01/61/b4/00000241224-556f-800x800-n-1570c223.jpg'),
    ('2024-04-07 00:00:00.000', 'Stuttgart: Concert Andra Traditional 2', 'Concert Andra', '2024-04-06 19:30:00.000', 1, 9, 'https://static.iabilet.ro/img/auto_resized/db/event/01/57/56/00000227946-ab41-800x800-n-a15e2aac.png'),
    ('2024-02-18 00:00:00.000', 'Zaragoza: Stand up comedy cu Doru iVanov', 'One Man Show', '2024-02-17 20:00:00.000', 5, 10, 'https://static.iabilet.ro/img/auto_resized/db/event/01/69/3d/00000247987-5e7b-800x800-n-ebe575dd.png'); 
    
INSERT INTO ticketswift.ticket_category (description) VALUES
	('Standard'),
	('VIP'),
	('Early Bird'),
	('Last Minute'),
	('Family');
    
INSERT INTO ticketswift.event_ticket_category (price, event_id, access, avaible_quantity, discount_percentage, ticket_category_id) VALUES
    (800, 1, 'restricted', 5000, 5, 1),
	(700, 2, 'restricted', 1000, 0, 1),
	(300, 3, 'restricted', 200, 22, 1),
	(70, 4, 'restricted', 400, 10, 1),
	(1500, 1, 'full', 700, 0, 2),
	(1200, 2, 'full', 500, 7, 2),
	(600, 3, 'full', 300, 0, 2),
    (700, 1, 'full', 5000, 15, 2),
	(500, 2, 'full', 1000, 20, 3),
	(150, 3, 'restricted', 200, 10, 3),
	(50, 4, 'restricted', 400, 8, 3),
	(2000, 1, 'full', 700, 0, 3),
	(1500, 2, 'full', 500, 0, 4),
	(1000, 3, 'restricted', 300, 0, 4),
    (2000, 1, 'full', 5000, 5, 4),
	(1500, 2, 'restricted', 1000, 0, 4),
	(1000, 3, 'full', 200, 22, 5),
	(500, 4, 'restricted', 400, 10, 5);
    
    INSERT INTO ticketswift.order_entity (number_of_tickets, ordered_at, total_price, event_ticket_category_id, user_id) VALUES
	(2, '1894-06-16 00:00:00.000', 1600, 1, 4),
	(3, '1894-07-07 00:00:00.000', 2100, 3, 2),
	(2, '1894-07-07 00:00:00.000', 1400, 5, 2),
	(4, '1894-07-01 00:00:00.000', 280, 7, 3),
	(2, '1894-07-05 00:00:00.000', 3000, 9, 1),
	(2, '1894-07-07 00:00:00.000', 2400, 11, 2),
	(5, '1894-06-21 00:00:00.000', 3500, 15, 3);