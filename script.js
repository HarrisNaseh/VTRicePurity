fetch('./test.txt').then(response => response.text())
.then(text=> {
    const lines = text.split('\n');
    
    const questions = document.getElementById("questions");
    lines.forEach((line, index) =>{
        const lineDiv = document.createElement("div");
        const indexSpan = document.createElement('span');
        indexSpan.textContent = (index + 1) + '. ';
        lineDiv.appendChild(indexSpan);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox"
        checkbox.className = "checkboxes"
        lineDiv.appendChild(checkbox);

        const label = document.createElement('label')
        label.htmlFor = 'line_' + index;
        label.appendChild(document.createTextNode(line));
        lineDiv.appendChild(label);
        questions.appendChild(lineDiv);
    })
})
document.getElementById('submitBtn').addEventListener('click', calculateScore);
document.getElementById('clearBtn').addEventListener('click', clearSelection);
const scoreDiv = document.getElementById("scorediv");
scoreDiv.style.display = "none";

function calculateScore(){
    const checkboxes = Array.from(document.getElementsByClassName("checkboxes"));
    let score = 100;
    checkboxes.forEach((box, index) =>{
        if(box.checked){
            score -= 1;
        }
    });
    document.getElementById("questions").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("clearBtn").style.display = "none";
    document.getElementById("directions").style.display = "none";
    document.body.style = "background: linear-gradient(to bottom, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff );"

   document.getElementById("scorediv").style.display = "block";

    const sDiv = document.getElementById("score");
    // sDiv.appendChild(document.createTextNode("Score:"));
    const scoreText = document.createTextNode(score);
    sDiv.appendChild(scoreText);

}

function clearSelection(){
    const checkboxes = Array.from(document.getElementsByClassName("checkboxes"));

    checkboxes.forEach((box, index) =>{
        if(box.checked){
            box.click();
        }
    });

}