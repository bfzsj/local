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
const username_service_1 = require("./username.service");
const username_entity_1 = require("../entities/username.entity");
let UsernameController = class UsernameController {
    constructor(usernameService) {
        this.usernameService = usernameService;
    }
    root() {
        return this.usernameService.root();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usernameService.findAll();
        });
    }
    login(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((yield this.usernameService.findOne(request)) != undefined) {
                res.send({
                    code: 200,
                    data: yield this.usernameService.findOne(request)
                });
            }
            else {
                res.send({
                    code: 300
                });
            }
        });
    }
    save(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            request.root = "客户";
            if (yield this.usernameService.create(request)) {
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
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UsernameController.prototype, "root", null);
__decorate([
    common_1.Get("getAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsernameController.prototype, "findAll", null);
__decorate([
    common_1.Post("login"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [username_entity_1.username, Object]),
    __metadata("design:returntype", Promise)
], UsernameController.prototype, "login", null);
__decorate([
    common_1.Post("save"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [username_entity_1.username, Object]),
    __metadata("design:returntype", Promise)
], UsernameController.prototype, "save", null);
UsernameController = __decorate([
    common_1.Controller('username'),
    __metadata("design:paramtypes", [username_service_1.UsernameService])
], UsernameController);
exports.UsernameController = UsernameController;
//# sourceMappingURL=username.controller.js.map