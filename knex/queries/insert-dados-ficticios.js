const knex = require('../config/database');

const query = `INSERT INTO users (
    first_name,
    last_name,
    email,
    password_hash,
    created_at,
    salary
  )
VALUES (
    "Tanner",
    "Mayo",
    "vitae.diam@consectetueripsum.ca",
    "QLN12HIN3RL",
    "2021-07-25 22:12:26",
    50000.00
  ),
(
    "Brittany",
    "Stewart",
    "nibh.sit@nunc.edu",
    "ROM35HMM4SA",
    "2020-08-22 13:41:06",
    55000.00
  ),
(
    "Ferris",
    "Hall",
    "neque.Morbi@porttitorscelerisqueneque.edu",
    "YTU15GQR9HT",
    "2020-02-28 05:52:36",
    60000.00
  ),
(
    "Jacob",
    "Manning",
    "risus.at@sociis.edu",
    "EQS93HLI6QZ",
    "2021-04-22 06:01:30",
    65000.00
  ),
(
    "Keelie",
    "Petersen",
    "Nulla@lobortis.org",
    "ZHE87TSO6DA",
    "2021-07-10 20:51:19",
    70000.00
  ),
(
    "Benjamin",
    "Daniels",
    "nec@dolor.org",
    "CNW39GMH4NZ",
    "2021-01-30 22:33:14",
    75000.00
  ),
(
    "Aspen",
    "Cain",
    "Nullam.ut@primisinfaucibus.com",
    "ZFC58TUT0MB",
    "2020-06-12 14:52:39",
    80000.00
  ),
(
    "Oprah",
    "Reeves",
    "nisi.nibh.lacinia@mattissemper.net",
    "LYD20HWD3UN",
    "2020-03-05 13:41:49",
    85000.00
  ),
(
    "Lynn",
    "Hendricks",
    "neque.tellus.imperdiet@dolor.net",
    "CRA59DIT0TW",
    "2020-04-12 15:26:28",
    90000.00
  ),
(
    "Wayne",
    "Walters",
    "torquent.per.conubia@Utsagittislobortis.co.uk",
    "BVD19AUV2JO",
    "2020-10-04 03:36:24",
    95000.00
  ),
(
    "Shana",
    "Barnett",
    "tempus.scelerisque@lectusjustoeu.net",
    "GXF87LGA4XZ",
    "2020-01-26 04:16:58",
    100000.00
  ),
(
    "Merrill",
    "Dunn",
    "a.feugiat.tellus@CuraePhasellus.ca",
    "BQS83WCA3QM",
    "2021-05-27 20:27:02",
    105000.00
  ),
(
    "Minerva",
    "Craft",
    "ac.mattis@liberoIntegerin.ca",
    "XAX94LBA7BI",
    "2021-11-17 20:14:37",
    110000.00
  ),
(
    "Ishmael",
    "Garcia",
    "Nunc.sed@tellus.co.uk",
    "MYA25WWC2HB",
    "2020-04-15 17:51:28",
    115000.00
  ),
(
    "Xyla",
    "Rocha",
    "mi.enim.condimentum@faucibus.ca",
    "NJB51CIZ2YT",
    "2021-10-11 14:19:33",
    120000.00
  ),
(
    "Giacomo",
    "Kidd",
    "quis.diam@convallisin.com",
    "QAM99GPQ0BE",
    "2020-05-14 16:04:51",
    125000.00
  ),
(
    "Lucian",
    "Shepherd",
    "dis@Integervulputate.co.uk",
    "PKI61CTD1WE",
    "2021-02-20 06:42:36",
    130000.00
  ),
(
    "Iona",
    "Gillespie",
    "ac.facilisis@vitae.org",
    "THH68JIH4QZ",
    "2020-08-27 05:26:00",
    135000.00
  ),
(
    "Nyssa",
    "Roberson",
    "massa.Suspendisse@nisidictumaugue.co.uk",
    "VOW26KCN4CZ",
    "2021-01-11 19:18:46",
    140000.00
  ),
(
    "Lacy",
    "Guthrie",
    "purus@ullamcorper.net",
    "NGL35MWG5OL",
    "2020-03-15 04:05:58",
    145000.00
  ),
(
    "Karina",
    "Carson",
    "a.aliquet@cursusaenim.org",
    "RMZ97KTB0LP",
    "2020-11-09 01:34:20",
    150000.00
  ),
(
    "Carly",
    "Wilkinson",
    "egestas.a.dui@utcursusluctus.co.uk",
    "YUS28DJB5UR",
    "2021-05-28 19:43:17",
    155000.00
  ),
(
    "Madison",
    "Pierce",
    "arcu.eu@antelectus.edu",
    "JVZ98CGE6XW",
    "2020-09-04 19:06:55",
    160000.00
  ),
(
    "Carly",
    "Guerrero",
    "feugiat.non.lobortis@porttitorvulputate.ca",
    "HAS68KVZ2IW",
    "2021-01-26 02:40:51",
    165000.00
  ),
(
    "Eric",
    "Cash",
    "Aenean.eget@libero.ca",
    "JTY19RSK6AY",
    "2021-08-28 16:36:43",
    170000.00
  ),
(
    "Hannah",
    "Pitts",
    "dapibus.ligula.Aliquam@magnaPhasellusdolor.ca",
    "OMF54AOD3FM",
    "2021-08-28 19:44:45",
    175000.00
  ),
(
    "Gray",
    "Barnes",
    "Aenean.egestas.hendrerit@pharetranibh.edu",
    "RUY00LNZ4XD",
    "2021-02-09 12:08:06",
    180000.00
  ),
(
    "Seth",
    "Duke",
    "ante.ipsum.primis@Quisque.ca",
    "YUA24MFN1ES",
    "2020-09-27 01:28:26",
    185000.00
  ),
(
    "Leandra",
    "Ratliff",
    "Suspendisse@feugiatSednec.edu",
    "HSC55TYX0JV",
    "2020-01-25 09:46:01",
    190000.00
  ),
(
    "Jillian",
    "Lamb",
    "arcu@rutrum.org",
    "DWR34TLE3MF",
    "2020-06-07 09:55:48",
    195000.00
  ),
(
    "Baker",
    "Richards",
    "elit@Maecenasmalesuada.edu",
    "UPI22LBI7ZW",
    "2020-02-22 22:36:48",
    200000.00
  ),
(
    "Kennan",
    "Callahan",
    "tortor.dictum.eu@intempus.org",
    "GEL99BNX1UJ",
    "2021-12-03 20:48:09",
    205000.00
  ),
(
    "Hedy",
    "Kim",
    "amet@cursusinhendrerit.com",
    "NZR75UQU2MQ",
    "2020-12-27 02:47:14",
    210000.00
  ),
(
    "Dolan",
    "Pearson",
    "semper.tellus.id@fringillaporttitor.edu",
    "OIB92MNN7BL",
    "2021-04-10 08:09:00",
    215000.00
  ),
(
    "Judah",
    "Barber",
    "et.magnis@adipiscingenim.org",
    "WBV88OBH7CG",
    "2020-04-15 11:02:56",
    220000.00
  ),
(
    "Carson",
    "Goodman",
    "diam.vel@DonecfringillaDonec.ca",
    "BNX56AOS5NE",
    "2021-02-26 17:35:24",
    225000.00
  ),
(
    "Hakeem",
    "Christian",
    "ipsum@etliberoProin.edu",
    "RBH85KLZ8SA",
    "2021-12-22 08:27:53",
    230000.00
  ),
(
    "Hayfa",
    "Santiago",
    "metus.in.lorem@facilisisviverra.com",
    "QNV98TLE5ZW",
    "2021-04-11 06:57:04",
    235000.00
  ),
(
    "Alfreda",
    "Shields",
    "eu@ametultricies.co.uk",
    "PZQ95PMI2NI",
    "2020-08-14 05:27:53",
    240000.00
  ),
(
    "Ariana",
    "Chang",
    "facilisis@integersem.co.uk",
    "USQ31NGW0NR",
    "2020-02-08 00:29:41",
    245000.00
  ),
(
    "Xenos",
    "Russell",
    "euismod.et.commodo@mi.org",
    "PYR56RHK8SD",
    "2020-07-28 15:01:35",
    250000.00
  ),
(
    "Cameron",
    "Osborn",
    "aliquam@tellusimperdiet.edu",
    "IHR87NVW3YA",
    "2020-02-09 00:16:02",
    255000.00
  ),
(
    "Armando",
    "Bradley",
    "nulla.ac@ultrices.edu",
    "BLG31QKN7CD",
    "2021-02-08 12:27:09",
    260000.00
  ),
(
    "Alvin",
    "Hendrix",
    "risus@Lorem.org",
    "VZP28OFA7ZT",
    "2021-02-21 00:35:35",
    265000.00
  ),
(
    "Damian",
    "Delaney",
    "Curabitur.egestas@nec.org",
    "XUR26VDN0EA",
    "2021-08-11 10:18:57",
    270000.00
  ),
(
    "Geraldine",
    "Rosales",
    "at@posuerevulputate.co.uk",
    "EHC12WTN5MD",
    "2021-06-13 08:27:41",
    275000.00
  ),
(
    "Arden",
    "Carroll",
    "aliquet.magna.a@tinciduntvehicula.co.uk",
    "LTN26DTR1IR",
    "2021-10-02 20:08:30",
    280000.00
  ),
(
    "Jerry",
    "Lang",
    "enim@elementum.org",
    "NCE79DAK8TM",
    "2020-06-10 13:15:25",
    285000.00
  ),
(
    "Igor",
    "Mcdaniel",
    "dolor.egestas@Vivamus.co.uk",
    "IKV13JHU4SO",
    "2020-04-27 03:32:39",
    290000.00
  ),
(
    "Frances",
    "Manning",
    "faucibus@etcommodoat.co.uk",
    "OGB50JMK0UB",
    "2020-08-22 14:20:00",
    295000.00
  ),
(
    "Heather",
    "Juarez",
    "ipsum.sodales@placeratorcilacus.edu",
    "MRS55DPG0SM",
    "2020-07-29 13:06:25",
    300000.00
  ),
(
    "Alan",
    "Shannon",
    "Phasellus.dapibus.quam@adipiscingMauris.ca",
    "NYK17DBO3XQ",
    "2020-04-20 00:54:45",
    305000.00
  ),
(
    "Bethany",
    "Solis",
    "ipsum@vel.net",
    "UNH38XGR7ZO",
    "2021-10-05 19:46:43",
    310000.00
  ),
(
    "Talon",
    "Acevedo",
    "erat.etiam.vehicula@ipsumprimisvelit.edu",
    "ZXU96VAD8JZ",
    "2020-05-20 01:22:24",
    315000.00
  ),
(
    "Cairo",
    "Rich",
    "vulputate.Mauris.ut@purus.co.uk",
    "VJI70BTU7CD",
    "2020-06-23 21:57:16",
    320000.00
  ),
(
    "Meghan",
    "Gomez",
    "ipsum.nunc.id@fringillain.com",
    "DYN20EBY8RG",
    "2021-02-15 09:05:09",
    325000.00
  ),
(
    "Anastasia",
    "Herring",
    "mauris.elit.dictum@tellussemper.edu",
    "FAI75YQX7WI",
    "2020-08-27 17:45:36",
    330000.00
  ),
(
    "Ishmael",
    "Wilder",
    "cursus.purus.Nullam@dolordolor.co.uk",
    "DLZ91UEY5ZB",
    "2020-06-17 01:19:50",
    335000.00
  ),
(
    "Cleo",
    "Blair",
    "Ut@Curabitur.edu",
    "RFD57SXL5IR",
    "2021-07-11 13:51:21",
    340000.00
  ),
(
    "Sage",
    "Lott",
    "Aenean@ornare.co.uk",
    "IXL98TFE2VJ",
    "2020-11-21 19:21:16",
    345000.00
  ),
(
    "Curran",
    "Carney",
    "scelerisque.neque@rutrumurna.co.uk",
    "ADU86UHU3ME",
    "2021-05-12 17:05:16",
    350000.00
  ),
(
    "Quin",
    "Jacobson",
    "tincidunt.orci.quis@semperPretium.edu",
    "QPI86YOJ3NU",
    "2020-10-10 04:15:57",
    355000.00
  ),
(
    "Irene",
    "Summers",
    "egestas.nunc.sed@mus.edu",
    "FHB50RGU1CD",
    "2021-01-21 13:09:33",
    360000.00
  ),
(
    "Sasha",
    "Gallegos",
    "risus.donec.egestas@tristiquepharetranibh.edu",
    "FYL40PLQ4GU",
    "2020-07-06 00:12:38",
    365000.00
  ),
(
    "Herrod",
    "Bird",
    "tincidunt.pede.ac@Lorem.co.uk",
    "KUB64KMA1OV",
    "2020-04-15 07:53:24",
    370000.00
  ),
(
    "Teegan",
    "Sampson",
    "malesuada@ligulaNullam.net",
    "ESL87ZDV0YH",
    "2021-10-10 14:00:56",
    375000.00
  ),
(
    "Kylee",
    "Parsons",
    "semper.et@euismodurna.com",
    "PIJ38HBP5QY",
    "2021-11-16 04:27:41",
    380000.00
  ),
(
    "Gray",
    "Andrews",
    "egestas.blandit@interdumCurabitur.co.uk",
    "PMY45HHN3ZI",
    "2020-08-19 21:27:25",
    385000.00
  ),
(
    "Paul",
    "Shelton",
    "vehicula@Curabiturvellectus.co.uk",
    "MBE20HEJ5MA",
    "2021-04-11 04:21:52",
    390000.00
  ),
(
    "Gage",
    "Snow",
    "tincidunt.pede@acfermentumvel.net",
    "SHM24HDW5KT",
    "2021-06-02 09:02:57",
    395000.00
  ),
(
    "Edward",
    "George",
    "risus@non.net",
    "JEQ51UNN3HQ",
    "2021-07-24 00:14:18",
    400000.00
  ),
(
    "Victoria",
    "O'connor",
    "elit.dictum.eu@estMaurisvel.edu",
    "PJU21IIS3VL",
    "2021-05-13 00:24:56",
    405000.00
  ),
(
    "Calvin",
    "Fitzgerald",
    "eu@adipiscingnon.co.uk",
    "FDI25OWS4KJ",
    "2020-02-19 17:23:16",
    410000.00
  ),
(
    "Leroy",
    "Harmon",
    "Donec.tincidunt@miac.co.uk",
    "IXJ42KMF6ZA",
    "2020-09-06 20:32:25",
    415000.00
  ),
(
    "Norman",
    "Miller",
    "sit@mauris.com",
    "NOH51DYO5WE",
    "2020-02-27 15:28:00",
    420000.00
  ),
(
    "Steven",
    "King",
    "Cras.vehicula@tempusnonlacinia.org",
    "DEU91DOP8AC",
    "2020-08-04 13:10:56",
    425000.00
  ),
(
    "Ulla",
    "Simpson",
    "In@eratvolutpatNulla.com",
    "UFE65KEH1PM",
    "2021-10-03 22:28:53",
    430000.00
  ),
(
    "Todd",
    "Copeland",
    "Nunc.ac@elitrutrum.org",
    "JKY41HFT2KI",
    "2020-09-13 09:54:50",
    435000.00
  ),
(
    "Oscar",
    "Hooper",
    "tellus.faucibus@Praesenteu.edu",
    "NFI63RGM7LO",
    "2020-09-10 04:21:49",
    440000.00
  ),
(
    "Byron",
    "Dejesus",
    "Ut.nec@vivamusnibh.org",
    "IFD71IQW0FV",
    "2021-11-13 11:36:52",
    445000.00
  ),
(
    "Elvis",
    "Craig",
    "in@malesuadaaugueut.edu",
    "OFJ41ORO4SV",
    "2021-03-12 05:23:05",
    450000.00
  ),
(
    "Craig",
    "Hopper",
    "nisl.nulla@Praesentluctus.co.uk",
    "AEZ54GPF2VX",
    "2020-07-14 02:15:19",
    455000.00
  ),
(
    "Heidi",
    "Blanchard",
    "mauris.morbi.non@sociisnatoquepenatibus.co.uk",
    "IDU43OQW4YC",
    "2020-09-10 17:43:58",
    460000.00
  ),
(
    "Xavier",
    "Medina",
    "mattis.Integer.eu@iaculislobortis.co.uk",
    "ATC92BQY4JY",
    "2021-05-02 11:26:12",
    465000.00
  ),
(
    "Patrick",
    "Goodman",
    "arcu.vel@Integer.ca",
    "DUL69GBQ8ZM",
    "2020-02-15 06:41:32",
    470000.00
  ),
(
    "Pamela",
    "Miranda",
    "enim.non@urnaVivamusmalesuada.org",
    "JLR96WTQ5FA",
    "2020-09-01 20:00:09",
    475000.00
  ),
(
    "Willa",
    "Fitzgerald",
    "at@Donec.ca",
    "FPQ63EEW3HF",
    "2020-08-17 06:53:12",
    480000.00
  ),
(
    "Hedy",
    "Daniel",
    "velit.justo.nec@interdumCurabitur.co.uk",
    "VCX59IHL4QU",
    "2021-05-25 12:41:19",
    485000.00
  ),
(
    "Marvin",
    "Gonzales",
    "mi@Aliquam.ca",
    "DZF95ZGS3LA",
    "2020-07-28 18:11:00",
    490000.00
  ),
(
    "Nero",
    "Burt",
    "a@Mauris.net",
    "HLW95ZYX4VD",
    "2021-01-07 14:21:41",
    495000.00
  ),
(
    "Alexis",
    "Henry",
    "tincidunt.neque.vitae@laciniaorci.org",
    "GYS24KOZ8CN",
    "2021-02-11 05:52:39",
    500000.00
  ),
(
    "Steven",
    "Austin",
    "dolor@id.co.uk",
    "OKH46KVD1WM",
    "2021-05-26 02:37:38",
    505000.00
  ),
(
    "Rogan",
    "Battle",
    "mauris@ornareelitornare.ca",
    "JOA91BPA3MT",
    "2020-12-10 11:13:00",
    510000.00
  ),
(
    "Caleb",
    "Schwartz",
    "fermentum@odio.co.uk",
    "QRZ58GDW3IZ",
    "2021-10-07 18:37:25",
    515000.00
  ),
(
    "Odessa",
    "Paul",
    "Phasellus.dolor.elit@diamPellentesquehabitant.ca",
    "JVU96TIQ3ZM",
    "2021-05-06 12:33:14",
    520000.00
  ),
(
    "Graham",
    "Velasquez",
    "ipsum.primis@dis.ca",
    "ICZ37GMP7DU",
    "2020-08-11 19:57:49",
    525000.00
  ),
(
    "Allistair",
    "Randall",
    "id.nunc.interdum@Quisque.com",
    "BDV92DFK1NQ",
    "2021-06-20 09:05:33",
    530000.00
  ),
(
    "Lewis",
    "Vargas",
    "Integer.vulputate@Sednec.co.uk",
    "DUA12WGV0YS",
    "2021-09-04 05:28:24",
    535000.00
  ),
(
    "Fulton",
    "Roth",
    "eget.ipsum.suspendisse@feugiat.edu",
    "WYN79SQR2MU",
    "2020-07-13 13:27:53",
    540000.00
  ),
(
    "Joel",
    "Mercado",
    "at@urnaconvalliserat.edu",
    "WVR42SGP3VR",
    "2021-07-26 20:05:23",
    545000.00
  ),
(
    "Ferdinand",
    "Hardy",
    "eget.nisi@ac.co.uk",
    "ZXJ82KJY3QN",
    "2021-04-20 05:09:02",
    550000.00
  ),
(
    "Zephania",
    "Horne",
    "Nullam@sem.org",
    "AVK78REW0MG",
    "2021-10-11 02:54:27",
    555000.00
  ),
(
    "Ishmael",
    "Wallace",
    "Nullam@euneque.com",
    "ISQ30ULJ8IW",
    "2020-08-09 16:52:12",
    560000.00
  ),
(
    "Alec",
    "Larsen",
    "Suspendisse.tristique@loremeget.co.uk",
    "EMG82MGE5IH",
    "2021-07-08 01:20:46",
    565000.00
  ),
(
    "Alika",
    "Watts",
    "egestas@commodoat.co.uk",
    "PMZ20WBX4XQ",
    "2020-12-27 14:21:33",
    570000.00
);`;

knex.raw(query)
  .then(res => console.log(res))
  .catch(e => console.log(e.message))
  .finally(() => knex.destroy());
