"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../generated/prisma");
var axios_1 = require("axios");
// Configuration explicite de Prisma
var prisma = new prisma_1.PrismaClient({
    log: ["query", "info", "warn", "error"],
});
var TVMAZE_BASE_URL = "https://api.tvmaze.com";
function getShowDetails(tvmazeId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get("".concat(TVMAZE_BASE_URL, "/shows/").concat(tvmazeId))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function getShowSeasons(tvmazeId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get("".concat(TVMAZE_BASE_URL, "/shows/").concat(tvmazeId, "/seasons"))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function getShowEpisodes(seasonId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get("".concat(TVMAZE_BASE_URL, "/seasons/").concat(seasonId, "/episodes"))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function getShowCast(tvmazeId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get("".concat(TVMAZE_BASE_URL, "/shows/").concat(tvmazeId, "/cast"))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function enrichShows() {
    return __awaiter(this, void 0, void 0, function () {
        var shows, _i, shows_1, show, showDetails, seasons, cast, _a, _b, genreName, dbGenre, existingRelation, platforms, _c, platforms_1, platform, dbPlatform, existingRelation, _d, seasons_1, season, episodes, _e, episodes_1, episode, _f, cast_1, castMember, error_1, error_2;
        var _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    _h.trys.push([0, 39, 40, 42]);
                    return [4 /*yield*/, prisma.shows.findMany()];
                case 1:
                    shows = _h.sent();
                    console.log("Enrichissement de ".concat(shows.length, " s\u00E9ries..."));
                    _i = 0, shows_1 = shows;
                    _h.label = 2;
                case 2:
                    if (!(_i < shows_1.length)) return [3 /*break*/, 38];
                    show = shows_1[_i];
                    console.log("Traitement de la s\u00E9rie: ".concat(show.title));
                    _h.label = 3;
                case 3:
                    _h.trys.push([3, 36, , 37]);
                    return [4 /*yield*/, getShowDetails(show.show_id)];
                case 4:
                    showDetails = _h.sent();
                    return [4 /*yield*/, getShowSeasons(show.show_id)];
                case 5:
                    seasons = _h.sent();
                    return [4 /*yield*/, getShowCast(show.show_id)];
                case 6:
                    cast = _h.sent();
                    _a = 0, _b = showDetails.genres;
                    _h.label = 7;
                case 7:
                    if (!(_a < _b.length)) return [3 /*break*/, 14];
                    genreName = _b[_a];
                    return [4 /*yield*/, prisma.genres.findFirst({
                            where: { name: genreName },
                        })];
                case 8:
                    dbGenre = _h.sent();
                    if (!!dbGenre) return [3 /*break*/, 10];
                    return [4 /*yield*/, prisma.genres.create({
                            data: {
                                name: genreName,
                            },
                        })];
                case 9:
                    dbGenre = _h.sent();
                    _h.label = 10;
                case 10: return [4 /*yield*/, prisma.seriesGenres.findFirst({
                        where: {
                            id_show: show.show_id,
                            id_genre: dbGenre.id,
                        },
                    })];
                case 11:
                    existingRelation = _h.sent();
                    if (!!existingRelation) return [3 /*break*/, 13];
                    return [4 /*yield*/, prisma.seriesGenres.create({
                            data: {
                                id_show: show.show_id,
                                id_genre: dbGenre.id,
                            },
                        })];
                case 12:
                    _h.sent();
                    _h.label = 13;
                case 13:
                    _a++;
                    return [3 /*break*/, 7];
                case 14:
                    platforms = [
                        __assign(__assign({}, showDetails.network), { type: "network" }),
                        __assign(__assign({}, showDetails.webChannel), { type: "webChannel" }),
                    ].filter(Boolean);
                    _c = 0, platforms_1 = platforms;
                    _h.label = 15;
                case 15:
                    if (!(_c < platforms_1.length)) return [3 /*break*/, 22];
                    platform = platforms_1[_c];
                    if (!platform)
                        return [3 /*break*/, 21];
                    return [4 /*yield*/, prisma.platforms.findFirst({
                            where: {
                                name: platform.name,
                                type: platform.type,
                            },
                        })];
                case 16:
                    dbPlatform = _h.sent();
                    if (!!dbPlatform) return [3 /*break*/, 18];
                    return [4 /*yield*/, prisma.platforms.create({
                            data: {
                                name: platform.name,
                                type: platform.type,
                                country_code: ((_g = platform.country) === null || _g === void 0 ? void 0 : _g.code) || null,
                            },
                        })];
                case 17:
                    dbPlatform = _h.sent();
                    _h.label = 18;
                case 18: return [4 /*yield*/, prisma.seriesPlatforms.findFirst({
                        where: {
                            id_show: show.show_id,
                            id_platform: dbPlatform.id,
                        },
                    })];
                case 19:
                    existingRelation = _h.sent();
                    if (!!existingRelation) return [3 /*break*/, 21];
                    return [4 /*yield*/, prisma.seriesPlatforms.create({
                            data: {
                                id_show: show.show_id,
                                id_platform: dbPlatform.id,
                            },
                        })];
                case 20:
                    _h.sent();
                    _h.label = 21;
                case 21:
                    _c++;
                    return [3 /*break*/, 15];
                case 22:
                    _d = 0, seasons_1 = seasons;
                    _h.label = 23;
                case 23:
                    if (!(_d < seasons_1.length)) return [3 /*break*/, 30];
                    season = seasons_1[_d];
                    // Insérer ou mettre à jour la saison
                    return [4 /*yield*/, prisma.seasons.upsert({
                            where: { season_id: season.seasonId },
                            update: {
                                show_id: show.show_id,
                                summary: season.summary,
                                image: season.image,
                            },
                            create: {
                                season_id: season.seasonId,
                                show_id: show.show_id,
                                summary: season.summary,
                                image: season.image,
                            },
                        })];
                case 24:
                    // Insérer ou mettre à jour la saison
                    _h.sent();
                    return [4 /*yield*/, getShowEpisodes(season.seasonId)];
                case 25:
                    episodes = _h.sent();
                    _e = 0, episodes_1 = episodes;
                    _h.label = 26;
                case 26:
                    if (!(_e < episodes_1.length)) return [3 /*break*/, 29];
                    episode = episodes_1[_e];
                    return [4 /*yield*/, prisma.episodes.upsert({
                            where: { episode_id: episode.episodeId },
                            update: {
                                season_id: season.seasonId,
                                name: episode.name,
                                season_number: episode.season,
                                episode_number: episode.number,
                                airdate: episode.airdate,
                                summary: episode.summary,
                                url: episode.url,
                                image: episode.image,
                            },
                            create: {
                                episode_id: episode.episodeId,
                                season_id: season.seasonId,
                                name: episode.name,
                                season_number: episode.season,
                                episode_number: episode.number,
                                airdate: episode.airdate,
                                summary: episode.summary,
                                url: episode.url,
                                image: episode.image,
                            },
                        })];
                case 27:
                    _h.sent();
                    _h.label = 28;
                case 28:
                    _e++;
                    return [3 /*break*/, 26];
                case 29:
                    _d++;
                    return [3 /*break*/, 23];
                case 30:
                    _f = 0, cast_1 = cast;
                    _h.label = 31;
                case 31:
                    if (!(_f < cast_1.length)) return [3 /*break*/, 35];
                    castMember = cast_1[_f];
                    // Insérer ou mettre à jour l'acteur
                    return [4 /*yield*/, prisma.cast.upsert({
                            where: { person_id: castMember.personId },
                            update: {
                                name: castMember.name,
                                image: castMember.image,
                            },
                            create: {
                                person_id: castMember.personId,
                                name: castMember.name,
                                image: castMember.image,
                            },
                        })];
                case 32:
                    // Insérer ou mettre à jour l'acteur
                    _h.sent();
                    // Insérer ou mettre à jour la relation acteur-série
                    return [4 /*yield*/, prisma.showCast.upsert({
                            where: {
                                show_id_person_id: {
                                    show_id: show.show_id,
                                    person_id: castMember.personId,
                                },
                            },
                            update: {
                                character_name: castMember.character,
                            },
                            create: {
                                show_id: show.show_id,
                                person_id: castMember.personId,
                                character_name: castMember.character,
                            },
                        })];
                case 33:
                    // Insérer ou mettre à jour la relation acteur-série
                    _h.sent();
                    _h.label = 34;
                case 34:
                    _f++;
                    return [3 /*break*/, 31];
                case 35:
                    console.log("S\u00E9rie ".concat(show.title, " enrichie avec succ\u00E8s"));
                    return [3 /*break*/, 37];
                case 36:
                    error_1 = _h.sent();
                    console.error("Erreur lors du traitement de la s\u00E9rie ".concat(show.title, ":"), error_1);
                    return [3 /*break*/, 37]; // Continuer avec la série suivante en cas d'erreur
                case 37:
                    _i++;
                    return [3 /*break*/, 2];
                case 38:
                    console.log("Enrichissement terminé !");
                    return [3 /*break*/, 42];
                case 39:
                    error_2 = _h.sent();
                    console.error("Erreur lors de l'enrichissement:", error_2);
                    return [3 /*break*/, 42];
                case 40: return [4 /*yield*/, prisma.$disconnect()];
                case 41:
                    _h.sent();
                    return [7 /*endfinally*/];
                case 42: return [2 /*return*/];
            }
        });
    });
}
enrichShows();
