var projects = document.getElementById("projects")
var loading = document.getElementById("loading")

var projectlist = require('../projects/projects.json')

projectlist.forEach(cur => {
    var projbox = document.createElement("div")
    projbox.className = "projbox"
    projbox.innerHTML = '<p class="projname">' + cur.name + '</p>' +
        '<p class="projdesc">' + cur.description + '</p>'

    projbox.addEventListener('click', () => {
        window.electron.send('menuEvent', 'openProject ' + cur.id)
    })

    projects.appendChild(projbox)
})

loading.remove()