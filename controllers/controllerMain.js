const linea = require("../public/utils/lineaCredito");

const mainController = {
    index : (req, res) => {
        return res.render("index", { linea : linea });
    }
}

module.exports = mainController;