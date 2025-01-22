import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { Usuario } from "../../usuarios/entities/usuario.entity";

@Entity({name: 'tb_produtos'})
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;
    
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    preco: number;

    @IsNotEmpty()
    @Column({length: 5000})
    foto: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    info_nutricionais: string;

    // Relacionamento com Categoria
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
    // Relacionamento com Usuario
    @ManyToOne (() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}