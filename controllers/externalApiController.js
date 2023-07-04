const axios = require('axios');
async function externalApi(req, res){
    try {
        const response = await axios.get('https://randomuser.me/api/');
        const userData = response.data.results;
        res.json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'there was an error getting the user' });
    }
}

module.exports = {externalApi};