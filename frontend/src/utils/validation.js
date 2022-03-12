// L O G   I N   V A L I D A T O R S
export const validateLoginUsername = (username, email) => {
    if (!username) return 'Please provide a Username or Email.';

    if (!email) return 'Please provide a Username or Email.';
};

export const validateLoginPassword = (password) => {
    if (!password) return `Please provide a valid Password`;
};

// S I G N   U P   V A L I D A T O R S
export const validateFirstName = (firstName) => {
    if (!firstName) return 'Please provide a First Name.';

    if (firstName.length < 4 || firstName.lenght > 50) return 'First Name should be between 4 and 50 characters long';
    return '';
};

export const validateLastName = (lastName) => {
    if (!lastName) return 'Please provide a Last Name.';

    if (lastName.length < 4 || lastName.lenght > 50) return 'Last Name should be between 4 and 50 characters long';
    return '';
};

export const validateUsername = (username) => {
    if (!username) return 'Please provide a username.';

    if (username.includes('@')) return 'Username cannot be an email.';

    if (username.length < 4 || username.lenght > 30) return 'Email should be between 4 and 50 characters long';
    return '';
};

export const validateEmail = (email) => {
    if (!email) return 'Please provide an email.';

    if (!email.includes('@')) return 'Please provide a valid email.';
};

export const validatePassword = (password) => {
    if (!password) return `Password must contain at least 1 lowercase letter, uppercase letter, number, and special character(i.e. "!@#$%^&*"`;
};

export const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) return `Confirm Password doesn't match Password.`;
};


//  C R E A T E   P L A C E   V A L I D A T O R S
export const validateTitle = (title) => {
    if (!title) return 'Please provide an Title.';

    if (title.lenght > 255) return 'Title should be less than 255 characters';
    return '';
};

export const validateAddress = (address) => {
    if (!address) return 'Please provide an Address.';

    if (address.lenght > 255) return 'Address should be less than 255 characters';
    return '';
};

export const validateCity = (city) => {
    if (!city) return 'Please provide a City.';

    if (city.lenght > 85) return 'City should be less than 85 characters';
    return '';
};

export const validateState = (state) => {
    if (!state) return 'Please provide a State.';

    if (state.length > 60) return 'State should be less than 60 characters';
    return '';
};

export const validateCountry = (country) => {
    if (!country) return 'Please provide a Country.';

    if (country.length > 60) return 'Country should be less than 60 characters';
};

export const validateZipcode = (zipcode) => {
    if (!zipcode) return 'Please provide a Zipcode.';

    if (zipcode < 0) return `Zipcode can't be a negative numbers.`;

    if (zipcode.length !== 5) return 'Zipcode must have a length of 5 numbers.';

};

export const validatePrice = (price) => {
    if (!price) return `Please provide the Price.`;

    if (price < 0) return `Price can't be negative`;
};

export const validateRating = (rating) => {
    if (!rating) return `Please provide a rating`;

    if (rating < 0 || rating > 5) return `Please provide a rating between 0 and 5.`;
};
