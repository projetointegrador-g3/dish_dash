import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";

@Module({
    imports:[TypeOrmModule.forFeature([Categoria])],
    controllers:[CategoriaService],
    providers:[CategoriaService],
    exports:[TypeOrmModule]
})
export class CategoriaModule{}