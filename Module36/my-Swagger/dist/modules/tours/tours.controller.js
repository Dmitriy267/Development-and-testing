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
exports.ToursController = void 0;
const common_1 = require("@nestjs/common");
const tours_service_1 = require("./tours.service");
const swagger_1 = require("@nestjs/swagger");
const tour_entity_1 = require("../entity/tour.entity");
const create_tour_dto_1 = require("../dto/create-tour.dto");
const update_tour_dto_1 = require("../dto/update-tour.dto");
let ToursController = class ToursController {
    constructor(toursService) {
        this.toursService = toursService;
    }
    async findAll() {
        return this.toursService.findAll();
    }
    findOne(params) {
        console.log('Get tour ', params.state_number);
        return this.toursService.findOne(params.state_number);
    }
    async create(createTourDto) {
        console.log('Create tour ', tour_entity_1.Tour);
        return this.toursService.create(createTourDto);
    }
    async update(updateTourDto) {
        console.log('Update tour ', tour_entity_1.Tour);
        return this.toursService.update(updateTourDto);
    }
    remove(state_number) {
        console.log('Delete tour ');
        return `This action removes a #${state_number} tour`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ToursController.prototype, "findAll", null);
__decorate([
    common_1.Get(':state_number'),
    swagger_1.ApiResponse({ status: 200, description: 'The record has been successfully get',
        type: tour_entity_1.Tour,
    }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiTags('create tours'),
    common_1.Post(),
    common_1.HttpCode(204),
    swagger_1.ApiResponse({ status: 204, description: 'The record has been successfully created',
        type: tour_entity_1.Tour,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tour_dto_1.CreateTourDto]),
    __metadata("design:returntype", Promise)
], ToursController.prototype, "create", null);
__decorate([
    common_1.Put(),
    swagger_1.ApiResponse({ description: 'Successful update of tour data' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tour_dto_1.UpdateTourDto]),
    __metadata("design:returntype", Promise)
], ToursController.prototype, "update", null);
__decorate([
    common_1.Delete(':state_number'),
    swagger_1.ApiResponse({ description: 'Successful deletion of tour data' }),
    __param(0, common_1.Param('state_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "remove", null);
ToursController = __decorate([
    swagger_1.ApiTags('tours'),
    swagger_1.ApiHeader({
        name: 'List of tours',
        description: 'Information about trips'
    }),
    common_1.Controller('tours'),
    __metadata("design:paramtypes", [tours_service_1.ToursService])
], ToursController);
exports.ToursController = ToursController;
//# sourceMappingURL=tours.controller.js.map