import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema({ strict: true, timestamps: true })
export class User {
    @Prop({ type: String })
    name: string;

    @Prop({ type: Number })
    age: number;

    @Prop({ type: String })
    address: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);