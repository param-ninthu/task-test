CREATE TABLE user ( 
    id int not null, 
    firstname varchar(255), 
    lastname varchar(255), 
    email varchar(255), 
    cultureID int, 
    deleted bit , 
    country varchar[255], 
    isRevokeAccess bit , 
    created datetime,  
    primary key (id) 
);

INSERT INTO user (id, firstname, lastname, email, cultureID, deleted, country, isRevokeAccess, created) 
VALUES 
(1, 'Victor', 'Shevchenko', 'vs@ gmail.com', 1033, 1, 'US', 0, '2011-04-05'),
(2, 'Oleksandr', 'Petrenko', 'op@ gmail.com', 1034, 0, 'UA', 0, '2014-05-01'),
(3, 'Victor', 'Tarasenko', 'vt@gmail.com', 1033, 1, 'US', 1, '2015-07-03'),
(4, 'Sergiy', 'Ivanenko', 'sergiy@gmail.com', 1046, 0, 'UA', 1, '2010-02-02'),
(5, 'Vitalii', 'Danilchenko', 'shumko@ gmail.com', 1031, 0, 'UA', 1, '2014-05-01'),
(6, 'Joe', 'Dou', 'joe@ gmail.com', 1032, 0, 'US', 1, '2009-01-01'),
(7, 'Marko', 'Polo', 'marko@gmail.com', 1033, 1, 'UA', 1, '2015-07-03');


CREATE TABLE "group" (
    id int not null,
    name varchar(255),
    created datetime,
    primary key (id)
);


INSERT INTO "group" (id, name, created)
VALUES
(10, 'Support', '2010-02-02'),
(12, 'Dev team', '2010-02-03'),
(13, 'Apps team', '2011-05-06'),
(14, 'TEST - dev team', '2013-05-06'),
(15, 'Guest', '2014-02-02'),
(16, 'TEST-QA-team', '2014-02-02'),
(17, 'TEST-team', '2011-01-07')
;


CREATE TABLE groupMembership (
    id int not null,
    userID int,
    groupID int,
    created datetime,
    primary key (id)
);


INSERT INTO groupMembership (id, userID, groupID, created)
VALUES
(110, 2, 10, '2010-02-02'),
(112, 3, 15, '2010-02-03'),
(114, 1, 10, '2014-02-02'),
(115, 1, 17, '2011-05-02'),
(117, 4, 12, '2014-07-13'),
(120, 5, 15, '2014-06-15');





SELECT DISTINCT name from "group" AS grp  
INNER JOIN "groupMembership" AS grpMem  
ON grp.id NOT IN (SELECT groupID from groupMembership)  
AND grp.name LIKE "TEST-%";


SELECT DISTINCT firstname , lastname from user AS usr 
INNER JOIN  groupMembership as grpMem ON usr.id = grpMem.userID 
AND usr.firstname LIKE "Victor%"  
INNER JOIN "group" AS grp 
WHERE grp.name NOT LIKE "TEST-%";


SELECT DISTINCT usr.firstname, usr.lastname, grp.name, usr.created as userCreated, grp.created as groupCreated FROM user as usr 
INNER JOIN groupMembership AS grpMem ON usr.id = grpMem.userID
INNER JOIN "group" as grp ON grp.id = grpMem.groupID 
WHERE usr.created < grp.created ;