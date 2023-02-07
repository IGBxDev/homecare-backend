import { CNPJProvider } from "../../providers/implementations/CNPJProvider";
import { GetCnpjController } from "./GetCnpjController";

const cnpjProvider = new CNPJProvider()
const getCnpjController = new GetCnpjController(
    cnpjProvider
)

export { getCnpjController }