import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {UsersModule} from './modules/users/users.module';
import {CarsModule} from './modules/cars/cars.module';
import {ToursModule} from './modules/tours/tours.module';
import {CategoriesModule} from './modules/categories/categories.module';
import {CarsCategoriesModule} from './modules/carscategories/carscategories.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  const userOptions=new DocumentBuilder()
  .setTitle('Users example')
  .setDescription('The users API description')
  .setVersion('1.0')
  .addTag('users')
  .build();
  const userDocument= SwaggerModule.createDocument(app, userOptions,{
	  include: [UsersModule],
  });
  
  SwaggerModule.setup('swagger/users', app, userDocument);
  
  const carOptions=new DocumentBuilder()
  .setTitle('Cars example')
  .setDescription('The cars API description')
  .setVersion('1.0')
  .addTag('cars')
  .build();
  const carDocument= SwaggerModule.createDocument(app, carOptions,{
	  include: [CarsModule],
  });
   SwaggerModule.setup('swagger/cars', app, carDocument);
   
   const tourOptions=new DocumentBuilder()
  .setTitle('Tours example')
  .setDescription('The tours API description')
  .setVersion('1.0')
  .addTag('tours')
  .build();
  const tourDocument= SwaggerModule.createDocument(app, tourOptions,{
	  include: [ToursModule],
  });
   SwaggerModule.setup('swagger/tours', app, tourDocument);
  
const categoryOptions=new DocumentBuilder()
  .setTitle('Categories example')
  .setDescription('The categories API description')
  .setVersion('1.0')
  .addTag('categories')
  .build();
  const categoryDocument= SwaggerModule.createDocument(app, categoryOptions,{
	  include: [CategoriesModule],
  });
   SwaggerModule.setup('swagger/categories', app, categoryDocument);  
   
   const carscategoryOptions=new DocumentBuilder()
  .setTitle('CarsCategories example')
  .setDescription('The carscategories API description')
  .setVersion('1.0')
  .addTag('carscategories')
  .build();
  const carscategoryDocument= SwaggerModule.createDocument(app, carscategoryOptions,{
	  include: [CarsCategoriesModule],
  });
   SwaggerModule.setup('swagger/carscategories', app, carscategoryDocument);
   
  await app.listen(3006);
}
bootstrap();
