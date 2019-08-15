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
const catalog_service_1 = require("./catalog.service");
const catalog_entity_1 = require("../entities/catalog.entity");
const path_1 = require("path");
const fs_1 = require("fs");
let CatalogController = class CatalogController {
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.catalogService.getAll();
        });
    }
    save(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.catalogService.save(request)) {
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
    UploadedFile(file, body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(file);
            console.log(body.index);
            this.catalogService.UpdateIMG(body.index, body.src + body.index + file.originalname + ",");
            const writeImage = fs_1.createWriteStream(path_1.join(__dirname, '../..', 'public/img', `${body.index + file.originalname}`));
            writeImage.write(file.buffer);
            return this.catalogService.findOne(body.index);
        });
    }
    remove(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.catalogService.remove(request)) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    update(request) {
        return __awaiter(this, void 0, void 0, function* () {
            this.catalogService.update(request);
            return this.catalogService.findOne(request.CAT_ID);
        });
    }
};
__decorate([
    common_1.Post("getAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "getAll", null);
__decorate([
    common_1.Post("insert"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalog_entity_1.catalog, Object]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "save", null);
__decorate([
    common_1.Post('uploadIMG'),
    common_1.UseInterceptors(common_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "UploadedFile", null);
__decorate([
    common_1.Post("delete"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalog_entity_1.catalog]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "remove", null);
__decorate([
    common_1.Post("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalog_entity_1.catalog]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "update", null);
CatalogController = __decorate([
    common_1.Controller('catalog'),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], CatalogController);
exports.CatalogController = CatalogController;
//# sourceMappingURL=catalog.controller.js.map