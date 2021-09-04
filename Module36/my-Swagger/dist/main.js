"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const users_module_1 = require("./modules/users/users.module");
const cars_module_1 = require("./modules/cars/cars.module");
const tours_module_1 = require("./modules/tours/tours.module");
const categories_module_1 = require("./modules/categories/categories.module");
const carscategories_module_1 = require("./modules/carscategories/carscategories.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const userOptions = new swagger_1.DocumentBuilder()
        .setTitle('Users example')
        .setDescription('The users API description')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const userDocument = swagger_1.SwaggerModule.createDocument(app, userOptions, {
        include: [users_module_1.UsersModule],
    });
    swagger_1.SwaggerModule.setup('swagger/users', app, userDocument);
    const carOptions = new swagger_1.DocumentBuilder()
        .setTitle('Cars example')
        .setDescription('The cars API description')
        .setVersion('1.0')
        .addTag('cars')
        .build();
    const carDocument = swagger_1.SwaggerModule.createDocument(app, carOptions, {
        include: [cars_module_1.CarsModule],
    });
    swagger_1.SwaggerModule.setup('swagger/cars', app, carDocument);
    const tourOptions = new swagger_1.DocumentBuilder()
        .setTitle('Tours example')
        .setDescription('The tours API description')
        .setVersion('1.0')
        .addTag('tours')
        .build();
    const tourDocument = swagger_1.SwaggerModule.createDocument(app, tourOptions, {
        include: [tours_module_1.ToursModule],
    });
    swagger_1.SwaggerModule.setup('swagger/tours', app, tourDocument);
    const categoryOptions = new swagger_1.DocumentBuilder()
        .setTitle('Categories example')
        .setDescription('The categories API description')
        .setVersion('1.0')
        .addTag('categories')
        .build();
    const categoryDocument = swagger_1.SwaggerModule.createDocument(app, categoryOptions, {
        include: [categories_module_1.CategoriesModule],
    });
    swagger_1.SwaggerModule.setup('swagger/categories', app, categoryDocument);
    const carscategoryOptions = new swagger_1.DocumentBuilder()
        .setTitle('CarsCategories example')
        .setDescription('The carscategories API description')
        .setVersion('1.0')
        .addTag('carscategories')
        .build();
    const carscategoryDocument = swagger_1.SwaggerModule.createDocument(app, carscategoryOptions, {
        include: [carscategories_module_1.CarsCategoriesModule],
    });
    swagger_1.SwaggerModule.setup('swagger/carscategories', app, carscategoryDocument);
    await app.listen(3006);
}
bootstrap();
//# sourceMappingURL=main.js.map