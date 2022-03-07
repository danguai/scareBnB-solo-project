
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
