let cats = [
    { id: 1, name: 'Flippy', age: 2 },
    { id: 2, name: 'Misty', age: 5 },
    { id: 3, name: 'Tigger', age: 1 },
    { id: 4, name: 'Whiskers', age: 3 }
]; // [{ id, name, age }]

const meow = (name) => {
    return `<h1>${name} says meow!</h1>`;
};

exports.getAllCats = async (req, res) => {
    try {
        let message = '';
        cats.forEach(cat => {
            message += meow(cat.name);
        });

        res.send(message)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getCatById = async (req, res) => {
    try {
        const cat = cats.find(cat => cat.id === parseInt(req.params.id));
        if (cat) {
            res.send(meow(cat.name));
        } else {
            res.status(404).json({ message: 'Cat not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createCat = async (req, res) => {
    const { name, age } = req.params;
    const cat = {
        id: cats.length + 1,
        name,
        age
    };
    cats.push(cat);
    res.status(201).json(cat);
};

exports.updateCat = async (req, res) => {
    const cat = cats.find(cat => cat.id === parseInt(req.params.id));
    if (cat) {
        const { name, age } = req.params;
        if (name) cat.name = name;
        if (age) cat.age = age;
        res.json(cat);
    } else {
        res.status(404).json({ message: 'Cat not found' });
    }
}

exports.deleteCat = async (req, res) => {
    try {
        const index = cats.findIndex(cat => cat.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Cat not found' });
        }
        cats.splice(index, 1);
        res.json({ message: 'Cat deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};