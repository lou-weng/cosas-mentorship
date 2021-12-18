const MENTEE_URL = "http://140.238.139.88:9087/mentees"

export const getMentees = async (email) => {
    try {
        const response = await fetch(
            `${MENTEE_URL}?email=${email}`
        );
        const body = await response.json();
        console.log(body)
        return body;
    } catch (err) {
        return undefined;
    }
};