let conteiner = document.getElementById('conteiner')
let form = document.createElement('div')
form.setAttribute('class', 'form')
let form_title = document.createElement('div')
form_title.setAttribute('class', 'form_title')
h2 = document.createElement('h2')
h2.innerHTML = 'Login Form'
h2.style.color = '#fff'
form_title.append(h2)
form.append(form_title)
let div_input = document.createElement('div')
div_input.setAttribute('class', 'div_input')
let div_input2 = document.createElement('div')
div_input2.setAttribute('class', 'div_input')
div_input.innerHTML = `   
 <label for="input_email"><i class='bx bxs-user'></i></label>
<input type="text" id="input2" name="input_email">`
div_input2.innerHTML = `      
<label for="input_email"><i class='bx bxs-lock-alt' ></i></label>
<input type="password" id="input"  name="input_email">`
let p = document.createElement('p')
p.setAttribute('class', 'p1')
p.innerHTML = 'Forgot password?'
let button = document.createElement('button')
button.innerHTML = 'Login'
let footer_div = document.createElement('div')
footer_div.setAttribute('class', 'formfooter')
let p2 = document.createElement('p')
p2.innerHTML = 'Not a member?'
let ahref = document.createElement('a')
ahref.setAttribute('href', '#')
ahref.innerHTML='Signup now'
footer_div.append(p2)
footer_div.append(ahref)
form.append(div_input)
form.append(div_input2)
form.append(p)
form.append(button)
form.append(footer_div)
conteiner.append(form)