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
const shanxilocal_controller_1 = require("./shanxilocal.controller");
describe('Shanxilocal Controller', () => {
    let module;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        module = yield testing_1.Test.createTestingModule({
            controllers: [shanxilocal_controller_1.ShanxilocalController],
        }).compile();
    }));
    it('should be defined', () => {
        const controller = module.get(shanxilocal_controller_1.ShanxilocalController);
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=shanxilocal.controller.spec.js.map