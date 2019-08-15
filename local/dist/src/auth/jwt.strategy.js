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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
            secretOrKey: 'secretKey',
        });
        this.authService = authService;
    }
    validate(payload, done) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entered jwt');
            const user = yield this.authService.validateUser(payload.APPLE_ID);
            if (!user) {
                return done(new common_1.UnauthorizedException(), false);
            }
            done(null, user);
        });
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
exports.callback = (err, user, info) => {
    let message;
    if (err) {
        throw err;
    }
    else if (typeof info !== 'undefined' || !user) {
        switch (info.message) {
            case 'No auth token':
            case 'invalid signature':
            case 'jwt malformed':
            case 'invalid token':
            case 'invalid signature':
                message = 'You must provide a valid authenticated access token';
                break;
            case 'jwt expired':
                message = 'Your session has expired';
                break;
            default:
                message = info.message;
                break;
        }
        throw new common_1.UnauthorizedException(message);
    }
    return user;
};
//# sourceMappingURL=jwt.strategy.js.map