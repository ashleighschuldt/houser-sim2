CREATE TABLE property (
    id serial primary key,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES user_table(id),
    property_name varchar,
    description varchar,
    address varchar,
    city varchar,
    state varchar,
    zip varchar,
    image varchar,
    loan_amount numeric,
    monthly_mortgage numeric,
    desired_rent numeric
)