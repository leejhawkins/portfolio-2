
requirejs.config({
    baseUrl: 'js/lib'
})

require(['projects'], function(projects){
   projects.projects.map(project => {
       $('.gallery').append(`<div class="col l4 m6 s12 gallery-item gallery-expand gallery-filter ${project.languages}">
                            <div class="card">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="responsive-img activator" src="${project.imgSrc}">

                                </div>
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">${project.projectName}<i
                                            class="material-icons right">more_vert</i></span>
                                    <p><a href="${project.appUrl}">Use App</a></p>
                                    <p><a href="${project.githubUrl}"><img
                                                src="images/github.png"
                                                style="width:15px;margin-right:5px">Repository</a></p>
                                </div>

                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4" style="font-size:16px">${project.projectName}
                                        <i class="material-icons right">close</i></span>
                                    <p>${project.summary}
                                    </p>
                                </div>
                            </div>
                        </div>`)
   })
   
})

