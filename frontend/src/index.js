import axios from 'axios'
import Handlebars from 'handlebars'

function load_courses_data() {
    axios.get('/api/courses')
        .then(response => {
            let src = `{{#each this}}<tr>
                            <td>{{title}}</td>
                            <td>{{#each teachers}}{{first_name}} {{last_name}}<br>{{/each}}</td>
                            <td>{{start_date}}</td>
                            <td>{{end_date}}</td>
                            <td>{{#if finished}}Да{{else}}Нет{{/if}}</td>
                        </tr>{{/each}}`
            let t = Handlebars.compile(src)
            document.querySelector('.courses-table').innerHTML = t(response.data)
        })
        .catch(error => {
            alert(error)
        })
}

load_courses_data()