--
-- PostgreSQL database dump
--

-- Dumped from database version 11.0
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: schedule; Type: TABLE; Schema: public; Owner: ashleysouvannaraj
--

CREATE TABLE public.schedule (
    id integer,
    monday time without time zone,
    tuesday time without time zone,
    wednesday time without time zone,
    thursday time without time zone,
    friday time without time zone,
    saturday time without time zone,
    sunday time without time zone
);


ALTER TABLE public.schedule OWNER TO ashleysouvannaraj;

--
-- Name: user_id; Type: SEQUENCE; Schema: public; Owner: ashleysouvannaraj
--

CREATE SEQUENCE public.user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id OWNER TO ashleysouvannaraj;

--
-- Name: users; Type: TABLE; Schema: public; Owner: ashleysouvannaraj
--

CREATE TABLE public.users (
    id integer NOT NULL,
    role character varying,
    name character varying,
    email character varying,
    password character varying,
    phone integer
);


ALTER TABLE public.users OWNER TO ashleysouvannaraj;

--
-- Name: users_id; Type: SEQUENCE; Schema: public; Owner: ashleysouvannaraj
--

CREATE SEQUENCE public.users_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id OWNER TO ashleysouvannaraj;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ashleysouvannaraj
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO ashleysouvannaraj;

--
-- Name: users_id_seq1; Type: SEQUENCE; Schema: public; Owner: ashleysouvannaraj
--

CREATE SEQUENCE public.users_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq1 OWNER TO ashleysouvannaraj;

--
-- Name: users_id_seq1; Type: SEQUENCE OWNED BY; Schema: public; Owner: ashleysouvannaraj
--

ALTER SEQUENCE public.users_id_seq1 OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq1'::regclass);


--
-- Data for Name: schedule; Type: TABLE DATA; Schema: public; Owner: ashleysouvannaraj
--

COPY public.schedule (id, monday, tuesday, wednesday, thursday, friday, saturday, sunday) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ashleysouvannaraj
--

COPY public.users (id, role, name, email, password, phone) FROM stdin;
\.


--
-- Name: user_id; Type: SEQUENCE SET; Schema: public; Owner: ashleysouvannaraj
--

SELECT pg_catalog.setval('public.user_id', 1, false);


--
-- Name: users_id; Type: SEQUENCE SET; Schema: public; Owner: ashleysouvannaraj
--

SELECT pg_catalog.setval('public.users_id', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ashleysouvannaraj
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: users_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: ashleysouvannaraj
--

SELECT pg_catalog.setval('public.users_id_seq1', 1, false);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: schedule schedule_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.schedule
    ADD CONSTRAINT schedule_id_fkey FOREIGN KEY (id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

