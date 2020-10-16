import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import * as Yup from 'yup';

import orphanageView from '../views/OrphanagesView'

export default {
    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        return res.json(orphanageView.renderMany(orphanages));
    },

    async show(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanage = await orphanagesRepository.findOneOrFail(req.params.id, {
            relations: ['images']
        });

        return res.json(orphanageView.render(orphanage));
    },

    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body;
    
        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = req.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename };
        });

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required('O campo nome é obrigatório.'),
            latitude: Yup.number().required('O campo latitude é obrigatório.'),
            longitude: Yup.number().required('O campo longitude é obrigatório.'),
            about: Yup.string().required('O campo informações é obrigatório.').max(300, 'O campo informações pode ter no máximo 300 caracteres.'),
            instructions: Yup.string().required('O campo instruções é obrigatório.'),
            opening_hours: Yup.string().required('O campo horas de funcionamento é obrigatório.'),
            open_on_weekends: Yup.boolean().required('O campo aberto aos finais de semana é obrigatório.'),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required('O campo caminho da imagem é obrigatório') 
                })
            )
        });

        await schema.validate(data, { 
            abortEarly: false
        });
        
        const orphanage = await orphanagesRepository.save(orphanagesRepository.create(data));

        return res.status(201).json(orphanage);
    }
};