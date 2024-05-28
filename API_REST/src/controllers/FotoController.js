import multer from 'multer';
import Aluno from '../models/Aluno';
import multerConfig from '../config/multer';
import Foto from '../models/Foto';

const uploads = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return uploads(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (e) {
        res.status(400).json({ errors: ['usuário inexistente'] });
      }
    });
  }
}

export default new FotoController();
