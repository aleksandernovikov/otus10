import axios from 'axios'
import Handlebars from 'handlebars'
import {ENDPOINTS} from "../config/urls";

function loadCoursesData() {
    axios.get(ENDPOINTS['coursesList'])
        .then(response => {
            let src = `{{#with this as | courses |}}
                         {{#each courses}}
                             <tr>
                                <td>{{title}}</td>
                                <td>{{#each teachers}}{{first_name}} {{last_name}}<br>{{/each}}</td>
                                <td>{{start_date}}</td>
                                <td>{{end_date}}</td>
                                <td>{{#if finished}}Да{{else}}Нет{{/if}}</td>
                            </tr>
                         {{/each}}
                       {{/with}}`
            let template = Handlebars.compile(src)
            document.querySelector('.courses-table').innerHTML = template(response.data)
        })
        .catch(error => {
            alert(error)
        })
}

loadCoursesData();