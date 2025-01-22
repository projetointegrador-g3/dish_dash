import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produtos/entities/produto.entity';
import { CategoriaModule } from './categorias/categoria.module';
import { UsuarioModule } from './usuarios/usuario.module';
import { ProdutoModule } from './produtos/produto.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Categoria } from './categorias/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_dishdash',
      entities: [Usuario, Categoria, Produto],
      synchronize: true,
    }),
    UsuarioModule,
    CategoriaModule,
    ProdutoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
