CREATE DATABASE launch_school_hours;
\c launch_school_hours

CREATE TABLE js101(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO js101 (hours) (190), (149), (307), (113), (102), (165), (78);

    -- this.JS109 = { hours: [190, 149, 307, 113, 102, 165, 78] };
    -- this.JS129 = { hours: [115, 175, 85, 131, 63, 87, 95, 90] };
    -- this.JS139 = { hours: [55, 80, 155, 69, 60, 36, 50, 58] };
    -- this.LS171 = { hours: [30, 26, 30, 38, 17, 35, 37, 9] };
    -- this.JS175 = { hours: [30, 73, 90, 58, 24, 76, 35, 52] };
    -- this.LS181 = { hours: [83, 49, 48, 58, 25, 27, 51, 51] };
    -- this.JS185 = { hours: [8, 10, 15, 15, 7, 12, 10, 16] };
    -- this.LS202 = { hours: [78, 55, 160, 46, 92, 38] };
    -- this.LS216 = { hours: [75, 66, 60, 105, 52, 89, 77, 73] };
    -- this.JS239 = { hours: [212, 245, 91, 187, 187, 192, 172, 136] };

CREATE TABLE js120(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO js120 (hours) (115), (175), (85), (131), (63), (87), (95), (90);

CREATE TABLE js130(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO js130 (hours) (55), (80), (155), (69), (60), (36), (50), (58);

CREATE TABLE ls170(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO ls170 (hours) (30), (26), (30), (38), (17), (35), (37), (9);

CREATE TABLE js175(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO js175 (hours) (30), (73), (90), (58), (24), (76), (35), (52);

CREATE TABLE ls180(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO ls180 (hours) (83), (49), (48), (58), (25), (27), (51), (51);

CREATE TABLE js185(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO js185 (hours) (8), (10), (15), (15), (7), (12), (10), (16)

CREATE TABLE ls202(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO ls202 (hours) (78), (55), (160), (46), (92), (38);

CREATE TABLE ls215(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO ls215 (hours) (75), (66), (60), (105), (52), (89), (77), (73);

CREATE TABLE js230(
  id IDENTITY PRIMARY KEY,
  hours integer NOT NULL
);

INSERT INTO ls230 (hours) (212), (245), (91), (187), (187), (192), (172), (13);

CREATE TABLE javascript_track(
  id IDENTITY PRIMARY KEY,
  js101 integer REFERENCES js101 (id),
  js120 integer REFERENCES js120 (id),
  js130 integer REFERENCES js130 (id),
  ls170 integer REFERENCES ls170 (id),
  js175 integer REFERENCES js175 (id),
  ls180 integer REFERENCES ls180 (id),
  js185 integer REFERENCES js185 (id),
  ls202 integer REFERENCES ls202 (id),
  ls215 integer REFERENCES ls215 (id),
  js230 integer REFERENCES js230 (id),
);

