-- fleetwise_schema.vehicle_master definition

-- Drop table

-- DROP TABLE fleetwise_schema.vehicle_master;

CREATE TABLE fleetwise_schema.vehicle_master (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
    gadi_number varchar NOT NULL -- This Column Contain Vehicle Number
    chassis_no varchar NOT NULL,
    engine_no varchar NOT NULL,
    current_owner_name varchar NOT NULL,
    mobile_no varchar NOT NULL,
    vin_no varchar NULL,
    fitness_valid_up_to varchar NOT NULL,
    model_name varchar NULL,
    maker_name varchar NULL,
    vehicle_type varchar NULL,
    fuel_type varchar NULL,
    registration_date varchar NOT NULL,
    tax_valid_up_to varchar NOT NULL,
    emission_norm varchar NULL,
    financier varchar NULL,
    is_active varchar NOT NULL,
    create_at timestamp NOT NULL,
    updated_at timestamp NULL,
    created_by varchar NOT NULL,
    updated_by varchar NULL	
);
COMMENT ON TABLE fleetwise_schema.vehicle_master IS 'This Table Contain Vehicle Master Data';

-- Column comments

COMMENT ON COLUMN fleetwise_schema.vehicle_master.gadi_number IS 'This Column Contain Vehicle Number';

-- Permissions

ALTER TABLE fleetwise_schema.vehicle_master OWNER TO postgres;
GRANT ALL ON TABLE fleetwise_schema.vehicle_master TO postgres;