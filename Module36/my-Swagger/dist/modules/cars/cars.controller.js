"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const swagger_1 = require("@nestjs/swagger");
const car_entity_1 = require("../entity/car.entity");
const create_car_dto_1 = require("../dto/create-car.dto");
const update_car_dto_1 = require("../dto/update-car.dto");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async findAll() {
        return this.carsService.findAll();
    }
    findOne(params) {
        console.log('Get car ', params.state_number);
        return this.carsService.findOne(params.state_number);
    }
    async create(createCarDto) {
        console.log('Create car ', car_entity_1.Car);
        return this.carsService.create(createCarDto);
    }
    async update(updateCarDto) {
        console.log('Update car ', car_entity_1.Car);
        return this.carsService.update(updateCarDto);
    }
    deleteCar(state_number) {
        console.log('Delete car ');
        return `This action removes a #${state_number} car`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':state_number'),
    swagger_1.ApiResponse({ status: 200, description: 'The record has been successfully get',
        type: car_entity_1.Car,
    }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiTags('create cars'),
    common_1.Post(),
    common_1.HttpCode(204),
    swagger_1.ApiResponse({ status: 204, description: 'The record has been successfully created',
        type: car_entity_1.Car,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_dto_1.CreateCarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "create", null);
__decorate([
    common_1.Put(),
    swagger_1.ApiResponse({ description: 'Successful update of car data' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_car_dto_1.UpdateCarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "update", null);
__decorate([
    common_1.Delete(':state_number'),
    swagger_1.ApiResponse({ description: 'Successful deletion of car data' }),
    __param(0, common_1.Param('state_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "deleteCar", null);
CarsController = __decorate([
    swagger_1.ApiTags('cars'),
    swagger_1.ApiHeader({
        name: 'List of cars',
        description: 'Choosing the right car'
    }),
    common_1.Controller('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map