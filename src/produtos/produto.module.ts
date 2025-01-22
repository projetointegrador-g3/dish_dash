import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { CategoriaModule } from "../categorias/categoria.module";

@Module({
    imports:[TypeOrmModule.forFeature([Produto]) CategoriaModule],
    controllers: [ProdutoController],
    providers: [ProdutoService],
    exports: [TypeOrmModule, ],
})

export class ProdutoModule {}