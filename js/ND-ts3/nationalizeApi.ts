export async function getNationality(name: string): Promise<string[]> {
    try {
        const response = await fetch(`https://api.nationalize.io?name=${name}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        if (!data.country) {
            return ['Informacija nerasta.'];
        }
        const countries = data.country.map((country: { country_id: string; probability: number }) => {
            return `${country.country_id} (${(country.probability * 100).toFixed(2)}%)`;
        });
        return countries;
    } catch (error) {
        console.error('Error fetching data:', error);
        return ['Informacija nerasta.'];
    }
}