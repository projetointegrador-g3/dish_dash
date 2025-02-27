import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { Produto } from "../../produtos/entities/produto.entity";


@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_blogpessoal',
            entities: [Usuario, Categoria, Produto],
            synchronize: true,
    };
  }
}