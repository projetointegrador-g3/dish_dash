import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    // Relacionamento com Usuario
}