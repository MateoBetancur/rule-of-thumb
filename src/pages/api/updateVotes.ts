import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../utils/firebaseConfig';

import { DataResponse } from '../../interfaces/characters.interface';

export default async function updateVotes(req: NextApiRequest, res: NextApiResponse<DataResponse<string>>) {


    try {
        await db.collection('characters').doc(req.body.id).update({
            votes: req.body.votes
        });
        res.status(200).json({
            "data": "",
            "message": "successfully updated"
        })
    } catch (error) {
        res.status(400).json({
            "data": "",
            message: `Error`
        })
    }


}
