import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies/')
    this.router
      .post('', this.createGalaxy)
      .get('', this.allGalaxies)
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
      return res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }
}
