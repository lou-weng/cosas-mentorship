const MENTEE_URL = "http://140.238.139.88:9087/mentees?email=ant.bondarev@gmail.com"

export const getMentees = async (email) => {
    try {
        const response = await fetch(
            // `${MENTEE_URL}?email=${email}`
            MENTEE_URL
        );
        const body = await response.json();
        console.log(body)
        return body;
    } catch (err) {
        return undefined;
    }
};