"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToursService = void 0;
const common_1 = require("@nestjs/common");
let ToursService = class ToursService {
    constructor() {
        this.tours = [];
    }
    findAll() {
        return this.tours;
    }
    findOne(state_number) {
        return this.tours[state_number];
    }
    create(tour) {
        this.tours.push(tour);
        return tour;
    }
    update(tour) {
        this.tours.push(tour);
        return tour;
    }
};
ToursService = __decorate([
    common_1.Injectable()
], ToursService);
exports.ToursService = ToursService;
//# sourceMappingURL=tours.service.js.map