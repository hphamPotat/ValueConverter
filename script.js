function convertTemp(){
    var celsius = document.getElementById("c");
    var fahrenheit = document.getElementById("f");

    if (celsius.value == "" && fahrenheit.value == ""){
        alert("Please enter field");
        return;
    }

    if (fahrenheit.value == ""){
        fahrenheit.value = (celsius.value * 9/5) + 32;
    }
    else {
        celsius.value = (fahrenheit.value - 32) * 5/9;
    }
}

function convertWeight(){
    var kg = document.getElementById("kg");
    var lbs = document.getElementById("lbs");
    kg_value = kg.value;
    lbs_value = lbs.value;

    if (kg_value == "" && lbs_value == ""){
        alert("Please enter field");
        return;
    }

    if (kg_value == ""){
        kg.value = lbs_value / 2.2;
    }
    else {
        lbs.value = kg_value * 2.2;
    }
}

function convertLength(){
    var km = document.getElementById("km");
    var m = document.getElementById("m");
    km_value = km.value;
    m_value = m.value;

    if (km_value == "" && m_value == ""){
        alert("Please enter field");
        return;
    }

    if (km_value == ""){
        kg.value = m_value / 0.62137;;
    }
    else {
        m.value = km * 0.62137;
    }
}