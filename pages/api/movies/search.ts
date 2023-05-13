import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { filter } = req.query;

    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        await serverAuth(req, res);

        const movies = await prismadb.movie.findMany({
            where: {
                title: {
                    contains: filter?.toString(),
                    mode: 'insensitive'
                }
            }
        });
        return res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}