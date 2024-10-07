export const formatPhoneNumber = (phoneNumber: string): string => {
    if (phoneNumber.startsWith('0')) {
        return '+84' + phoneNumber.substring(1);
    }
    return phoneNumber; 
};