import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_categoria"})
export class Categoria{
    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length:255, nullable:false})
    categoria:string

    //@OneToMany(()=>)
}