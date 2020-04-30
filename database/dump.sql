--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
226	101	2	2500
227	101	3	2500
228	102	2	2500
229	102	2	2500
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
102	2020-04-29 16:56:38.728325-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	43	Jarvis	89	123	2020-03-15 17:02:33.172443-07
2	43	Jarvis	89	123	2020-03-15 17:12:51.971641-07
39	83	ff	ff	ff	2020-04-23 00:55:01.608217-07
40	86	Peter Parker	3843848344	Bronx	2020-04-23 22:26:09.470388-07
41	91	Natasha	1351656165165	New York	2020-04-27 15:08:28.674427-07
42	96	PandaPool	565611516516516	Marvel hq	2020-04-28 20:30:11.924493-07
43	97	Zechs	4165165165	sdffffffffffd	2020-04-28 21:13:42.30674-07
44	98	esf	3333333333	rerw	2020-04-28 21:14:28.139631-07
45	101	name	13131536	ok	2020-04-29 16:55:43.986548-07
46	102	name	2222222222222	buy more	2020-04-29 16:56:53.695047-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Pikachu & Eevee Summer Days Plush	2999	/images/pikachu/seasonal_celeb.png	Seasonal Celebrations: Pikachu & Eevee Summer Days Plush - 12 In.	Set sail for summer fun with Pikachu and Eevee riding a smooth Wailord pool float - they're all ready for sunny days! Wailord is weighted with microbeads to keep this excursion on an even keel, and Pikachu and Eevee have their sunglasses and sun hat at the ready.
2	Detective Pikachu	2500	/images/pikachu/detective.png	POKEMON Detective Pikachu Wrinkled-Face Plush - 8 In.	Detective Pikachu has concerns - possibly even doubts - and he's feeling it right in the jellies! Based on a fan-favorite scene from the POKEMON Detective Pikachu live-action movie, this lovably perturbed plush is ready to furrow its brow and keep you company as you uncover plots, clarify mysteries, or at least drink up the last of your coffee.
3	Eevee Cape Pikachu	2500	/images/pikachu/eevee.png	Eevee Cape Pikachu Poke Plush - 9 In.	Two great Pokemon combined in one adorable plush! Pikachu is wearing a cape that looks like Eevee, complete with a puffy tail and supersoft ruff. It stands up cute and tall as it dreams of adventure!
4	Charizard Costume Pikachu	2500	/images/pikachu/charizard.png	Charizard Poke Maniac Costume Pikachu Poke Plush - 8 In.	As seen in the Pokemon video games, Poke Maniacs are Trainers who love dressing up as intimidating Pokemon and other creatures. This fantastic plush boasts big claws and a removable hood - revealing Pikachu inside! Its tail flame combined with stompy claws and feet make this a plush to play with, roar with, and enjoy!
5	Snorlax Costume Pikachu	2500	/images/pikachu/snorlax.png	Snorlax Poke Maniac Costume Pikachu Poke Plush - 8 In.	As seen in the Pokemon video games, Poke Maniacs are Trainers who love dressing up as intimidating Pokemon and other creatures. Although this Pikachu plush is in costume as Snorlax, it's not sleepy at all! With a tough look, it seems more than ready to jump into battle!
6	Tyranitar Costume Pikachu	2500	/images/pikachu/tyranitar.png	Tyranitar Poke Maniac Costume Pikachu Poke Plush - 8.5 In.	As seen in the Pokemon video games, Poke Maniacs are Trainers who love dressing up as intimidating Pokemon and other creatures. A Tyranitar costume is a dream for a Poke Maniac - and lots of fun for Pikachu! Embroidered eyes and big claws look ready to tear it up!
7	Hydreigon Costume Pikachu	2500	/images/pikachu/hydreigon.png	Hydreigon Poke Maniac Costume Pikachu Poke Plush - 8.5 In.	As seen in the Pokemon video games, Poke Maniacs are Trainers who love dressing up as intimidating Pokemon and other creatures...and this Pikachu in a three-headed Hydreigon costume is a sight to see! A removable hood, embroidered details, plus winglets on the costume's suspenders - this plush has it all!
8	Mega Audino Cape Pikachu	2000	/images/pikachu/Mega_audino.png	Mega Audino Cape Pikachu Poke Plush - 8.5 In.	Cute as a button, this Pikachu is all dressed up in its Mega Audino costume! With lots of curliques and swirls and a pink-lined cape, this costume is round and sweet, with bonus swirls on the ears and a puffball tail. Supercute costume, Pikachu! A Pokemon Center original design.
9	Boss Giovanni Costume Pikachu	2000	/images/pikachu/team _rocket_boss.png	Boss Costume Collection: Team Rocket Giovanni Costume Pikachu Poke Plush - 9 In.	That evil grin, that rainbow "R" logo - looks familiar! Yes, this Pikachu plush is all dressed up as Team Rocket leader Giovanni, the original Pokemon villain from Kanto who made a memorable reappearance in the Alola region! Team Rocket is going to see its plans come together someday, so watch out! This plush makes a great gift for fans of the original Pokemon games and newer games, too!
10	Ditto As Pikachu	2000	/images/pikachu/ditto.png	Ditto As Pikachu Plush - 7 In.	This Ditto plush is pretending to be Pikachu! With embroidered mouth and eyes, this is some super-sweet plush!
11	Ditto Squishy Plush	4000	/images/pikachu/ditto-orig.png	Ditto Squishy Plush - 14.5 In	Boasting a ton of squishy squooshiness, this Ditto Squishy Plush is ready to hug! With classic tiny eyes and Ditto's cheerful look, this would be the only plush you need - if only it would use Transform! Like all the Squishy Plush from Pokemon Center, this plush uses heavier, denser plush material for an added level of squishiness!
12	Mimikyu Poke Plush	4500	/images/pikachu/mimikyu.png	Mimikyu Poke Plush - 22.5 In.	Mimikyu's a lonely Pokemon that just wants to be loved, and this jumbo-size Poke Plush version is no exception! A bendable neck lets you display Mimikyu in different poses - keep it upright in its Disguised Form, or tilt its head over to showcase its Busted Form. Either way, Mimikyu is just happy to have a friend...won't you give it a hug?
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 229, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 102, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 46, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

