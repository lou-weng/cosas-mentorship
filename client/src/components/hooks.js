const MENTEE_URL = "127.0.0.1:8080/mentees"

export const getMentees = async (email) => {
    try {
        const response = await fetch(
            "/mentees?email=aarushirgupta%40gmail.com"
        );
        const body = await response.json();
        console.log(body)
        return body;
    } catch (err) {
        return undefined;
    }
};