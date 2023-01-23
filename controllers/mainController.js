const fs = require('fs');
const path = require('path');

const skillsFilePath = path.join(__dirname, '../dataBase/skills.json');
const skills = JSON.parse(fs.readFileSync(skillsFilePath, 'utf-8'));

const controller = {

    index: (req, res) => {
        res.render('index', {style: "/css/styleIndex.css", title: "Felix Doura", skills})
    },
}

module.exports = controller;