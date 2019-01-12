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
-- Name: employee_table; Type: TABLE; Schema: public; Owner: ashleysouvannaraj
--

CREATE TABLE public.employee_table (
    id integer NOT NULL,
    name character varying,
    email character varying,
    password character varying,
    phone integer,
    owner_id integer
);


ALTER TABLE public.employee_table OWNER TO ashleysouvannaraj;

--
-- Name: employee_table_id_seq; Type: SEQUENCE; Schema: public; Owner: ashleysouvannaraj
--

CREATE SEQUENCE public.employee_table_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_table_id_seq OWNER TO ashleysouvannaraj;

--
-- Name: employee_table_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ashleysouvannaraj
--

ALTER SEQUENCE public.employee_table_id_seq OWNED BY public.employee_table.id;


--
-- Name: owner; Type: TABLE; Schema: public; Owner: ashleysouvannaraj
--

CREATE TABLE public.owner (
    id integer NOT NULL,
    name character varying,
    email character varying,
    password character varying,
    phone integer
);


ALTER TABLE public.owner OWNER TO ashleysouvannaraj;

--
-- Name: owner_id_seq; Type: SEQUENCE; Schema: public; Owner: ashleysouvannaraj
--

CREATE SEQUENCE public.owner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.owner_id_seq OWNER TO ashleysouvannaraj;

--
-- Name: owner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ashleysouvannaraj
--

ALTER SEQUENCE public.owner_id_seq OWNED BY public.owner.id;


--
-- Name: schedule; Type: TABLE; Schema: public; Owner: ashleysouvannaraj
--

CREATE TABLE public.schedule (
    employee_id integer,
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
-- Name: employee_table id; Type: DEFAULT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.employee_table ALTER COLUMN id SET DEFAULT nextval('public.employee_table_id_seq'::regclass);


--
-- Name: owner id; Type: DEFAULT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.owner ALTER COLUMN id SET DEFAULT nextval('public.owner_id_seq'::regclass);


--
-- Data for Name: employee_table; Type: TABLE DATA; Schema: public; Owner: ashleysouvannaraj
--

COPY public.employee_table (id, name, email, password, phone, owner_id) FROM stdin;
\.


--
-- Data for Name: owner; Type: TABLE DATA; Schema: public; Owner: ashleysouvannaraj
--

COPY public.owner (id, name, email, password, phone) FROM stdin;
\.


--
-- Data for Name: schedule; Type: TABLE DATA; Schema: public; Owner: ashleysouvannaraj
--

COPY public.schedule (employee_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday) FROM stdin;
\.


--
-- Name: employee_table_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ashleysouvannaraj
--

SELECT pg_catalog.setval('public.employee_table_id_seq', 1, false);


--
-- Name: owner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ashleysouvannaraj
--

SELECT pg_catalog.setval('public.owner_id_seq', 1, false);


--
-- Name: employee_table employee_table_pkey; Type: CONSTRAINT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.employee_table
    ADD CONSTRAINT employee_table_pkey PRIMARY KEY (id);


--
-- Name: owner owner_pkey; Type: CONSTRAINT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.owner
    ADD CONSTRAINT owner_pkey PRIMARY KEY (id);


--
-- Name: employee_table employee_table_owner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.employee_table
    ADD CONSTRAINT employee_table_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.owner(id);


--
-- Name: schedule schedule_employee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ashleysouvannaraj
--

ALTER TABLE ONLY public.schedule
    ADD CONSTRAINT schedule_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.employee_table(id);


--
-- PostgreSQL database dump complete
--

