var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required!'},
    featured: {type: Boolean, required: '{PATH} is required!'},
    published: {type: Date, required: '{PATH} is required!'},
    tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Course.create({title: 'C++ publish', featured: true, published: new Date('10/5/2017'), tags: ['C++', 'Desktop']});
            Course.create({title: 'C# publish', featured: false, published: new Date('1/11/2017'), tags: ['C#', 'C++', 'Desktop']});
            Course.create({title: 'Java publish', featured: true, published: new Date('2/30/2017'), tags: ['Java']});
            Course.create({title: 'Ruby publish', featured: true, published: new Date('5/12/2017'), tags: ['Ruby']});
            Course.create({title: 'Python publish', featured: false, published: new Date('8/27/2017'), tags: ['Python']});
            Course.create({title: 'JS publish', featured: true, published: new Date('1/10/2017'), tags: ['JS']});
            Course.create({title: 'C publish', featured: false, published: new Date('3/12/2017'), tags: ['C', 'Desktop']});
            Course.create({title: 'PHP publish', featured: true, published: new Date('7/5/2017'), tags: ['PHP', 'Web']});
            Course.create({title: 'Rails publish', featured: true, published: new Date('3/3/2017'), tags: ['Ruby', 'Rails']});
            Course.create({title: 'Node publish', featured: false, published: new Date('11/21/2017'), tags: ['Node', 'Web', 'JS']});
            Course.create({title: 'Angular publish', featured: true, published: new Date('11/29/2017'), tags: ['Angular', 'JS', 'Web']});
            Course.create({title: 'Mongo publish', featured: false, published: new Date('9/15/2017'), tags: ['Database', 'Web', 'Mongo']});
        }
    });
}

exports.createDefaultCourses = createDefaultCourses;