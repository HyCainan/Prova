import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoService  from "../Services/LeilaoServices";

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.id !== "" && dados.name !== ""){
            const newLeilao = await LeilaoService.createLeilao(dados)
            res.status(200).json({
                status: 'ok',
                newLeilao: newLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados'
            })
        }

    }

    async listLeilao(req: Request, res: Response){
        const Leilao = LeilaoService.listLeilao();

        res.status(200).json({
            status: 'ok',
            leilao: Leilao
        })
    }
    

    async updateLeilao(req: Request, res: Response){
        const leilao = LeilaoService.updateLeilao = req.body;
        const dados: Prisma.LeilaoUpdateInput = req.body;


        if(dados.id !== "" && dados.name !== ""){
            const updatedLeilao = await LeilaoService.updateLeilao(leilao.id, dados)
            res.status(200).json({
                status: 'ok',
                updatedLeilao: updatedLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados'
            })
        }
    }

    async deleteLeilao(req: Request, res: Response){
        const leilao = LeilaoService.deleteLeilao = req.body;

        if(leilao.id !== ""){
            const deletedLeilao = await LeilaoService.deleteLeilao(leilao.id)
            res.status(200).json({
                status: 'ok',
                deletedLeilao: deletedLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'inserir os dados corretamente'
            })

        }
    }
}

export default new LeilaoController();