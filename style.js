
$(document).ready(function() {
i = 0
string = "Claverthall will be back soon </a>"

update = () ->
  i++
  $ '.a'
    .html string.substr 0, i

setInterval update, 70
}
