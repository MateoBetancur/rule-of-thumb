import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../utils/firebaseConfig';

import { DataResponse } from '../../interfaces/characters.interface';

export default async function createCharacter(req: NextApiRequest, res: NextApiResponse<DataResponse<string>>) {
    console.log(req.body);
    try {
        const { id } = await db.collection('characters').add({
            ...req.body,
            lastUpdated: new Date().toISOString(),
        });
        if (id) {
            res.status(200).json({
                "data": id,
                "message": "successfully created"
            })
        } else {
            res.status(500).json({
                "data": "",
                message: `Error`
            })
        }
    } catch (error) {
        res.status(400).json({
            "data": "",
            message: `Error`
        })
    }




}
