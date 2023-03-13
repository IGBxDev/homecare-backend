"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailTrapMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class MailTrapMailProvider {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "donnie.torphy51@ethereal.email",
                pass: "Gdnt6XQE1pmuyAfYEx"
            }
        });
    }
    async sendMail(message) {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }
}
exports.MailTrapMailProvider = MailTrapMailProvider;
