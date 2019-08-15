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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_information_entity_1 = require("../entities/user_information.entity");
const user_information_service_1 = require("./user-information.service");
let UserInformationController = class UserInformationController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.getAll();
        });
    }
    save(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.userService.save(request)) {
                res.send({
                    code: 200,
                    data: request
                });
            }
            else {
                res.send({
                    code: 300
                });
            }
        });
    }
    remove(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.userService.remove(request)) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};
__decorate([
    common_1.Post("getAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserInformationController.prototype, "getAll", null);
__decorate([
    common_1.Post("insert"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_information_entity_1.user_information, Object]),
    __metadata("design:returntype", Promise)
], UserInformationController.prototype, "save", null);
__decorate([
    common_1.Post("delete"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_information_entity_1.user_information]),
    __metadata("design:returntype", Promise)
], UserInformationController.prototype, "remove", null);
UserInformationController = __decorate([
    common_1.Controller('user-information'),
    __metadata("design:paramtypes", [user_information_service_1.UserInformationService])
], UserInformationController);
exports.UserInformationController = UserInformationController;
//# sourceMappingURL=user-information.controller.js.map