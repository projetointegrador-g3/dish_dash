import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService{
    constructor(
        @InjectRepository(Produto)
        private pordutoReposiroy: Repository<Produto>
    ){}

    async findAll(): Promise<Produto[]>{
        return this.pordutoReposiroy.find()
    }


   async findById(id: number): Promise<Produto>{
     const produto = await this.pordutoReposiroy.findOne({
            where: {
                id
            }
        })

        if(!produto)
            throw new HttpException(' Produto não encontrado!', HttpStatus.NOT_FOUND)
        
        return produto;
    }

    async findByName(nome: string): Promise<Produto[]>{
        const produto = await  this.pordutoReposiroy.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        })
        if (produto.length === 0) {  
            throw new HttpException(`⚠️ Nenhum resultado encontrado com o ${nome}`, HttpStatus.NOT_FOUND);  // Trate o erro conforme necessário  
            }  
        
        return produto;
    }


    async create(produto: Produto): Promise<Produto>{

        return await this.pordutoReposiroy.save(produto)
    }

    async update(produto: Produto): Promise<Produto>{

        await this.findById(produto.id)

        return await this.pordutoReposiroy.save(produto)
    }

    
    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id)

        return await this.pordutoReposiroy.delete(id)
        }
}