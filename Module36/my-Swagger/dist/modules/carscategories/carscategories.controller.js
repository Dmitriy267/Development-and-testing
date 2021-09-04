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
exports.CarsCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const carscategories_service_1 = require("./carscategories.service");
const swagger_1 = require("@nestjs/swagger");
const carscategory_entity_1 = require("../entity/carscategory.entity");
const create_carscategory_dto_1 = require("../dto/create-carscategory.dto");
const update_carscategory_dto_1 = require("../dto/update-carscategory.dto");
let CarsCategoriesController = class CarsCategoriesController {
    constructor(carscategoriesService) {
        this.carscategoriesService = carscategoriesService;
    }
    async findAll() {
        return this.carscategoriesService.findAll();
    }
    findOne(params) {
        console.log('Get carscategory ', params.id_unique);
        return this.carscategoriesService.findOne(Number(params.id_unique));
    }
    async create(createCarsCategoryDto) {
        console.log('Create carscategory ', carscategory_entity_1.CarsCategory);
        return this.carscategoriesService.create(createCarsCategoryDto);
    }
    async update(updateCarsCategoryDto) {
        console.log('Update  carscategory', carscategory_entity_1.CarsCategory);
        return this.carscategoriesService.update(updateCarsCategoryDto);
    }
    deleteCarsCategory(id_unique) {
        console.log('Delete  carscategory');
        return `This action removes a #${id_unique} carscategories`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsCategoriesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id_unique'),
    swagger_1.ApiResponse({ status: 200, description: 'The record has been successfully get',
        type: carscategory_entity_1.CarsCategory,
    }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsCategoriesController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiTags('create carscategories'),
    common_1.Post(),
    common_1.HttpCode(204),
    swagger_1.ApiResponse({ status: 204, description: 'The record has been successfully created',
        type: carscategory_entity_1.CarsCategory,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carscategory_dto_1.CreateCarsCategoryDto]),
    __metadata("design:returntype", Promise)
], CarsCategoriesController.prototype, "create", null);
__decorate([
    common_1.Put(),
    swagger_1.ApiResponse({ description: 'Successful update of carscategories data' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_carscategory_dto_1.UpdateCarsCategoryDto]),
    __metadata("design:returntype", Promise)
], CarsCategoriesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id_unique'),
    swagger_1.ApiResponse({ description: 'Successful deletion of carscategories data' }),
    __param(0, common_1.Param('id_unique')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarsCategoriesController.prototype, "deleteCarsCategory", null);
CarsCategoriesController = __decorate([
    swagger_1.ApiTags('carscategories'),
    swagger_1.ApiHeader({
        name: 'List of carscategories',
        description: 'General information about cars with categories'
    }),
    common_1.Controller('carscategories'),
    __metadata("design:paramtypes", [carscategories_service_1.CarsCategoriesService])
], CarsCategoriesController);
exports.CarsCategoriesController = CarsCategoriesController;
//# sourceMappingURL=carscategories.controller.js.map