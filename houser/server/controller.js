module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zip} = req.body;
        
        dbInstance.add_house([name, address, city, state, zip])
        .then( house => res.status(200).send( 'Added!') )
        .catch( (x) => res.status(500).send(x) );
        // .catch( console.log(err) );

    },

    read: (req, res) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.get_houses()
        .then( houser => res.status(200).send( houser ) )
        .catch( () => res.status(500).send('error') );
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_house([req.params.id])
        .then( house => res.status(200).send( 'Deleted!' ) )
        .catch( () => res.status(500).send('error') );
    }
}
