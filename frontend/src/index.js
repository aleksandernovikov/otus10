import axios from 'axios';
import './style.css'
import 'hogan.js'

// let t = '<tr><td></td></tr>'
function load_courses_data() {
    axios.get('/api/courses')
        .then(response => {
        console.log(response.data)
    })
        .catch(error => {
            alert(error)
        })
}
load_courses_data()