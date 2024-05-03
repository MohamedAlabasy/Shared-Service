import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema({ strict: true, timestamps: true })
export class School {
    @Prop({ type: String })
    name: string;

    @Prop({ type: String })
    location: string;

    @Prop({ type: Number })
    class_number: number;
}

export type SchoolDocument = HydratedDocument<School>;
export const SchoolSchema = SchemaFactory.createForClass(School);