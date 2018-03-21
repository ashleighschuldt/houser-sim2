-- INSERT INTO property (
--     user_id, 
--     property_name, 
--     description, 
--     address, 
--     city, 
--     state, 
--     zip, 
--     image, 
--     loan_amount, 
--     monthly_mortgage, 
--     desired_rent)
-- VALUES (
--     1,
--     'Saratoga Springs Rambler',
--     '3800 square foot rambler, 6 bedroom, 3 bathroom. Finished basement with walkout. 3 car garage with RV Parking',
--     '2242 S Browning Dr',
--     'Saratoga Springs',
--     'Utah',
--     '84045',
--     'https://www.marriedwithmoney.com/wp-content/uploads/2017/06/house.jpeg',
--     '435000.00',
--     '1902.00',
--     '2200.00')

    INSERT INTO property (
    user_id, 
    property_name, 
    description, 
    address, 
    city, 
    state, 
    zip, 
    image, 
    loan_amount, 
    monthly_mortgage, 
    desired_rent)
VALUES (
    ${user_id},
    ${name},
    ${description},
    ${address},
    ${city},
    ${state},
    ${zip},
    ${image},
    ${loan_amount},
    ${monthly_mortgage},
    ${desired_rent})