
const index = {
    home:(req,res) => { 
        const urlBase = {url:'http://localhost:3000/'}
        return res.render('index', {urlBase})
    }
}

module.exports = index;