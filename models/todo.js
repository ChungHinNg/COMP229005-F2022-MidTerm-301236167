//  <!--  File name: COMP229005-F2022-MidTerm-301236167
    // Web App name: COMP229005midterm301236167
    // Student ID: 301236167
    // Name: Chung Hin Ng
    // Data: Oct 25, 2022 -->
// Import
let mongoose = require('mongoose');

// Create a model class
let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: { type: Boolean, default: false }        
    },
    {
        collection: "todo"
    }
);

module.exports = mongoose.model("Todo", todoModel);