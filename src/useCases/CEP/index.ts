import { CEPProvider } from "../../providers/implementations/CEPProvider";
import { GetCepController } from "./GetCepController";

const cepProvider = new CEPProvider()
const getCepController = new GetCepController(
    cepProvider
)

export { getCepController }