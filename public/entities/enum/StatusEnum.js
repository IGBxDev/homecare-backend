"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEnum = void 0;
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["AWAITING_SERVICE"] = 0] = "AWAITING_SERVICE";
    StatusEnum[StatusEnum["IN_ATTENDANCE"] = 1] = "IN_ATTENDANCE";
    StatusEnum[StatusEnum["CANCELED"] = 2] = "CANCELED";
    StatusEnum[StatusEnum["IN_ATTENDANCE_WITH_HOLE"] = 3] = "IN_ATTENDANCE_WITH_HOLE";
    StatusEnum[StatusEnum["IN_HANDS_FREE_SERVICE"] = 4] = "IN_HANDS_FREE_SERVICE"; //Em atendimento com folga
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
