import Cookies from 'js-cookie';

export function GetRefreshToken(): string | undefined {
    return Cookies.get('REFRESH_TOKEN');
}

export function GetAccessToken(): string | undefined {
    return Cookies.get('ACCESS_TOKEN');
}

export function SetRefreshToken(token: string): void {
    Cookies.set('REFRESH_TOKEN', token, { secure: true, sameSite: 'Strict' });
}

export function SetAccessToken(token: string): void {
    Cookies.set('ACCESS_TOKEN', token, { secure: true, sameSite: 'Strict' });
}

export function RemoveRefreshToken(): void {
    Cookies.remove('REFRESH_TOKEN');
}

export function RemoveAccessToken(): void {
    Cookies.remove('ACCESS_TOKEN');
}
