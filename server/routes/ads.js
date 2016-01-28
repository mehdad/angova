var ads = [
{"id": "1", "user_id": "25", "title": "President and CEO", "description": "Eugene", "type": "3", "price": "25000000", "lease": "5000000", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "2", "user_id": "25", "title": "managerName", "description": "John", "type": "3", "price": "452000000", "lease": "500000", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "3", "user_id": "45", "title": "James", "description": "Eugene", "type": "2", "price": "456000000", "lease": "200000", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "4", "user_id": "56", "title": "Eugene", "description": "Julie", "type": "3", "price": "24000000", "lease": "50000", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "5", "user_id": "8", "title": "Eugene", "description": "James", "type": "2", "price": "78000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "6", "user_id": "53", "title": "Eugene", "description": "James", "type": "3", "price": "1100000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "7", "user_id": "89", "title": "Eugene", "description": "John", "type": "1", "price": "45000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "8", "user_id": "456456", "title": "Julie", "description": "Julie", "type": "1", "price": "27000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "9", "user_id": "846", "title": "Julie", "description": "James", "type": "3", "price": "78000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "10", "user_id": "546", "title": "Julie", "description": "John", "type": "1", "price": "45000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "11", "user_id": "489", "title": "James", "description": "James", "type": "3", "price": "45000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "12", "user_id": "789", "title": "Julie", "description": "Eugene", "type": "3", "price": "54000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""},
{"id": "13", "user_id": "465646", "title": "John", "description": "John", "type": "2", "price": "45000000", "lease": "", "mortgage": "", "gallery": "", "end_date": "", "start_date": "", "CreatedAt": "","UpdatedAt": "", "featured": ""}
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    console.log('name: ' + name);
    if (name) {
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });
        res.send(results);
    } else {
        res.send(ads);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(ads[id]);
};
