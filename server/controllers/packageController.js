module.exports = {
    getPackages: (req, res) => {
        const db = req.app.get('db')
        db.packages.get_packages().then(packages => {
            res.status(200).send(packages)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}