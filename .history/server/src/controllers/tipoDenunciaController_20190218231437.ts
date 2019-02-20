import { Request, Response } from "express";
import pool from "../database";
class TipoDenunciaController {
  // Listar todos los tipoDenuncia
  public async list(req: Request, res: Response): Promise<void> {
    const tipoDenuncia = await pool.query("SELECT * FROM t_tipo_denuncia");
    res.json(tipoDenuncia);
  }
  //Listar solo un tipoDenuncia por el ID
  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const tipoDenuncia = await pool.query(
      "SELECT * FROM t_tipo_denuncia WHERE tdenun_id = ? ",
      [id]
    );
    if (tipoDenuncia.length > 0) {
      return res.json(tipoDenuncia[0]);
    }
    res.status(404).json({ text: "la tipoDenuncia no existe" });
  }
}

export const tipoDenunciaController = new TipoDenunciaController();
export default tipoDenunciaController;
