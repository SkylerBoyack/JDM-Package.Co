module.exports = {
    getCart: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        if(!user){
            return res.status(511).send('User not found')
        }
        db.cart.get_cart_packages(user.cart_id).then(cart => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    addToCart: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session 
        const {package_id} = req.params
        if(!user){
            return res.status(511).send('User not found')
        }
        db.cart.add_to_cart(user.cart_id, package_id)
        .then((cart) => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    deletePackageFromCart: (req, res) => {
        const db = req.app.get('db')
        const {user} =  req.session
        const {package_id} = req.params
        if(!user){
            return res.status(511).send('User not found')
        }
        db.cart.delete_package_from_cart(user.cart_id, package_id)
        .then((cart) => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    changeCartQty: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {package_id} = req.params
        const {quantity} = req.body
        if(!user){
            return res.status(511).send('User not found')
        }
        db.cart.change_cart_qty(user.cart_id, package_id, quantity)
        .then((cartPackages) => {
            res.status(200).send(cartPackages)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}