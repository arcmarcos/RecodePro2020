from flask import request, render_template

def calculator():
    imc = ''
    if request.method == 'POST' and 'weight' in request.form and 'height' in request.form:
        weight = float(request.form.get('weight'))
        height = float(request.form.get('height'))
        imc = round((weight / ((height / 100) ** 2)), 2)
    return render_template("index.html", imc = imc)