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
const shanxilocal_service_1 = require("./shanxilocal.service");
const shanxilocal_entity_1 = require("../entities/shanxilocal.entity");
let ShanxilocalController = class ShanxilocalController {
    constructor(localService) {
        this.localService = localService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.localService.getAll();
        });
    }
    save(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.localService.save(request)) {
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
};
__decorate([
    common_1.Post("getAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShanxilocalController.prototype, "getAll", null);
__decorate([
    common_1.Post("insert"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shanxilocal_entity_1.shanxilocal, Object]),
    __metadata("design:returntype", Promise)
], ShanxilocalController.prototype, "save", null);
ShanxilocalController = __decorate([
    common_1.Controller('shanxilocal'),
    __metadata("design:paramtypes", [shanxilocal_service_1.ShanxilocalService])
], ShanxilocalController);
exports.ShanxilocalController = ShanxilocalController;
//# sourceMappingURL=shanxilocal.controller.js.map