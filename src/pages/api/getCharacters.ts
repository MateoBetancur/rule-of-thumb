import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../utils/firebaseConfig';

import { DataResponse, Character } from '../../interfaces/characters.interface';

export default async function getCharacters(req: NextApiRequest, res: NextApiResponse<DataResponse<Character[]>>) {
    try {
        const response = await db.collection('characters').get();
        const data: Character[] = response.docs.map((item) => {
            return { ...item.data(), id: item.id } as Character
        });

        if (!data.length) {
            res.status(404).json({
                "data": [],
                message: `Not found `
            })
        } else {
            res.status(200).json({
                "data": data,
                "message": "successful"
            })
        }
    } catch (error) {
        res.status(400).json({
            "data": [],
            message: `Error`
        })
    }



}
