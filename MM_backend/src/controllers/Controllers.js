const pool = require('../db');

//obtener todas las motos
const getAllMotos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task')
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
    }
}

//obtener las motos por marca
const geMotosbyMark = async (req, res) => {
    try {
        const { mark } = req.params;
        const result = await pool.query('SELECT * FROM task where mark = $1', [mark])
        if (result.rows.length === 0) return res.status(404).json({
            message: "moto not found",
        });
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
    }
}

//obtener las motos por tipo
const geMotosbyType = async (req, res) => {
    try {
        const { type } = req.params;
        const result = await pool.query('SELECT * FROM task where type = $1', [type])
        if (result.rows.length === 0) return res.status(404).json({
            message: "moto not found",
        });
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
    }
}

//insertando motos
const createMoto = async (req, res) => {
    const { type, mark, model, description, img, state, units } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO task (type, mark, model, description, img, state, units) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
            type,
            mark,
            model,
            description,
            img,
            state,
            units
        ])
        res.json(result.rows[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
}
//actualizar motos
const updateMoto = async (req, res) => {
    const { id } = req.params;
    const { type, mark, model, description, img, state, units } = req.body;

    try {
        const result = await pool.query(
            "UPDATE task SET type = $1, mark = $2, model =$3, description = $4, img = $5, state = $6, units = $7 where id = $8", [
            type,
            mark,
            model,
            description,
            img,
            state,
            units,
            id
        ])
        res.json(result.rows[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = {
    getAllMotos,
    geMotosbyMark,
    geMotosbyType,
    createMoto,
    updateMoto
}