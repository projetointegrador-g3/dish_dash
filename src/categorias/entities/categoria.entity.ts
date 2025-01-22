import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produtos/entities/produto.entity";

@Entity({name:"tb_categoria"})
export class Categoria{
    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length:255, nullable:false})
    categoria:string

    //@OneToMany(()=>)
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[];
}