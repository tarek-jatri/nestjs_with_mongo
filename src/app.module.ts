import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tarek_jatri_2:AJR2B1ObqmoSygqM@nestjs.zjwbnes.mongodb.net/test',
    ),
    ProductModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
