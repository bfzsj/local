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
let user_information = class user_information {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], user_information.prototype, "USER_ID", void 0);
__decorate([
    typeorm_1.Column({ length: 5 }),
    __metadata("design:type", String)
], user_information.prototype, "USER_NAME", void 0);
__decorate([
    typeorm_1.Column({ length: 5 }),
    __metadata("design:type", String)
], user_information.prototype, "VIP_LEVEL", void 0);
__decorate([
    typeorm_1.Column({ length: 11 }),
    __metadata("design:type", String)
], user_information.prototype, "PHONE_NUMBER", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], user_information.prototype, "APPLE_ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], user_information.prototype, "PASSWORD", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], user_information.prototype, "BUSINESS_LICEBSE", void 0);
user_information = __decorate([
    typeorm_1.Entity()
], user_information);
exports.user_information = user_information;
//# sourceMappingURL=user_information.entity.js.map