const MENTEE_URL = 'https://ga5f5e6db3409ad-db202112171830.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/match/match' 
const MENTOR_URL = 'https://ga5f5e6db3409ad-db202112171830.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/mentor/get-mentor-information'

export const getMentees = async (email) => {
    try {
        const response = await fetch(
            `${MENTEE_URL}?email=${email.toLowerCase().trim()}`
        );
        const body = await response.json();
        console.log(body)
        return body.items;
    } catch (err) {
        return undefined;
    }
};

export const getMentors = async (email) => {
    try {
        const response = await fetch(
            `${MENTOR_URL}`
        );
        const body = await response.json();
        console.log(body)
        return body.items;
    } catch (err) {
        return undefined;
    }
};