import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { School } from '../../entities-name';


@Schema({ strict: true, timestamps: true })
export class User {
    @Prop({ type: String })
    name: string;

    @Prop({ type: Number })
    age: number;

    @Prop({ type: String })
    address: string;

    @Prop({ type: Types.ObjectId, ref: School })
    school_id: Types.ObjectId
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);