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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const swagger_1 = require("@nestjs/swagger");
const category_entity_1 = require("../entity/category.entity");
const create_category_dto_1 = require("../dto/create-category.dto");
const update_category_dto_1 = require("../dto/update-category.dto");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async findAll() {
        return this.categoriesService.findAll();
    }
    findOne(params) {
        console.log('Get category ', params.auto_category);
        return this.categoriesService.findOne(params.auto_category);
    }
    async create(createCategoryDto) {
        console.log('Create category ', category_entity_1.Category);
        return this.categoriesService.create(createCategoryDto);
    }
    async update(updateCategoryDto) {
        console.log('Update category ', category_entity_1.Category);
        return this.categoriesService.update(updateCategoryDto);
    }
    remove(auto_category) {
        console.log('Delete category ');
        return `This action removes a #${auto_category} category`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':auto_category'),
    swagger_1.ApiResponse({ status: 200, description: 'The record has been successfully get',
        type: category_entity_1.Category,
    }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiTags('create categories'),
    common_1.Post(),
    common_1.HttpCode(204),
    swagger_1.ApiResponse({ status: 204, description: 'The record has been successfully created',
        type: category_entity_1.Category,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "create", null);
__decorate([
    common_1.Put(),
    swagger_1.ApiResponse({ description: 'Successful update of category data' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "update", null);
__decorate([
    common_1.Delete(':auto_category'),
    swagger_1.ApiResponse({ description: 'Successful deletion of category data' }),
    __param(0, common_1.Param('auto_category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "remove", null);
CategoriesController = __decorate([
    swagger_1.ApiTags('categories'),
    swagger_1.ApiHeader({
        name: 'List of categories',
        description: 'Category of cars for rent'
    }),
    common_1.Controller('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map