import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produtos/entities/produto.entity';
import { CategoriaModule } from './categorias/categoria.module';
import { UsuarioModule } from './usuarios/usuario.module';
import { ProdutoModule } from './produtos/produto.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Categoria } from './categorias/entities/categoria.entity';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
        useClass: ProdService,
          imports: [ConfigModule],
      }),
    UsuarioModule,
    CategoriaModule,
    ProdutoModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
