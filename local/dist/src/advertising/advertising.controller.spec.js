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
const advertising_controller_1 = require("./advertising.controller");
describe('Advertising Controller', () => {
    let module;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        module = yield testing_1.Test.createTestingModule({
            controllers: [advertising_controller_1.AdvertisingController],
        }).compile();
    }));
    it('should be defined', () => {
        const controller = module.get(advertising_controller_1.AdvertisingController);
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=advertising.controller.spec.js.map