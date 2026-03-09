import PocketBase from 'pocketbase'; 
const pb = new PocketBase('http://127.0.0.1:8090');

export async function artistesSorted() { 
    const records = await pb.collection('artiste').getFullList({ sort: 'date_de_representation' }); 
    return records; 
}