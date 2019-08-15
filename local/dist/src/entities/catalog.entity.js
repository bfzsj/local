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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let catalog = class catalog {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], catalog.prototype, "CAT_ID", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], catalog.prototype, "CAT_NAME", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], catalog.prototype, "CAT_SUMMARY", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], catalog.prototype, "CAT_DETAILED", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], catalog.prototype, "CAL_PICTURE", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], catalog.prototype, "CAT_VIDEO", void 0);
__decorate([
    typeorm_1.Column({ length: 10 }),
    __metadata("design:type", String)
], catalog.prototype, "CAT_DIRECTORY", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], catalog.prototype, "CAT_CITY", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], catalog.prototype, "CAT_TYPE", void 0);
catalog = __decorate([
    typeorm_1.Entity()
], catalog);
exports.catalog = catalog;
//# sourceMappingURL=catalog.entity.js.map