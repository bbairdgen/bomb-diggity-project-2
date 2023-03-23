INSERT INTO users (id, username, pass)
VALUES 
(1, "dave", "dave"),
(2, "dave2", "dave2"),
(3, "dave3", "dave3"),
(4, "dave4", "dave4");

INSERT INTO autocorrects (id, typo, correction, author)
VALUES 
(1, "dav", "davidinio", 3),
(2, "darv", "david", 4),
(3, "dabe", "dave3", 1),
(4, "dave2", "dave4", 2);

INSERT INTO used (id, autocorrectid, timesused, userid)
VALUES 
(1, 2, 4, 3),
(2, 3, 1, 4),
(3, 2, 4, 1),
(4, 3, 2, 1);

