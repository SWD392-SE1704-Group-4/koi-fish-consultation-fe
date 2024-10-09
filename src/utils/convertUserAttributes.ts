// Hàm để chuyển đổi mảng UserAttributes thành object user
export function convertUserAttributes(attributes) {
    const user = {
        sub: '',
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        address: '',
        birthday: '',
        gender: '',
        phone: '',
        picture: ''
    };

    attributes.forEach(attr => {
        switch (attr.Name) {
            case 'sub':
                user.sub = attr.Value;
                break;
            case 'email':
                user.email = attr.Value;
                break;
            case 'address':
                user.address = attr.Value;
                break;
            case 'birthdate':
                user.birthday = attr.Value;
                break;
            case 'gender':
                user.gender = attr.Value;
                break;
            case 'phone_number':
                user.phone = attr.Value;
                break;
            case 'picture':
                user.picture = process.env.REACT_APP_AWS_CLOUDFRONT_URL + attr.Value;
                break;
            case 'given_name':
                user.lastname = attr.Value;
                break;
            case 'family_name':
                user.firstname = attr.Value;
                break;
            default:
                break;
        }
    });

    user.username = user.email.split('@')[0];

    // const nameParts = user.username.split('.');
    // user.firstname = nameParts[0] || '';
    // user.lastname = nameParts[1] || '';

    return user;
}