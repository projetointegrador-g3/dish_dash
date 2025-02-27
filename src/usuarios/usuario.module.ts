import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controller/usuario.controller';
import { CategoriaModule } from '../categorias/categoria.module';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), forwardRef(() => CategoriaModule),], 
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [TypeOrmModule],
})
export class UsuarioModule {}