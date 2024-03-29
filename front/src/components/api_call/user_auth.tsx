import axios from 'axios';


export default async function handler(req: any, res: any)
{
    const requestData = req.query;

    try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}user/auth`, requestData);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}