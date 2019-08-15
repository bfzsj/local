"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const catalog_controller_1 = require("./catalog.controller");
describe('Catalog Controller', () => {
    let module;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        module = yield testing_1.Test.createTestingModule({
            controllers: [catalog_controller_1.CatalogController],
        }).compile();
    }));
    it('should be defined', () => {
        const controller = module.get(catalog_controller_1.CatalogController);
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=catalog.controller.spec.js.map